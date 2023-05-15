import { Dispatch, SetStateAction } from "react";


interface FilterProps {
	filter: string,
	setFilter: Dispatch<SetStateAction<string>>;
	setSort: Dispatch<SetStateAction<string>>;
}

const Filter = ({filter, setFilter, setSort}: FilterProps) => {
  return (
    <div className="filter">
		<h2>Filtrar:</h2>
		<div className="filter-options">
			<div>
				<p>Status:</p>
				<select value={filter} onChange={(event) => setFilter(event.target.value)}>
					<option value="All">Todas</option>
					<option value="Completed">Completas</option>
					<option value="Incomplete">Incompletas</option>
				</select>
			</div>
			<div>
				<p>Ordem alfabetica:</p>
				<button onClick={() => setSort("Asc")}>Asc</button>
				<button onClick={() => setSort("Desc")}>Desc</button>
			</div>
		</div>
	</div>
  );
}

export { Filter };