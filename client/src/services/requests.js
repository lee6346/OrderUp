import axios from 'axios';

const ROOT_URL = 'http://localhost:5000';
const ACCOUNT_URL = `${ROOT_URL}/api/v1/accounts`;
const LOGIN_URL = `${ROOT_URL}/auth/login`;
const UPLOAD_URL = `${ROOT_URL}/api/v1/uploads/aws`;

const GOOGLE_CLIENT_KEY = `AIzaSyBJbc5XQaPeA7iPrHQMk8Rx1Ox3YaKadq4`;
const GOOGLE_GEOCODE_API = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_CLIENT_KEY}&address=`;

const MENUS_URL = `${ROOT_URL}/api/v1/chefs/menus?`;
const AWS_S3_URL = 'https://s3-us-west-2.amazonaws.com/cater-profile-bucket/';

const authHeader = { Authorization: localStorage.getItem('orderUpToken') };
const contentHeader = type => ({ 'Content-Type': type });

const queryString = props => {
  return Object.keys(props)
    .filter(key => props[key])
    .map(key => key + '=' + props[key])
    .join('&');
};

export const awsS3Upload = async file => {
  try {
    const signedUrlConfig = await axios.get(UPLOAD_URL, { headers: authHeader });
    const { url, key } = signedUrlConfig.data;
    await axios.put(url, file, { headers: contentHeader(file.type) });
    const response = axios.put(ACCOUNT_URL, { imageUrl: key }, { headers: authHeader });
    return {
      ...response.data,
      imageUrl: AWS_S3_URL + response.data.imageUrl,
    };
  } catch (error) {
    throw error;
  }
};

export const createAccount = async data => {
  try {
    const response = await axios.post(ACCOUNT_URL, data);
    let { data, data: { imageUrl } } = response;
    imageUrl = imageUrl ? AWS_S3_URL + imageUrl : undefined;
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async body => {
  try {
    const response = await axios.post(LOGIN_URL, body);
    let { data, data: { imageUrl } } = response;
    imageUrl = imageUrl ? AWS_S3_URL + imageUrl : undefined;
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchUser = async () => {
  try {
    const response = await axios.get(ACCOUNT_URL, { headers: authHeader });
    let { data, data: { imageUrl } } = response;
    imageUrl = imageUrl ? AWS_S3_URL + imageUrl : undefined;
    return {
      ...data,
      imageUrl,
    };
  } catch (error) {
    console.log('error fetching user');
    throw error;
  }
};

export const retrieveMenus = async options => {
  try {
    const response = await axios.get(MENUS_URL + queryString(options), { headers: authHeader });
    return response.data;
  } catch (error) {
    console.log('error retrieving menus');
    throw error;
  }
};

export const getGeoCode = async address => {
  const url = GOOGLE_GEOCODE_API + encodeURIComponent(address);
  try {
    const response = await axios.get(url);
    const coordinates = response.data.results[0].geometry.location;

    return {
      lat: coordinates.lat,
      lng: coordinates.lng,
    };
  } catch (error) {
    throw error;
  }
};

export const getCurrentCoordinates = async () => {
  try {
    const location = await currentLocation();
    return {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
  } catch (error) {
    //need to dispatch some signal since user disallowed browser from getting current coordinates
    throw error;
  }
};

export const currentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
