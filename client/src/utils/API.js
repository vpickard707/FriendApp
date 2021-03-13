import axios from "axios"

export default {
    saveUser: (data) => {
        return axios.post('/api/userprofiles', data)
    }
}