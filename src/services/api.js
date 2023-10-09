import axios from 'axios';

export const findImage = async (query, page) => {
  const API_KEY = '38934946-e5c499d2b8363eeb7af4782b0';
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
