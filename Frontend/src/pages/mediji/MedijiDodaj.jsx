
import { Link, useNavigate } from "react-router-dom";
import MedijiService from "../../services/MedijService"
import { Button, Col, Form, Row } from "react-bootstrap";
import { RouteNames } from "../../constants";


export default function MedijiDodaj() {

    const navigate = useNavigate();

    async function dodaj(medij){
        //console.log(medij)
        //console.log(JSON.stringify(medij))
        const odgovor = await MedijiService.dodaj(medij)
        if(odgovor.greska){
            alert(odgovor.poruka)
            return;
        }
        navigate(RouteNames.MEDIJ_PREGLED)
    }


    function obradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server
        let podaci = new FormData(e.target)
        dodaj({
            naziv: podaci.get('naziv'),
            opis: podaci.get('opis'),
            vrsta: podaci.get('vrsta'),
            genre: podaci.get('genre')
        })

    }


    return (
        <>
            Dodavanje medija
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