import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID pPPfHxT5RpIGmCJd7YxLxc82f6PlPxnyHAzOCVArtN0'
    }
});