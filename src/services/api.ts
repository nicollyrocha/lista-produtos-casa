import axios from 'axios';

const api = axios.create({
    baseURL:
        'https://produtoscasaapi.b4a.io',
});

export default api;