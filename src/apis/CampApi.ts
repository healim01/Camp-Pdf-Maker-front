import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const GetAllCamp = async () => {
  const response = await axios.get(`${BASE_URL}/camp`);
  return response.data;
};

export const GetOneCamp = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/camp/${id}`);
  return response.data;
};
