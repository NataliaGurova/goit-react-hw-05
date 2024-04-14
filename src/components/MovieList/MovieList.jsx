

// import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";

// const location = useLocation();
export const MovieList = ({ movies }) => {
  return (    
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            {movie.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// {countries.map(({ id, country, flag }) => (
//         <GridItem key={id}>
//           <Link>
//             <img src={flag} alt={country} />
//           </Link>
//         </GridItem>
//       ))}