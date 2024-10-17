import { Link, useNavigate, useParams } from "react-router-dom";
import KorisniciService from "../../services/KorisnikService"
import { Button, Col, Form, Row } from "react-bootstrap";
import { RouteNames } from "../../constants";
import { useEffect, useState } from "react";



export default function KorisniciPromjena(){

    
    const [korisnik,setKorisnici] = useState({})
    const navigate = useNavigate();

    const routeParams = useParams();


    async function dohvatiKorisnike(){
        const odgovor = await KorisniciService.getBySifra(routeParams.sifra);

        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        // debugger;
        setKorisnici(odgovor.poruka)

    }
    useEffect(()=>{
        dohvatiKorisnike();
    },[])

    async function promjena(korisnik){
        //console.log(medij)
        //console.log(JSON.stringify(medij))
        const odgovor = await KorisniciService.promjena(routeParams.sifra,korisnik)
        if(odgovor.greska){
            alert(odgovor.poruka)
            return;
        }
        navigate(RouteNames.KORISNIK_PREGLED)
    }

    function obradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server
        let podaci = new FormData(e.target)
        promjena({
            ime: podaci.get('ime'),
            prezime: podaci.get('prezime'),
            email: podaci.get('email'),
            password: podaci.get('password')
        })

    }



    return (
        <>
            Promjena korisnika
            <Form onSubmit={obradiSubmit}>
            
                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control type="text" name="ime" required 
                    defaultValue={korisnik.ime}/>
                </Form.Group>
                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control type="text" name="prezime" required 
                    defaultValue={korisnik.prezime} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" required 
                    defaultValue={korisnik.email} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" name="password" required 
                    defaultValue={korisnik.password} />
                </Form.Group>
            <Row className="akcije">
                <Col xs={12} sm={12} md={3} lg={6} xl={3} xxl={6}>
                    <Link to={RouteNames.KORISNIK_PREGLED}
                    className="btn btn-danger siroko">Odustani</Link>
                </Col>
                <Col xs={12} sm={12} md={9} lg={6} xl={9} xxl={6}>
                    <Button variant="success"
                    type="submit"
                    className="siroko">Promjeni korisnika</Button>
                </Col>
            </Row>
            </Form>
        </>
    )


}