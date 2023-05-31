import { useState, useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard';
import { useSearchParams } from 'react-router-dom';
import '../MovieGrid.css';

const SEARCH_URL = import.meta.env.VITE_SEARCH;
const API_KEY = import.meta.env.VITE_API_KEY;

const Search = () => {
	const [searchParams] = useSearchParams();
	const [movies, setMovies] = useState([]);
	const query = searchParams.get("q");

	const getSearchedMovies = async (url: string) => {
		const res = await fetch(url);
		const data = await res.json();

		console.log(url)

		setMovies(data.results);
	};

	useEffect(() => {
		const searchWithQueryURL = `${SEARCH_URL}?${API_KEY}&query=${query}`;

		getSearchedMovies(searchWithQueryURL);
	}, [query]);


	return (
		<div className='container'>
			<h2 className='title'>
				Resultados para: <span className='query-text'>{query}</span>
			</h2>
			<div className='movies-container'>
				{movies.length > 0 && 
					movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
			</div>
		</div>
	);
};

export { Search };