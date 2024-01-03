import movies from '../../utils/movies.json'
import { MovieItem } from '../MovieItem';
import './style.scss'

export const MovieList = () => {
  return (
    <div className='MovieList'>
      {movies.map((movie) => (
          <MovieItem movie={movie} key={movie.imdbId}/>
      ))}
    </div>
  );
}