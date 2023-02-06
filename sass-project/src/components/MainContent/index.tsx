import { AboutContainer } from '../AboutContainer';
import { ProjectsContainer } from '../ProjectsContainer';
import { TechnologiesContainer } from '../TechnologiesContainer';
import '../../styles/components/maincontent.sass';

const MainContet = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    );
};

export { MainContet };