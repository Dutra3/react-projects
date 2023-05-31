import { useEffect, useState } from 'react';
import { MovieCard } from '../../components/MovieCard';
import '../MovieGrid.css';

const MOVIES_URL = import.meta.env.VITE_API;
const API_KEY = import.meta.env.VITE_API_KEY;

interface MovieProps {
	id: number;
}

const Home = () => {
	const [topMovies, setTopMovies] = useState([]);

	const getTopRatedMovies = async (url: string) => {
		const res = await fetch(url);
		const data = await res.json();

		setTopMovies(data.results);
	}

	useEffect(() => {

		const topRatedUrl = `${MOVIES_URL}top_rated?${API_KEY}`;

		getTopRatedMovies(topRatedUrl);

	}, []);

	return (
		<div className='container'>
			<h2 className='title'>Melhores Filmes:</h2>
			<div className='movies-container'>
				{topMovies.length === 0 && <p>Carregando...</p> }
				{topMovies.length > 0 && topMovies.map((movie: MovieProps) => <MovieCard key={movie.id} movie={movie} />)}
			</div>
		</div>
	);
};

export { Home };