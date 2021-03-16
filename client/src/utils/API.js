import axios from "axios"


export default {
    saveProfile: (profileData) => {
        return axios.post('/api/profile', profileData)
    },
    editProfile: (id) => {
        return axios.put('api/profile' + id)
    }
    
}