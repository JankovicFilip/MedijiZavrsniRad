
import { Link, useNavigate } from "react-router-dom";
import MedijiService from "../../services/MedijService"
import { Button, Col, Form, Row } from "react-bootstrap";
import { RouteNames } from "../../constants";


export default function MedijiPromjena() {

    const navigate = useNavigate();
    function obradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server
    }


    return (
        <>
            Promjena Smjera
            <Form onSubmit={obradiSubmit}>
            
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required />
                </Form.Group>
                <Form.Group controlId="opis">
                    <Form.Label>Opis</Form.Label>
                    <Form.Control type="text" name="opis" />
                </Form.Group>
                <Form.Group controlId="vrsta">
                    <Form.Label>Vrsta</Form.Label>
                    <Form.Control type="text" name="vrsta" />
                </Form.Group>
                <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" name="genre" />
                </Form.Group>
            <Row className="akcije">
                <Col xs={12} sm={12} md={3} lg={6} xl={3} xxl={6}>
                    <Link to={RouteNames.MEDIJ_PREGLED}
                    className="btn btn-danger siroko">Odustani</Link>
                </Col>
                <Col xs={12} sm={12} md={9} lg={6} xl={9} xxl={6}>
                    <Button variant="success"
                    type="submit"
                    className="siroko">Dodaj medij</Button>
                </Col>
            </Row>
            </Form>
        </>
    )
}