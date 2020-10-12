import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID b-IH1x9CS0OuJ8ozdiQOpkpUyRx2hWXOaPIF-JAmzdA'
    }
});

