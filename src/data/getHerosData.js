import axios from "axios";

const herosUrl = 'http://homologacao3.azapfy.com.br/api/ps/metahumans'

const api = axios.get(herosUrl)

export const getData = async ()=>{
    const res = await api;
    return res.data;
}


