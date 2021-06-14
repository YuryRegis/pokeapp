import { configure } from "@testing-library/dom";
import React from "react";
import styled from "styled-components";
import "../../../../Assets/CSS/icofont.css";
import { nomeCapitalizado } from "../../../../Assets/Helper/functions";


const AtributosListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  /* margin-bottom: 0.325rem; */
`;

const AtributoItemTitulo = styled.div`
    display: flex;
    font-size: 1.5rem;
`;

const DescricaoAtributo = styled.div`
    display: flex;
    font-size: 1.1rem;
`;

const Info = styled.text`
    padding-right: 9px;
`;

function Atributo(props) {

    return (
      <AtributosListItem>
        <AtributoItemTitulo>
          <i className={props.icone} style={{"padding-right": "9px"}}/>
          {props.titulo}
        </AtributoItemTitulo>
        <DescricaoAtributo>
          {props.descricaoArray ? (
            <>
              {props.descricaoArray.map((info, index) => (
                <Info key={index}> {nomeCapitalizado(String(info))} </Info>
              ))}
            </>
          ) : (
            <Info>Buscando...</Info>
          )}
        </DescricaoAtributo>
      </AtributosListItem>
    );
}

export default Atributo;