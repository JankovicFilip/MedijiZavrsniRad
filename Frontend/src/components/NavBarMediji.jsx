import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBarMediji(){


    return(
        <>
             <Navbar expand="lg" className="bg-body-tertiary">
      
      <Navbar.Brand href="#home">Mediji APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="http://hannabi333-001-site1.atempurl.com/swagger/index.html"
          target='_blank'>Swagger</Nav.Link>
          
          <NavDropdown title="Programi" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Mediji</NavDropdown.Item>
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