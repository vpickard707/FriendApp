import axios from 'axios';
import authHeader from './authHeader';

const API_URL = '/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserContent() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new UserService();