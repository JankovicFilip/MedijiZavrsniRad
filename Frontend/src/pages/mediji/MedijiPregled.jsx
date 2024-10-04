import { useEffect, useState } from "react"
import MedijiService from "../../services/MedijService"
import { Table } from "react-bootstrap";


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
                            <td>akcija</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}