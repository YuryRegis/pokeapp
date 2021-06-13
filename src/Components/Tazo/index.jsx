import React from "react"
import styled from "styled-components"


function bacgroudGradiente(tipo) {
  // console.log("tipo ->",tipo);
  switch (String(tipo)) {
    case "grass":
      return gradiente(45, "#56e613", "#e099a1");
    case "fire":
      return gradiente(130, "#ffd747", "#eb0510");
    case "water":
      return gradiente(45, "#00dbde", "#fc00ff");
    case "bug":
      return gradiente(170, "#6bcc8a", "#fce597");
    case "":
      return gradiente(130, "#6bcc8a", "#fce597");
    default:
      return gradiente();
  }
}

function gradiente(angulo, cor1, cor2) {
    return `linear-gradient(${angulo || 130}deg, ${cor1 || '#e698e9'} 0%, ${cor2 || '#fce597'} 100%)`;
}


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
  border-radius: 200px;
  font-size: 90px;
  color: white;
  background: ${(props) => bacgroudGradiente(props.tipo)};
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
                <ImgPokemon src={imgArtwork ? imgArtwork : imgDefault}/>
            </Icon>
    );
}

export default Tazo;