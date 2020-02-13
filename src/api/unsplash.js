import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d08ad4699635babec40705871cdc8d01621bd188c2bf2151e91271bb6e6d4020'
    }

})