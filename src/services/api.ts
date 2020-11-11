import axios from 'axios';

const api = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
})

export default api;