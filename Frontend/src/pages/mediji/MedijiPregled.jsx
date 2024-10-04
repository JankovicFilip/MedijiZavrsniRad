import { useEffect } from "react"
import MedijiService from "../../services/MedijService"


export default function MedijiPregled() {

    async function dohvatiMedije(){
        await MedijiService.get
    }

    useEffect(()=>{
        dohvatiMedije();
    },[])


    return (
        <>
        ovdje ce doci pregled medija
        </>
    )
}