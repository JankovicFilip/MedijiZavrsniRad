import { useEffect, useState } from "react"
import MedijiService from "../../services/MedijService"
import { Button, Table } from "react-bootstrap";


export default function MedijiPregled() {

    const[mediji, setMediji] = useState();

    async function dohvatiMedije(){
        const odgovor = await MedijiService.get();

        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        setMediji(odgovor.poruka)

    }

    useEffect(()=>{
        dohvatiMedije();
    },[])

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati?')){
            return
        }
        brisanjeMedija(sifra);
    }

    async function brisanjeMedija(sifra){
        
        const odgovor = await MedijiService.brisanje(sifra);

        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        dohvatiMedije();
    }


    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Opis</th>
                        <th>Vrsta</th>
                        <th>Genre</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {mediji && mediji.map((medij,index)=>(
                        <tr key={index}>
                            <td>
                                {medij.naziv}
                            </td>
                            <td>
                                {medij.opis}
                            </td>
                            <td>
                                {medij.vrsta}
                            </td>
                            <td>
                                {medij.genre}
                            </td>
                            <td>
                                <Button
                                variant="danger"
                                onClick={()=>obrisi(medij.sifra)}
                                >
                                    Obriši
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}