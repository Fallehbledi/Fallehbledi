import axios from 'axios';
// const token = window.localStorage.getItem("authToken");
const headers: any = {};
// if (token) headers.authorization = `${token}`;
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  headers,
});

export default axiosInstance;

export const getExperts = async () => {
  try {
    const { data } = await axiosInstance.get('/api/expert');
    return data;
  } catch (error) {
    console.error('error in getExperts method', error);
  }
};
export const getMessages = async () => {
  try {
    const { data } = await axiosInstance.get('/api/message/all');
    return data;
  } catch (error) {
    console.error('error in getMessages method', error);
  }
};
