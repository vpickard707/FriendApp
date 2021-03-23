import axios from "axios"


export default {
    //Profile queries
    getAll: () => {
        return axios.get('/api/profile')
    },
    saveProfile: (profileData) => {
        return axios.post('/api/profile', profileData)
    },
    findProfileByName: (username) => {
        return axios.get('api/profile/' + username)
    },
    filterUsers: (queryInfo) => {
        return axios.get(`api/profile/filter`, {
            params: queryInfo
          })
    },
    // editProfile: (data, id) => {
    //     return axios.put('api/profile/' + id, data)
    // },
    editProfileByName: (data, username) => {
        return axios.post(`api/profile/${username}`, data)
    },
    
    //Interests queries
    getInterests: () => {
        return axios.get('api/interests')
    }
}