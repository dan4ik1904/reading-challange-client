import axios from "axios";

const api = axios.create({
    baseURL: 'https://reading-challange-server-1.onrender.com/api/v1'
})

export default api