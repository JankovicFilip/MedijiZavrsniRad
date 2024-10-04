import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../constants';


export default function NavBarMediji(){

    const navigate = useNavigate();



    return(
        <>
             <Navbar expand="lg" className="bg-body-tertiary">
      
      <Navbar.Brand className='ruka'
      onClick={()=>navigate(RouteNames.HOME)}
      >Mediji APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="http://hannabi333-001-site1.atempurl.com/swagger/index.html"
          target='_blank'>Swagger</Nav.Link>
          
          <NavDropdown title="Programi" id="basic-nav-dropdown">
            <NavDropdown.Item 
            onClick={()=>navigate(RouteNames.MEDIJ_PREGLED)}
            >Mediji</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Korisnici
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Komentari</NavDropdown.Item>
            
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>

        </>
    )
}