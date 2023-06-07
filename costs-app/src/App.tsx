import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from './components/layout';
import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Contact } from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';
import './App.css'

const App = () => {

	return (
		<Router>
			<ul>
				<Link to='/'>Home</Link>
				<Link to='/company'>Empresa</Link>
				<Link to='/contact'>Contato</Link>
				<Link to='/newproject'>Novo Projeto</Link>
			</ul>
			<Routes>
					<Route path='/' element={<Container customClass="min-height"> <Home /> </Container>} />
					<Route path='/company' element={<Container customClass="min-height"> <Company /> </Container>} />
					<Route path='/contact' element={<Container customClass="min-height">  <Contact /> </Container>} />
					<Route path='/newproject' element={<Container customClass="min-height"> <NewProject /> </Container>} />
			</Routes>
			<p>Footer</p>
		</Router>
	);
};

export { App };
