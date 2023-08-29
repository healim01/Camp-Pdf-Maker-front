import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const GetAllCamp = async () => {
  const response = await axios.get(`${BASE_URL}/camp`);
  return response.data;
};

export const GetOneCamp = async (camp_id: number, user_id: number) => {
  const response = await axios.get(`${BASE_URL}/camp/${camp_id}/${user_id}`);
  return response.data;
};
