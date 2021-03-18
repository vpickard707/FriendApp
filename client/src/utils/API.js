import axios from "axios"


export default {
    saveProfile: (profileData) => {
        return axios.post('/api/profile', profileData)
    },
    editProfile: (data, id) => {
        return axios.put('api/profile/' + id, data)
    },
    editProfileByName: (data, username) => {
        console.log(data)
        return axios.post('api/profile/' + username, data)
    }
    
}