import React from "react";
import styled from "styled-components";


const Botao = styled.button`
    flex: 0 0 auto;
    height: 40px;
    padding: 0 2rem;
    border: 0;
    border-radius: 20px;
    color: rgba(0,0,0,0.85);
    background: rgba(255,255,255,0.85);
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
    transition: background 0.25s;

    &:hover { background: rgba(255,255,255,1)}
`; 


function ActionButton(props) {
    return <Botao>{props.label}</Botao>   
}

export default ActionButton;