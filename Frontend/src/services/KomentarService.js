import { HttpService } from "./httpService";

async function get(){
    return await HttpService.get('/Komentar')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka:'Problem kod dohvacanja komentara!'}
    })
}


async function getBySifra(sifra){
    return await HttpService.get('/Komentar/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Ne postoji komentar!'}
    })
}


async function brisanje(sifra){
    return await HttpService.delete('/Komentar/' + sifra)
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: 'Obrisano!'}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: "Problem kod brisanja komentara!"}
    })
}


async function dodaj(komentar){
    return await HttpService.post('/Komentar',komentar)
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
                return {greska: true, poruka: 'Komentar se ne može dodati!'}
        }
    })
}

async function promjena(sifra,komentar){
    return await HttpService.put('/Komentar/' + sifra,komentar)
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
                return {greska: true, poruka: 'Komentar se ne može promijeniti!'}
        }
    })
}


export default{
    get,
    getBySifra,
    brisanje,
    dodaj,
    promjena
}