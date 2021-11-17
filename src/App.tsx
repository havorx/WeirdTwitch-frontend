import './App.css';
// import axios from "../http-common";
import Homepage from './pages/Homepage/Homepage';
import MainNav from './components/Navbar/Navbar';
import Browse from './pages/Browse/Browse';
import Category from './pages/Category/Category';
function App() {
  return (
    <div className="App ">
      <MainNav />
      <Homepage />
      <Browse />
      <Category />
    </div>
  );
}

export default App;
