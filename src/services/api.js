import axios from 'axios';

const api = axios.create({
    baseURL : 'https://app-backend-tindev.herokuapp.com/api'
})

export default api;