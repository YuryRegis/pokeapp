import React from "react";
import styled from "styled-components";
import dataCor from "../../../../Assets/Helper/cores.json";

const TipoPokemon = styled.div`
  display:flex;
  margin-right: 3px;
  margin-left: 3px;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  width: 70px;
  height: 30px;
  border-radius: 3vh;
  color: "white";
  background: ${(props) => props.cor};
`;

function TagTipoPokemon(props) {
//   console.log("TAGTIPO",props.tipo);  
  const corTag = dataCor.pokemon.tipo[props.tipo].corTag;  
  
  return (
    <TipoPokemon cor={corTag}>
        {props.tipo}
    </TipoPokemon>
    );
}

export default TagTipoPokemon;
