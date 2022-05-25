import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challange-1b03e/us-central1/api'
})

export default instance;