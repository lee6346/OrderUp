import axios from 'axios';

const ROOT_URL = 'http://localhost:5000';
const LOGIN_URL = `${ROOT_URL}/auth/login`;
const REGISTER_URL = `${ROOT_URL}/auth/register`;

export const login = async body => {
  try {
    const response = await axios.post(LOGIN_URL, body);
    let { token } = response.data;
    return token;
  } catch (error) {
    throw error;
  }
};

export const register = async body => {
  try {
    const response = await axios.post(REGISTER_URL, body);
    let { token } = response.data;
    return token;
  } catch (error) {
    throw error;
  }
};
