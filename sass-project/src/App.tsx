
import { MainContet } from './components/MainContent';
import { Sidebar } from './components/Sidebar';
import './styles/components/app.sass';

const App = () => {
 
  return (
    <div id="portfolio">
      <h1>Gabriel Dutra</h1>
      <Sidebar />
      <MainContet />
    </div>
  );
};

export default App
