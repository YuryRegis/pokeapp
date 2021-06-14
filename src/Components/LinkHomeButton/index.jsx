import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkHome = {}; // Link do router estilizado

LinkHome.linkPaginaAnterior = styled(Link)`
  text-decoration: none;

  a {
    text-decoration: none;
    color: white;
  }
`;

const BotaoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-top: 1rem;
  height: 40px;
  padding: 0rem 2rem;
  border: 0;
  border-radius: 20px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.75);
  transition: background 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

function LinkHomeButton(props) {
  console.log("estou em LinkHome");
  return (
    <BotaoContainer>
      <LinkHome.linkPaginaAnterior to={props.to}>
        {props.text}
      </LinkHome.linkPaginaAnterior>
    </BotaoContainer>
  );
}

export default LinkHomeButton;
