import axios from 'axios';
const ROOT_URL = 'http://localhost:5000';
const USER_URL = `${ROOT_URL}/api/v1/users`;
const UPLOAD_URL = `${ROOT_URL}/uploads`;
const AWS_S3_URL = 'https://s3-us-west-2.amazonaws.com/cater-profile-bucket/';

const authHeader = token => ({ Authorization: token });
const contentHeader = type => ({ 'Content-Type': type });

export const awsS3Upload = async file => {
  try {
    const signedUrlConfig = await axios.get(UPLOAD_URL, { headers: authHeader });
    const { url, key } = signedUrlConfig.data;
    await axios.put(url, file, { headers: contentHeader(file.type) });
    const response = axios.put(USER_URL, { imageUrl: key }, { headers: authHeader });
    return {
      ...response.data,
      imageUrl: AWS_S3_URL + response.data.imageUrl,
    };
  } catch (error) {
    throw error;
  }
};

export const fetchUser = async token => {
  try {
    const response = await axios.get(USER_URL, { headers: authHeader(token) });
    let { data, data: { imageUrl } } = response;
    imageUrl = imageUrl ? AWS_S3_URL + imageUrl : undefined;
    return {
      ...data,
      imageUrl,
    };
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (options, token) => {
  try {
    const response = await axios.put(USER_URL, options, { headers: authHeader(token) });
    let { data, data: { imageUrl } } = response;
    imageUrl = imageUrl ? AWS_S3_URL + imageUrl : undefined;
    return {
      ...data,
      imageUrl,
    };
  } catch (error) {
    throw error;
  }
};
