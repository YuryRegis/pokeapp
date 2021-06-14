import React, {useState,useEffect} from "react"
import {Card,   Content, Icon, TipoPokemon, ImgPokemon, BackgroundSquare} from "./helper"
import ActionButton from '../LinkHome'
import "../../Assets/CSS/icofont.css"
import Icognita from "../../Assets/Images/icognita.png";
import Titulo from "./Components/Titulo";
import CardBoxContent from "./Components/CardBoxContent";


const PokeCard = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(props.pokeData);

  useEffect(() => {
    setData(props.pokeData);
    if (!data) return
    setLoading(false);
  });

  const defaultImg = data ? data.sprites.front_default : Icognita;
  const artworkImg = data ? data.sprites.other["official-artwork"].front_default : undefined;
  const offsetData = data ? (Math.floor(data.id/20)*20) : 0;
 
  return (
    <div style={{"background":`linear-gradient(45deg,"#e698e9" 0%,"#fce597" 100%)`}}>
    <Card>
      <BackgroundSquare />
        <Content>
          <Icon >
            {loading ? (
              <ImgPokemon src={defaultImg} />
            ) : (
              <ImgPokemon src={artworkImg ?? defaultImg} />
            )}
          </Icon>

          {loading ? (
            <TipoPokemon>Carregando...</TipoPokemon>
          ) : (
            <TipoPokemon>{data.types[0].type.name}</TipoPokemon>
          )}

          {loading ? <Titulo /> : <Titulo nome={data.name} />}

          {loading ? <CardBoxContent /> : <CardBoxContent data={data} />}

          <ActionButton.linkPaginaAnterior to={`/${offsetData}`}>
            Voltar
          </ActionButton.linkPaginaAnterior>
          {/* <ActionButton onClick={props.onClick}>Voltar</ActionButton> */}
        </Content>
    </Card>
    </div>
  );
};

export default PokeCard;