import { HttpService } from "./httpService";



async function get(){
    return await HttpService.get('/Korisnik')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka:'Problem kod dohvacanja korisnika!'}
    })
}

async function brisanje(sifra){
    return await HttpService.delete('/Korisnik/' + sifra)
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: 'Obrisano!'}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: "Problem kod brisanja korisnika!"}
    })
}


async function dodaj(korisnik){
    return await HttpService.post('/Korisnik',korisnik)
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: odgovor.data}
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
                return {greska: true, poruka: 'Korisnik se ne može dodati!'}
        }
    })
}


async function promjena(sifra,korisnik){
    return await HttpService.put('/Korisnik/' + sifra,korisnik)
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: 'Dodano!'}
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
                return {greska: true, poruka: 'Korisnik se ne može promijeniti!'}
        }
    })
}


async function getBySifra(sifra){
    return await HttpService.get('/Korisnik/'+sifra)
    .then((odgovor)=>{
        return{greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Problem kod dohvacanja korisnika s sifrom '+sifra}
    })
}

export default {
    get,
    brisanje,
    dodaj,
    getBySifra,
    promjena
}