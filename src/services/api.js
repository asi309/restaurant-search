import axios from 'axios';

const api = axios.create({
  baseURL: 'https://starlord.hackerearth.com/TopRamen'
});

export default api;