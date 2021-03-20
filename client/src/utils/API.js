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
    filterUsers: (object) => {
        return axios.get('api/profile/filter', object)
    },
    // editProfile: (data, id) => {
    //     return axios.put('api/profile/' + id, data)
    // },
    editProfileByName: (data, username) => {
        console.log(data)
        return axios.post('api/profile/' + username, data)
    },
    
    //Interests queries
    getInterests: () => {
        return axios.get('api/interests')
    }
}