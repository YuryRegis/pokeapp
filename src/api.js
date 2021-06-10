import axios from "axios"


export const api = axios.create({
    headers: { },
    timeout: 1000,
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

export async function fecthURL(url) {
    return await axios.get(url)
        .catch(erro => console.log(erro))
}