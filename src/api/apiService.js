
import axios from 'axios';

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzFjNjliMTczMjNjMTA3OWNjZTM4NmQ1Yzc0M2VhNCIsInN1YiI6IjY2MTdjYTE4N2UxMmYwMDE3Y2YyMDg1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13cpF1SNf8cjNGRqdf6vubt3OgZdGq8E4KtdY_68RPE'
axios.defaults.params = {
    language: "en-US",
    append_to_response: "images",
    page: 1,
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;


// Trending movies url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' 
export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  const movies = response.data.results
  return movies;
  
};

// export const getMovieById = (movieId) => {
//   return movies.find((movie) => movie.id === movieId);
// };

// Search movie url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
export const getSearchMovie = async () => {
  const response = await axios.get('/search/movie');
  return response.data;  
};

// Movie details url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US' 
export const getMovieDetailsById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  console.log(response.data);
  return response.data;  
};

// Movie credits url = 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US' 
export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  console.log(response.data);
  return response.data;  
};
// Movie reviews url = 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'
export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
  
};

// export const fetchTrendingMovies = async () => {
  
//   const url = 'https://api.themoviedb.org/3/trending/movie/day';
//   const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization: `Bearer ${accessToken}`
//   }
// };
//   try {
//     const response = await axios.get(url, options)
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error(error)
//   }
// }

// .then(response => console.log(response))
// .catch(err => console.error(err));

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/search/photos?page=1&query=office

// const API_KEY = "CiYbYfeKy1jv8indJhhf6vm3xolSsoXblOTrxmzC1Go";
// axios.defaults.baseURL = 'https://api.unsplash.com/';
// // axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
// axios.defaults.params = {
//     client_id: API_KEY,
//     orientation: 'landscape',
//     per_page: 12,
// };

// export const fetchPhotos = async (query, page) => {

// const { data } = await axios.get(`search/photos?page=${page}&query=${query}`);
//       console.log(data);
//     return data;
// };
