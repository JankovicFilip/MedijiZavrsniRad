import { useEffect, useState } from "react"
import KorisniciService from "../../services/KorisnikService";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";





export default function KorisniciPregled(){

    const navigate = useNavigate();

    const[korisnici, setKorisnici] = useState();

    async function dohvatiKorisnike(){
        const odgovor = await KorisniciService.get();

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


    function obrisi(sifra){
        if(!confirm('Sigurno obrisati?')){
            return
        }
        brisanjeKorisnika(sifra);
    }
    async function brisanjeKorisnika(sifra){
        
        const odgovor = await KorisniciService.brisanje(sifra);

        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }

        dohvatiKorisnike();
    }

    return (
        <>
            <Link to={RouteNames.KORISNIK_NOVI}
            className="btn btn-success siroko">Dodaj novog korisnika</Link>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {korisnici && korisnici.map((korisnik,index)=>(
                        <tr key={index}>
                            <td>
                                {korisnik.ime}
                            </td>
                            <td>
                                {korisnik.prezime}
                            </td>
                            <td>
                                {korisnik.email}
                            </td>
                            <td>
                                {korisnik.password}
                            </td>
                            <td>
                                <Button
                                variant="danger"
                                onClick={()=>obrisi(korisnik.sifra)}
                                >
                                    Obriši
                                </Button>
                                
                                <Button
                                onClick={()=>navigate(`/korisnici/${korisnik.sifra}`)}
                                >
                                    Promjeni
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )





}