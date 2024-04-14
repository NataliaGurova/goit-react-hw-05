
// import { MovieCast } from "../../components/MovieCast/MovieCast"
// import { MovieReviews } from "../../components/MovieReviews/MovieReviews"
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieDetailsById } from "../../api/apiService";
import { useEffect, useState } from "react";


export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); 

  useEffect(() => {  
    const fetchMovie = async () => {
      if (!movieId) return;
      try {
        const movieData = await getMovieDetailsById(movieId);
        setMovie(movieData);
        console.log(movieData); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);
  
  const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'
  
  return (
    <main>
      {movie && (
        <section>
          <h1>Movie Details Page</h1>
          <div>
          {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" width={250}/> : defaultImg}
            </div>
            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre.name}</li>
                ))}
              </ul>
            </div>
        </section>
      )}
      <p>_________________________________________________________________________</p>
      <ul>
        <li>
          <Link to="credits">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};