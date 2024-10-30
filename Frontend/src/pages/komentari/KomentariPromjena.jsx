import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Service from '../../services/KomentarService';
import MedijiService from '../../services/MedijService';
import KorisniciService from '../../services/KorisnikService';
import { RouteNames } from '../../constants';

export default function KomentariPromjena() {
  const navigate = useNavigate();
  const routeParams = useParams();
  const [mediji, setMediji] = useState([]);
  const [korisnici, setKorisnici] = useState([]);
  const [selectedMedij, setSelectedMedij] = useState(0);
  const [selectedKorisnik, setSelectedKorisnik] = useState(0);
  const [komentar, setKomentar] = useState({});

  async function dohvatiMedije() {
    const odgovor = await MedijiService.get();
    setMediji(odgovor.poruka);
  }

  async function dohvatiKorisnike() {
    const odgovor = await KorisniciService.get();
    setKorisnici(odgovor.poruka);
  }

  async function dohvatiKomentar() {
    const odgovor = await Service.getBySifra(routeParams.sifra);
    if (odgovor.greska) {
      alert(odgovor.poruka);
      return;
    }
    const komentar = odgovor.poruka;
    setKomentar(komentar);
    setSelectedMedij(komentar.medijSifra);
    setSelectedKorisnik(komentar.korisnikSifra);
  }

  async function dohvatiInicijalnePodatke() {
    await dohvatiMedije();
    await dohvatiKorisnike();
    await dohvatiKomentar();
  }

  useEffect(() => {
    dohvatiInicijalnePodatke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function promjena(e) {
    const odgovor = await Service.promjena(routeParams.sifra, e);
    if (odgovor.greska) {
      alert(odgovor.poruka);
      return;
    }
    navigate(RouteNames.KOMENTAR_PREGLED);
  }

  function obradiSubmit(e) {
    e.preventDefault();
    const podaci = new FormData(e.target);
    promjena({
      opis: podaci.get('opis'),
      medijSifra: parseInt(selectedMedij),
      korisnikSifra: parseInt(selectedKorisnik),
    });
  }

  return (
    <>
      <h2>Mjenjanje podataka komentara</h2>
      <Form onSubmit={obradiSubmit}>
        <Form.Group controlId="opis">
          <Form.Label>Opis</Form.Label>
          <Form.Control type="text" name="opis" required defaultValue={komentar.opis} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='medij'>
          <Form.Label>Medij</Form.Label>
          <Form.Select
            value={selectedMedij}
            onChange={(e) => setSelectedMedij(e.target.value)}
          >
            {mediji && mediji.map((m, index) => (
              <option key={index} value={m.sifra}>
                {m.naziv}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3' controlId='korisnik'>
          <Form.Label>Korisnik</Form.Label>
          <Form.Select
            value={selectedKorisnik}
            onChange={(e) => setSelectedKorisnik(e.target.value)}
          >
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
              Promjeni komentar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
