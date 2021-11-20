import './App.css';
// import axios from "../http-common";
import Homepage from './pages/Homepage/Homepage';
import MainNav from './components/Navbar/Navbar';
import Browse from './pages/Browse/Browse';
import Category from './pages/Category/Category';
import routes from './routes/routes';
import { useRoutes } from 'react-router';
function App() {
  const content = useRoutes(routes);

  return (
    <div className="App ">
      {content}
    </div>
  );
}

export default App;
