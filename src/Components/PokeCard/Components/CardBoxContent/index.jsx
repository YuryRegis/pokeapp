import React from "react";
import styled from "styled-components";
import Atributo from "../Atributo";


const InfoContentBox = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    padding: 0rem 0 0.5rem;
    border-radius: 0.5rem;
    background: rgba(255,255,255,.25);
`;


function CardBoxComponent(props) {
    const data = props.data;

    return (
        <InfoContentBox>
            { !data ? (
                <>
                <Atributo titulo="Habilidades" icone="icofont-hand-thunder"/>
                <Atributo titulo="Ataque base" icone="icofont-hand-power"/>
                <Atributo titulo="Defesa base" icone="icofont-shield-alt"/>
                <Atributo titulo="Peso" icone="icofont-speed-meter"/>
                </>
            ) : (
                <>
                <Atributo titulo="Habilidades" icone="icofont-hand-thunder" descricaoArray={[...data.abilities.map(info=>info.ability.name)]}/>
                <Atributo titulo="Ataque base" icone="icofont-hand-power" descricaoArray={[data.stats[1].base_stat]}/>
                <Atributo titulo="Defesa base" icone="icofont-shield-alt" descricaoArray={[data.stats[2].base_stat]}/>
                <Atributo titulo="Peso" icone="icofont-speed-meter" descricaoArray={[data.weight]}/>
                </>
            )}  
        </InfoContentBox>
    )
}

export default CardBoxComponent;