const App: React.FC = () => {

	const handleClick = () => {
		console.log('Button was clicked!');
	};

	return (
	<div className="App">
		<header className="App-header">
			<p>Ja atualizei o meu elemento</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
				Iniciando novo porjeto
			</a>
		</header>
		<button onClick={handleClick}>Click button</button>
    </div>
	);
}

export { App };
