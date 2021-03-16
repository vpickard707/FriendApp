import axios from "axios"

export default {
    saveProfile: (data) => {
        return axios.post('/api/profile', data)
    },
    editProfile: (id) => {
        return axios.put('api/profile' + id)
    }
}