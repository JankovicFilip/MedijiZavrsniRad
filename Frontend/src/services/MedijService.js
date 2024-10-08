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

export default {
    get,
    brisanje
}