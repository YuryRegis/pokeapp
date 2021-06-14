import React from "react"
import styled from "styled-components"
import {gradienteLinear} from "../../Assets/Helper/functions"    


const ImgPokemon = styled.img`
    height: 15vh;
    width: 15vh;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 20vh;
  height: 20vh;
  flex: 0 0 auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
  border-radius: 10vh;
  font-size: 90px;
  color: white;
  background: ${(props) => gradienteLinear(props.tipo)};
  /* border: 30px;
  border-color: red; */
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.8);
`;

const Tazo = (props) => {
    const imgArtwork = props.pokemon.sprites.other["official-artwork"].front_default;
    const imgDefault = props.pokemon.sprites.front_default;
    const arrayTypes = props.pokemon.types;
    const paginaHook = props.funcoes.cardHook;

    return (
            <Icon tipo={arrayTypes[0].type.name} onClick={paginaHook}>
                <ImgPokemon src={imgArtwork ?? imgDefault}/>
            </Icon>
    );
}

export default Tazo;