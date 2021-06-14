import React from "react";
import styled from "styled-components";
import { nomeCapitalizado } from "../../../../Assets/Helper/functions";
import BarraProgresso from "../BarraProgresso";


const NomePokemon = styled.div`
    font-size: 3rem;
`;


function Titulo(props) {
  return props.nome ? (
    <NomePokemon>{nomeCapitalizado(props.nome)}</NomePokemon>
  ) : (
    <BarraProgresso />
  );
}

export default Titulo;