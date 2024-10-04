import { HttpService } from "./httpService";



async function get(){
    return await HttpService.get('/Medij')
    .then((odgovor)=>{
        console.log(odgovor.data)
    })
    .catch((e)=>console.log(e))
}

export default {
    get
}