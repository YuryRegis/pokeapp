import React from "react"
import styled from "styled-components"
import {gradienteLinear} from "../../../../Assets/Helper/functions"
import CardBoxContent from "../CardBoxContent"
import Titulo from "../Titulo"
import ActionButton from "../ActionButton"
import {BackgroundSquare, ImgPokemon, Content, TipoPokemon} from "../../helper"


const CardStyled = styled.div` 
  position: relative;
  overflow: hidden;
  width: 450px;
  padding: 3rem 0 2rem;
  border-radius: 0.5rem;
  color: white;
  ${gradienteLinear(String((props)=>props.tipoPokemon))};
  box-shadow: 
            0 24px 38px 3px rgba(0, 0, 0, 0.25),
            0 9px 46px 8px rgba(0, 0, 0, 0.25), 
            0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19vh;
  height: 19vh;
  flex: 0 0 auto;
  margin-bottom: 2rem;
  border-radius: 9vh;
  font-size: 90px;
  color: white;
  ${gradienteLinear(String((props)=>props.tipo))};
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;


function Card(props) {
    const defaultImg = props.imgs.defaultImg;
    const artworkImg = props.imgs.defaultImg;
    const offsetData = props.status.offset;
    const loading = props.status.loading;
    const data = props.status.data;

    const tipoPokemon = data ? data.types[0].type.name : "water";

    return (
      <CardStyled tipoPokemon={tipoPokemon}>
        <BackgroundSquare />
        <Content>
          <Icon tipo={tipoPokemon}>
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
      </CardStyled>
    );
}

export default Card;