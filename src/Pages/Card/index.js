import React, { useState, useEffect } from "react"; 
import PokeCard from "../../Components/PokeCard";
import NavBar from "../../Components/Navbar";
import { fecthURL } from "../../api";
import LoadingPikachu from "../../Components/LoadingPikachu";



const Card = (props) => {
  const pokeID = props.match.params.id;


  const [id, setID] = useState(pokeID);
  useEffect( () => {
    setID(props.match.params.id);
  })


  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState();
  useEffect(() => {
    function getURL(params) {
      const novaURL = `https://pokeapi.co/api/v2/pokemon/${params}`;
      return novaURL;
    }
    async function fetchData() {
      if (!loading) return
      const getPokemon = async (_pokemon) => {
        const novoEndpoint = getURL(id);
        fecthURL(novoEndpoint).then((_resposta) => {
          // console.log("_resposta",_resposta);
          if(!_resposta) return
          setPokeData(_resposta.data);
        });
      };
      getPokemon();
    }
    fetchData()
      .then(setLoading(false))
  });


  return (
    <div
      style={{
        background: "linear-gradient(190deg, #FFF8E7 0%, #d9e39a 100%)",
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "4vh"
        }}
      >
        {loading ? <LoadingPikachu/> : <PokeCard pokeData={pokeData} />}
      </div>
    </div>
  );
}

export default Card;
