import { useState, useEffect } from "react";
import { MovieCard } from "../../components/MovieCard";
import { useParams } from "react-router-dom";
import {
	BsGraphUp,
	BsWallet2,
	BsHourglassSplit,
	BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import './Movie.css';

interface MovieProps {
	id: number;
	tagline: string;
	budget: number;
	revenue: number;
	runtime: number;
	overview: number
}

const MOVIES_URL = import.meta.env.VITE_API;
const API_KEY = import.meta.env.VITE_API_KEY;

const Movie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState<MovieProps | null>(null);

	const getMovie = async(url: string) => {
		const res = await fetch(url);
		const data = await res.json();

		setMovie(data);
	};

	const formatCurrency = (number: number) => {
		return number.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

	useEffect(() => {
		const movieUrl = `${MOVIES_URL}${id}?${API_KEY}`
		
		getMovie(movieUrl);
	}, [])

	return (
		<div className="movie-page">
			{movie && (
				<>
					<MovieCard movie={movie} showLink={false} />
					<p className="tagline">{movie.tagline}</p>
					<div className="info">
						<h3>
							<BsWallet2 /> Orçamento: 
						</h3>
						<p>{formatCurrency(movie.budget)}</p>
					</div>
					<div className="info">
						<h3>
							<BsGraphUp /> Receita: 
						</h3>
						<p>{formatCurrency(movie.revenue)}</p>
					</div>
					<div className="info">
						<h3>
							<BsHourglassSplit /> Durãçao: 
						</h3>
						<p>{movie.runtime} minutos</p>
					</div>
					<div className="info description">
						<h3>
							<BsFillFileEarmarkTextFill /> Descrição: 
						</h3>
						<p>{movie.overview}</p>
					</div>
				</>
			)}
		</div>
	);
};

export { Movie };