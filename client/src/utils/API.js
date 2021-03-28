import axios from "axios";
import authHeader from '../services/authHeader';


export default {
    //Profile queries
    getAll: () => {
        return axios.get('/api/profile', { headers: authHeader() })
    },
    saveProfile: (profileData) => {
        return axios.post('/api/profile', profileData, { headers: authHeader() })
    },
    findProfileByName: (username, props) => {
        return axios.get('api/profile/' + username, { headers: authHeader() })
    },
    filterUsers: (queryInfo) => {
        return axios.get(`api/profile/filter`, {
            headers: authHeader(),
            params: queryInfo
          })
    },
    findMatchingUsers: (queryInfo) => {
        return axios.get(`api/profile/matches`, {
            headers: authHeader(),
            params: queryInfo
          })
    },
    editProfileByName: (data, username) => {
        return axios.post(`api/profile/${username}`, data, { headers: authHeader() })
    },
    
    //Interests queries
    getInterests: () => {
        return axios.get('api/interests', { headers: authHeader() })
    },

    //user queries
    editPasswordByName: (data, username) => {
        return axios.post(`api/user/${username}`, data, { headers: authHeader() })
    },

    //favorites queries
    getFavoritesByName: (username) => {
        return axios.get(`api/favorites/${username}`, { headers: authHeader() })
    },
    saveFavorites: (data) => {
        return axios.post('api/favorites', data, { headers: authHeader() })
    },

    //matching queries
    doubleEntry: (data) => {
        return axios.post('api/match', data, { headers: authHeader() })
    },
    findMatches: (username) => {
        return axios.get(`api/match/${username}`, { headers: authHeader() })
    }

}