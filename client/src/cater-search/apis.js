import axios from 'axios';

const ROOT_URL = 'http://localhost:5000';
const GOOGLE_CLIENT_KEY = `AIzaSyBJbc5XQaPeA7iPrHQMk8Rx1Ox3YaKadq4`;
const GOOGLE_GEOCODE_API = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_CLIENT_KEY}&address=`;
const MENUS_URL = `${ROOT_URL}/api/v1/chefs/menus?`;

const authHeader = token => ({ Authorization: token });

const queryString = props => {
  return Object.keys(props)
    .filter(key => props[key])
    .map(key => key + '=' + props[key])
    .join('&');
};

export const getMenus = async (options, token) => {
  try {
    const response = await axios.get(MENUS_URL + queryString(options), { headers: authHeader(token) });
    return response.data;
  } catch (error) {
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

const currentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const getCurrentCoordinates = async () => {
  try {
    const location = await currentLocation();
    return {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
  } catch (error) {
    throw error;
  }
};
