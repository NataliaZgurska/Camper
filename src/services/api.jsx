import axios from 'axios';

axios.defaults.baseURL = 'https://66b3e5809f9169621ea15a51.mockapi.io';

// ?page=1&limit=4

export const getTotalAdverts = async () => {
  const { data } = await axios.get('/adverts');
  console.log('getTotalAdverts: ', data.length);
  return data.length;
};

export const getAdverts = async page => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=4`);
  return data;
};

// export const getAdverts = async () => {
//   const { data } = await axios.get('/adverts');
//   return data;
// };

export const getAdvertById = async id => {
  const { data } = await axios.get(`/adverts/${id}`);
  return data;
};
