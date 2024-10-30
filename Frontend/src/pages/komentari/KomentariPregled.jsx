import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import Service from "../../services/KomentarService";

export default function KomentariPregled() {
    const [komentari, setKomentari] = useState([]); // Initialize as an empty array
    let navigate = useNavigate();

    async function dohvatiKomentare() {
        await Service.get()
            .then((odgovor) => {
                console.log("API Response:", odgovor); // Log the response
                if (Array.isArray(odgovor)) {
                    setKomentari(odgovor);
                } else {
                    console.error("Expected an array but received:", odgovor);
                    setKomentari([]); // Handle accordingly
                }
            })
            .catch((e) => {
                console.error("Error fetching comments:", e);
                setKomentari([]); // Handle errors gracefully
            });
    }

    async function obrisiKomentar(sifra) {
        const odgovor = await Service.obrisi(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        dohvatiKomentare();
        
    }

    useEffect(() => {
        dohvatiKomentare();
    }, []);

    return (
        <Container>
            <Link to={RouteNames.KOMENTAR_NOVI} className="btn btn-success siroko">
                <IoIosAdd size={25} /> Dodaj
            </Link>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Opis</th>
                        <th>Medij</th>
                        <th>Korisnik</th>
                        <th>Actions</th> {/* Add actions column */}
                    </tr>
                </thead>
                <tbody>
                    {komentari.length > 0 ? (
                        komentari.map((komentar, index) => (
                            <tr key={index}>
                                <td>{komentar.opis}</td>
                                <td>{komentar.medijNaziv}</td>
                                <td>{komentar.korisnikEmail}</td>
                                <td className="sredina">
                                    <Button
                                        variant='primary'
                                        onClick={() => { navigate(`/komentari/${komentar.sifra}`) }}
                                    >
                                        <FaEdit size={25} />
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant='danger'
                                        onClick={() => obrisiKomentar(komentar.sifra)}
                                    >
                                        <FaTrash size={25} />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No comments available.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}
