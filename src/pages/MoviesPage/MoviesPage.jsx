import { useEffect, useState } from "react";
import { getSearchMovie } from "../../api/apiService";

export const MoviesPage = () => {

  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   // getSearchMovie()
  //   setLoading(true);
  //   const fetchSearchMovie = async () => {
  //   try {
  //   const movieDetailsData = await getSearchMovie();
  //   setMovies(movieDetailsData);
  //       console.log(movieDetailsData);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSearchMovie();
    
  // }, [query])
  






  return (
    <form>
      <input        
        placeholder="What do you want to film?"
        name="search"
        required
        autoFocus
        // onChange={saveInput}
        // value={query}
      />
      <button type="submit">
        BOBO FILM
        {/* <FiSearch size="16px" /> */}
      </button>
    </form>
  )
}