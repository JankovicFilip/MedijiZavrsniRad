import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
import NavBarMediji from './components/navBarMediji';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from './constants';
import Pocetna from './pages/Pocetna';
import MedijiPregled from './pages/mediji/MedijiPregled';
import MedijiDodaj from './pages/mediji/MedijiDodaj';
import MedijiPromjena from './pages/mediji/MedijiPromjena';

function App() {

  return (
    <>
    <Container>
      <NavBarMediji/>
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna/>}/>

        <Route path={RouteNames.MEDIJ_PREGLED} element={<MedijiPregled/>}/>
        <Route path={RouteNames.MEDIJ_NOVI} element={<MedijiDodaj/>}/>
        <Route path={RouteNames.MEDIJ_PROMJENA} element={<MedijiPromjena/>}/>

      </Routes>

      <hr/>
      &copy; Mediji
    
    </Container>
    </>
  )
}

export default App
