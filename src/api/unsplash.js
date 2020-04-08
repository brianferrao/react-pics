import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID G-4EqYs-miIe6aaWVDZug1E0sL8uStQm141ay_XI75Q'
    }
});