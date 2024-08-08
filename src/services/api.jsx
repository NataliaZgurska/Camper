import axios from 'axios';

axios.defaults.baseURL = 'https://66b3e5809f9169621ea15a51.mockapi.io';

export const getAdverts = async () => {
  const { data } = await axios.get('/adverts');
  return data;
};

export const getAdvertById = async id => {
  const { data } = await axios.get(`/adverts/${id}`);
  return data;
};
