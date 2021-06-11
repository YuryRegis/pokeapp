import React, {useState, useEffect} from "react";
import {api, fecthURL} from "../../api";
import NavBar from "../../Components/Navbar";
import NavButtons from "../../Components/NavButtons";
import Tazo from "../../Components/Tazo";

const URL = 'https://pokeapi.co/api/v2/pokemon';

function Main() {
    const [pokeData, setData] = useState([]);
    const [prevURL, setPrevURL] = useState('');
    const [nextURL, setNextURL] = useState('');
    const [loadingStatus, setLoadingStatus] = useState(true);


    useEffect( () => {
      async function fetchData() {
        const resposta = await api.get(URL);
        await loadingPokemon(resposta.data.results);
        setNextURL(resposta.data.next);
        setPrevURL(resposta.data.previous);
        setLoadingStatus(false);
      }
      fetchData();
    },[])

    async function next() {
      setLoadingStatus(true);
      let newData = await api.get(nextURL);
      await loadingPokemon(newData.data.results);
      console.log("NEXT URL ->",nextURL);
      setNextURL(newData.data.next);
      setPrevURL(newData.data.previous);
      setLoadingStatus(false);
    }

    async function prev() {
      if (prevURL==='') return; 
      setLoadingStatus(true);
      let newData = await api.get(prevURL);
      await loadingPokemon(newData.data.results);
      setNextURL(newData.data.next);
      setPrevURL(newData.data.previous);
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
      <>
        <NavBar />
        <div style={{display:"flex", justifyContent:"center"}}>
          <button style={{margin:"1vh", background:"orange", color:"white"}} onClick={prev}>Voltar</button>
          <button style={{margin:"1vh", background:"orange", color:"white"}} onClick={next}>Próximo</button>
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
                  return <Tazo key={index} pokemon={pokemon.data} />;
                })}
              </div>
            </>
          )}
        </div>
      </>
    ); // Fim return
}

export default Main;
  