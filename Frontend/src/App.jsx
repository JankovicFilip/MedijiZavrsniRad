import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
import NavBarMediji from './components/NavBarMediji';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from './constants';
import Pocetna from './pages/Pocetna';
import MedijiPregled from './pages/mediji/MedijiPregled';
import MedijiDodaj from './pages/mediji/MedijiDodaj';
import MedijiPromjena from './pages/mediji/MedijiPromjena';
import KorisniciPregled from './pages/korisnici/KorisniciPregled';
import KorisniciDodaj from './pages/korisnici/KorisniciDodaj';
import KorisniciPromjena from './pages/korisnici/KorisniciPromjena';
import KomentariPregled from './pages/komentari/KomentariPregled';
import KomentariDodaj from './pages/komentari/KomentariDodaj';
import KomentariPromjena from './pages/komentari/KomentariPromjena';

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
        <Route path={RouteNames.KORISNIK_PREGLED} element={<KorisniciPregled/>}/>
        <Route path={RouteNames.KORISNIK_NOVI} element={<KorisniciDodaj/>}/>
        <Route path={RouteNames.KORISNIK_PROMJENA} element={<KorisniciPromjena/>}/>
        <Route path={RouteNames.KOMENTAR_PREGLED} element={<KomentariPregled/>}/>
        <Route path={RouteNames.KOMENTAR_NOVI} element={<KomentariDodaj/>}/>
        <Route path={RouteNames.KOMENTAR_PROMJENA} element={<KomentariPromjena/>}/>


        




      </Routes>

      <hr/>
      &copy; Mediji
    
    </Container>
    </>
  )
}

export default App
