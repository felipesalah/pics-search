import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bedecf51df6534e0533764e540dfbef26bfb2d6c5a6c81fb382827ecdd0100db'
    }
});