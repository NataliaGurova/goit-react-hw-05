import {useState, useEffect} from "react"
import { getTrendingMovies } from "../../api/apiService";
import { MovieList } from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    
    const fetchTrendingMovies = async () => {
      try {
        const moviesData = await getTrendingMovies();


        setMovies(moviesData);
      
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
    
  }, [])
  
  return (
    <main>
      <h1>Trending today</h1>
      {/* <img src="https://via.placeholder.com/960x240" alt="" /> */}
      <MovieList movies={movies} />
    </main>
  )
}

export default HomePage;


// .then(response => console.log(response))