import './App.css';
import Nav from './components/Encabezado.jsx';
import Foot from './components/PieDePagina.jsx';
import homePage from './pages/HomePage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';

function App() {
  return (
    <>
      {/* <Nav/> */}
      <MoviesPage/>
      {/* <Foot/> */}
    </>
  );
}

export default App;