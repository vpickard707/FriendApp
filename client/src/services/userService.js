import axios from 'axios';
import authHeader from './authHeader';

const API_URL = '/api/test/';


const getPublicContent = () => {
  return axios.get(API_URL + 'all');
}

const getUserContent = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() });
}

export default {
  getPublicContent,
  getUserContent
}