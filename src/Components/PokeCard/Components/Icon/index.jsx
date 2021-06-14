import React from "react";
import styled from "styled-components";
import { gradienteLinear } from "../../../../Assets/Helper/functions";

const Icone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19vh;
  height: 19vh;
  flex: 0 0 auto;
  margin-bottom: 2rem;
  border-radius: 9vh;
  color: white;
  background: ${gradienteLinear((props) => props.tipo)};
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

const ImgPokemon = styled.img`
  height: 12vh;
  width: 12vh;
`;

function Icon(props) {
 console.log("ICON PROPS",props);
  const loading = props.status;
  const tipoPokemon = props.tipo;
  const defaultImg = props.defaultImg;
  const artworkImg = props.artworkImg;

  return (
    <Icone tipo={tipoPokemon}>
      {loading ? (
        <ImgPokemon src={defaultImg} />
      ) : (
        <ImgPokemon src={artworkImg ?? defaultImg} />
      )}
    </Icone>
  );
}

export default Icon;
