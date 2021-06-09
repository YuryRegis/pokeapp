import axios from "axios"


const api = axios.create({
    headers: { },
    timeout: 1000,
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})


export default api;