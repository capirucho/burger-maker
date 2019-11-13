import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-burger-builder-f68f8.firebaseio.com/'
});

export default axiosInstance;