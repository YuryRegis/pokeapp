import React from "react"
import styled, {css} from "styled-components"


const bacgroudGradiente = (tipo) => {
    console.log("tipo ->",tipo);
    switch (String(tipo)) {
        case 'grass':
            return gradiente(45, "#56e613", "#e099a1")
        case 'fire':
            return gradiente(130, "#ffd747", "#eb0510")
        case 'water':
            return gradiente(45, "#00dbde", "#fc00ff")
        case 'bug':
            return gradiente(170, "#6bcc8a", "#fce597")
        case '':
            return gradiente(130, "#6bcc8a", "#fce597")
        default:
            return gradiente()
    }
}


const gradiente = (angulo, cor1, cor2) =>
    `linear-gradient(${angulo || 130}deg, ${cor1 || '#e698e9'} 0%, ${cor2 || '#fce597'} 100%)`;


const ImgPokemon = styled.img`
    height: 215px;
    width: 215px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
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
    return (
            <Icon tipo={props.pokemon.types[0].type.name}>
                {/* <ImgPokemon src={props.pokemon.sprites.front_default}/> */}
                <ImgPokemon src={props.pokemon.sprites.other["official-artwork"].front_default}/>
            </Icon>
    );
}

export default Tazo;