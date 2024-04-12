
import axios from 'axios';



const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzFjNjliMTczMjNjMTA3OWNjZTM4NmQ1Yzc0M2VhNCIsInN1YiI6IjY2MTdjYTE4N2UxMmYwMDE3Y2YyMDg1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13cpF1SNf8cjNGRqdf6vubt3OgZdGq8E4KtdY_68RPE'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));





// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/search/photos?page=1&query=office

const API_KEY = "CiYbYfeKy1jv8indJhhf6vm3xolSsoXblOTrxmzC1Go";
axios.defaults.baseURL = 'https://api.unsplash.com/';
// axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
    client_id: API_KEY,
    orientation: 'landscape',
    per_page: 12,
};

export const fetchPhotos = async (query, page) => {

const { data } = await axios.get(`search/photos?page=${page}&query=${query}`);
      console.log(data);
    return data;
};
