import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Service from '../../services/KomentarService';
import MedijiService from "../../services/MedijService"
import KorisniciService from "../../services/KorisnikService";
import { RouteNames } from '../../constants';

export default function KomentariDodaj() {
  const navigate = useNavigate();
  const [mediji, setMediji] = useState([]);
  const [korisnici, setKorisnici] = useState([]);
  const [selectedMedij, setSelectedMedij] = useState(0);
  const [selectedKorisnik, setSelectedKorisnik] = useState(0);

  async function dohvatiMedije() {
    const odgovor = await MedijiService.get();
    setMediji(odgovor.poruka);
    setSelectedMedij(odgovor.poruka[0].sifra);
  }

  async function dohvatiKorisnike() {
    const odgovor = await KorisniciService.get();
    setKorisnici(odgovor.poruka);
    setSelectedKorisnik(odgovor.poruka[0].sifra);
  }

  useEffect(() => {
    dohvatiMedije();
    dohvatiKorisnike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function dodaj(e) {
    const odgovor = await Service.dodaj(e);
    if (odgovor.greska) {
      alert(odgovor.poruka);
      return;
    }
    navigate(RouteNames.KOMENTAR_PREGLED);
  }

  function obradiSubmit(e) {
    e.preventDefault();
    const podaci = new FormData(e.target);
    dodaj({
      opis: podaci.get('opis'),
      medijSifra: parseInt(selectedMedij),
      korisnikSifra: parseInt(selectedKorisnik)
    });
  }

  return (
    <>
      <h2>Dodavanje novog komentara</h2>
      <Form onSubmit={obradiSubmit}>
        <Form.Group controlId="opis">
          <Form.Label>Opis</Form.Label>
          <Form.Control type="text" name="opis" required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='medij'>
          <Form.Label>Medij</Form.Label>
          <Form.Select onChange={(e) => setSelectedMedij(e.target.value)}>
            {mediji && mediji.map((m, index) => (
              <option key={index} value={m.sifra}>
                {m.naziv}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3' controlId='korisnik'>
          <Form.Label>Korisnik</Form.Label>
          <Form.Select onChange={(e) => setSelectedKorisnik(e.target.value)}>
            {korisnici && korisnici.map((k, index) => (
              <option key={index} value={k.sifra}>
                {k.email}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <hr />
        <Row>
          <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.KOMENTAR_PREGLED} className="btn btn-danger siroko">
              Odustani
            </Link>
          </Col>
          <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="primary" type="submit" className="siroko">
              Dodaj novi komentar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
