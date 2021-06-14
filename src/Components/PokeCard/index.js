import "../../Assets/CSS/icofont.css";
import LinkHomeButton from "../LinkHomeButton";
import Titulo from "./Components/Titulo";
import React, { useState, useEffect } from "react";
import Icognita from "../../Assets/Images/icognita.png";
import CardBoxContent from "./Components/CardBoxContent";
import TagTipoPokemon from "./Components/TagTipoPokemon";
import { Card, Content, Icon, ImgPokemon, BackgroundSquare } from "./helper";


const PokeCard = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(props.pokeData);

  useEffect(() => {
    setData(props.pokeData);
    if (!data) return;
    setLoading(false);
  });

  const defaultImg = data ? data.sprites.front_default : Icognita;
  const artworkImg = data
    ? data.sprites.other["official-artwork"].front_default
    : undefined;
  const offsetData = data ? Math.floor(data.id / 20) * 20 : 0;
  const arrayTipos = data ? data.types : [];
  return (
    <div
      style={{
        background: `linear-gradient(45deg,"#e698e9" 0%,"#fce597" 100%)`,
      }}
    >
      <Card>
        <BackgroundSquare />
        <Content>
          <Icon>
            {loading ? (
              <ImgPokemon src={Icognita} />
            ) : (
              <ImgPokemon src={artworkImg ?? defaultImg} />
            )}
          </Icon>

          {loading ? (
            <p>Carregando...</p>
          ) : (
            <div style={{display:"flex", flexDirection:"row"}}>
              {arrayTipos.map((elemento, index) => {
                return <TagTipoPokemon key={index} tipo={elemento.type.name}/>
              })}
            </div >
          )}

          {loading ? <Titulo /> : <Titulo nome={data.name} />}

          {loading ? <CardBoxContent /> : <CardBoxContent data={data} />}

          <LinkHomeButton text={"Voltar"} to={`/${offsetData}`}/>
            
          {/* <ActionButton onClick={props.onClick}>Voltar</ActionButton> */}
        </Content>
      </Card>
    </div>
  );
};

export default PokeCard;
