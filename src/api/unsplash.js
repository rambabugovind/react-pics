import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f619747be3cbdb4f2182ba04668d7e807c1e6a4d5c443a7b8fe4af0a3e7dd50a'
  }
});