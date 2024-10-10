import { HttpService } from "./httpService";



async function get(){
    return await HttpService.get('/Medij')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: "Problem kod dohvacanja medija!"}
    })
}

async function brisanje(sifra){
    return await HttpService.delete('/Medij/' + sifra)
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: 'Obrisano!'}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: "Problem kod brisanja medija!"}
    })
}

async function dodaj(medij){
    return await HttpService.post('/Medij/' + sifra,medij)
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: 'Dodano!'}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: "Problem kod dodavanja medija!"}
    })
}

async function promjena(sifra,medij){
    return await HttpService.put('/Medij/' + sifra,medij)
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return{greska: false, poruka: 'Dodano!'}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: "Problem kod dodavanja medija!"}
    })
}

async function getBySifra(sifra){
    return await HttpService.get('/Medij/'+sifra)
    .then((odgovor)=>{
        return{greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: "Problem kod dohvacanja medija s sifrom!"+sifra}
    })
}

export default {
    get,
    brisanje,
    dodaj,
    getBySifra,
    promjena
}