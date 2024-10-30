import { HttpService } from "./httpService";


async function get(){
    return await HttpService.get('/komentar')
    .then((odgovor) => {
        console.log("Response data:", odgovor.data); // Log to confirm data structure
        return odgovor.data; // Return just the data array
    })
    .catch((e) => {
        console.error("Error in fetching komentari:", e);
        return [];
    });
}

async function getBySifra(sifra){
    return await HttpService.get('/komentar/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Ne postoji komentar!'}
    })
}


async function obrisi(sifra) {
    return await HttpService.delete('/komentar/' + sifra)
    .then((odgovor)=>{
        //console.log(odgovor);
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Komentar se ne može obrisati!'}
    })


}

async function dodaj(Komentar) {
    return await HttpService.post('/komentar',Komentar)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        switch (e.status) {
            case 400:
                let poruke='';
                for(const kljuc in e.response.data.errors){
                    poruke += kljuc + ': ' + e.response.data.errors[kljuc][0] + '\n';
                }
                return {greska: true, poruka: poruke}
            default:
                return {greska: true, poruka: 'Komentar se ne može dodati!'}
        }
    })
}

async function promjena(sifra,Komentar) {
    return await HttpService.put('/Komentar/' + sifra,Komentar)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        switch (e.status) {
            case 400:
                let poruke='';
                for(const kljuc in e.response.data.errors){
                    poruke += kljuc + ': ' + e.response.data.errors[kljuc][0] + '\n';
                }
                console.log(poruke)
                return {greska: true, poruka: poruke}
            default:
                return {greska: true, poruka: 'Komentar se ne može promjeniti!'}
        }
    })
}
export default{
    get,
    getBySifra,
    obrisi,
    dodaj,
    promjena
}
