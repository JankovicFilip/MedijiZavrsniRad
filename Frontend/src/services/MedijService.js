import { HttpService } from "./httpService";



async function get(){
    return await HttpService.get('/Medij')
    .then((odgovor)=>{
        console.log(odgovor.data)
        return{greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        console.log(e)
        return {greska: true, poruka: "problem kod dohvacanja medija"}
    })
}

export default {
    get
}