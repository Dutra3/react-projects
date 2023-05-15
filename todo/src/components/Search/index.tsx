import { Dispatch, SetStateAction } from "react";

interface SearchProps {
	search: string,
	setSearch: Dispatch<SetStateAction<string>>;
}

const Search = ({ search, setSearch }: SearchProps) => {
	return (
		<div className="search">
			<h2>Pesquisar</h2>
			<input
				type="text"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				placeholder="Digite para pesquisar"
			/>
		</div>
	);
}

export { Search };