import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:5000/openai`
});

export default api;