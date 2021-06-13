import React, {useState, useEffect} from "react";
import {api, fecthURL} from "../../api";
import NavBar from "../../Components/Navbar";
import NavButtons from "../../Components/NavButtons";
import Tazo from "../../Components/Tazo";
import {useHistory, useLocation} from "react-router-dom";

const URL = 'https://pokeapi.co/api/v2/pokemon';

function Main(props) {
    const [pokeData, setData] = useState([]);
    const [prevURL, setPrevURL] = useState('');
    const [nextURL, setNextURL] = useState('');
    const [passos, setPassos] = useState(0);
    const [passoAtual, setPassoAtual] = useState(0);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const historico = useHistory();
    const location  = useLocation();

    useEffect( () => {
      async function fetchData() {
        const resposta = await api.get(URL);
        await loadingPokemon(resposta.data.results);
        setNextURL(resposta.data.next);
        setPrevURL(resposta.data.previous);
        setPassos(passoTotal => Math.ceil(resposta.data.count/20)-1);
        setLoadingStatus(false);
      }
      fetchData();
    },[])

    async function next() {
      setLoadingStatus(true);
      let newData = await api.get(nextURL);
      await loadingPokemon(newData.data.results);
      setNextURL(newData.data.next);
      setPrevURL(newData.data.previous);
      setPassoAtual(passo => passoAtual + 1)
      setLoadingStatus(false);
    }

    async function prev() {
      if (prevURL==='') return; 
      setLoadingStatus(true);
      let newData = await api.get(prevURL);
      await loadingPokemon(newData.data.results);
      setNextURL(newData.data.next);
      setPrevURL(newData.data.previous);
      setPassoAtual(passo => passoAtual - 1);
      setLoadingStatus(false);
    }

    async function loadingPokemon(data) {
      let _pokemonData = await Promise.all(
        data.map(
          async pokemon => {
            // console.log(pokemon.url);
            let registroPokemon = await fecthURL(pokemon.url);
            return registroPokemon;
      }));
      setData(_pokemonData);
      console.log("_pokeData", _pokemonData);
    }

    
    return (
      <div style={{background:"linear-gradient(190deg, #FFF8E7 0%, #d9e39a 100%)"}}>
        <NavBar />
        <div style={{display:"flex", justifyContent:"center"}}>
          <NavButtons funcoes={{proximo: next, voltar: prev}} stepper={{passos: passos, passoAtual: passoAtual}} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // // justifyContent: "center",
            // // alignItems: "center",
            // height: "100vh"
          }}
        >
          {loadingStatus ? (
            <h1>Carregando...</h1>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {pokeData.map((pokemon, index) => {
                  
                  function cardHook() {
                    location.state = {
                      nextURL: nextURL,
                      prevURL: prevURL,
                      pokemon: pokemon,
                      indice: index
                    }
                    console.log("prevLocation", location.state);
                    // return historico.push("/Card");
                    return historico.push(`/Card/${pokemon.data.id}`)
                  }
                  return <Tazo key={index} pokemon={pokemon.data} funcoes={{cardHook: cardHook}}/>;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    ); // Fim return
}

export default Main;
  