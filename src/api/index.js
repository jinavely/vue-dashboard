import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// visual
const getDashBoard = () => {
  return instance.get('/dashboard');
};

export { getDashBoard };
