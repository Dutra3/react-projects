import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Container } from './components/layout/Container';
import { Home } from './components/pages/Home';
import { Projects } from './components/pages/Projects';
import { Company } from './components/pages/Company';
import { Contact } from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';
import { Footer } from './components/Footer';
import './App.css'

const App = () => {

	return (
		<Router>
			<Navbar />
			<Routes>
					<Route path='/' 
						element={<Container customClass="min-height"> <Home /> </Container>} 
					/>
					<Route path='/projects' 
						element={<Container customClass="min-height"> <Projects /> </Container>} 
					/>
					<Route path='/company' 
						element={<Container customClass="min-height"> <Company /> </Container>} 
					/>
					<Route path='/contact' 
						element={<Container customClass="min-height">  <Contact /> </Container>} 
					/>
					<Route path='/newproject' 
						element={<Container customClass="min-height"> <NewProject /> </Container>} 
					/>
			</Routes>
			<Footer />
		</Router>
	);
};

export { App };
