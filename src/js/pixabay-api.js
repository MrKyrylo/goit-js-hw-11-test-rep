import axios from 'axios';

const apiKey = '42660522-ae3104db13d278f91a0482c47';
export async function searchImages(query, page = 1, perPage = 15) {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&per_page=${perPage}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}