
import { Link, useNavigate } from "react-router-dom";
import MedijiService from "../../services/MedijService"
import { Button, Col, Row } from "react-bootstrap";
import { RouteNames } from "../../constants";


export default function MedijiDodaj() {

    const navigate = useNavigate();


    return (
        <>
            Dodavanje Smjera
            <Row>
                <Col xs={12} sm={12} md={3} lg={6} xl={3} xxl={6}>
                    <Link to={RouteNames.MEDIJ_PREGLED}
                    className="btn btn-danger siroko">Odustani</Link>
                </Col>
                <Col xs={12} sm={12} md={9} lg={6} xl={9} xxl={6}>
                    <Button variant="success"
                    className="siroko">Dodaj medij</Button>
                </Col>
            </Row>
        </>
    )
}