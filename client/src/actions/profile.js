import axios from 'axios';
import { UPLOAD_PICTURE } from '../constants/actionTypes';
import { UPLOAD_IMAGE } from '../constants/apis';
export const uploadPicture = (pictures, history) => async dispatch => {
  const headers = {
    headers: {
      Authorization: localStorage.getItem('orderUpToken'),
    },
  };
  console.log(pictures);
  const uploadConfig = await axios.get(UPLOAD_IMAGE, headers).catch(err => console.log(err));
  console.log(uploadConfig);
  await axios.put(uploadConfig.data.url, pictures, {
    headers: {
      'Content-Type': pictures.type,
    },
  });
  //to do: post the name of the image url to mongo
};
