import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Commom/Navbar';
import { Container } from './components/Commom/Container';
import { Home } from './components/pages/Home';
import { Projects } from './components/pages/Projects';
import { Company } from './components/pages/Company';
import { Contact } from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';
import { Project } from './components/pages/Project';
import { Footer } from './components/Commom/Footer';

const App = () => {

	return (
		<Router>
			<Navbar />
			<Container customClass="min-height">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/company' element={<Company />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/newproject' element={<NewProject />} />
					<Route path='/project/:id' element={<Project />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
};

export { App };
