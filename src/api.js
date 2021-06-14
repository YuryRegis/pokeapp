import axios from "axios"


export const api = axios.create({
    headers: { },
    timeout: 1000,
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

export async function fecthURL(url) {
    const resposta = await axios.get(url)
        .catch(erro => console.log(erro));
    // console.log("Axios LOG ->", resposta);
    return resposta
        
}