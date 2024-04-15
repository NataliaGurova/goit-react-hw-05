
import { NavLink, useLocation } from "react-router-dom";


export const MovieList = ({ movies }) => {

const location = useLocation();
console.log( location);

  return (    
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={ location }>
            {movie.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// state={{ from: location }}
