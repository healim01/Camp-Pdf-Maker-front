import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const GetAllCamp = async () => {
  const response = await axios.get(`${BASE_URL}/camp`);
  console.log('?', response.data);
  return response.data;
};

export const GetOneCamp = async (camp_id: string, user_id: string) => {
  const response = await axios.get(`${BASE_URL}/camp/${camp_id}/${user_id}`);
  console.log('?', response.data);
  return response.data;
};

export const GetProfile = async (user_id: string) => {
  const response = await axios.get(`${BASE_URL}/api/user/${user_id}`);
  console.log('?', response.data);
  return response.data;
};
