import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const IMAGE_URL = import.meta.env.VITE_IMG;

interface MovieProps {
	movie: {
		id: number;
		title: string;
		poster_path: string;
		vote_average: number;
	}
}

const MovieCard = ({ movie }: MovieProps, {showLink = true}) => {
	return (
		<div className='movie-card'>
			<img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>
				<FaStar /> {movie.vote_average}
			</p>
			{showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
		</div>
	);
};

export { MovieCard };