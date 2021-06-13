import React from "react";
import styled, { css } from "styled-components";

const gradiente = (angulo) => css`
  background: linear-gradient(${angulo || 130}deg, #00dbde 0%, #fc00ff 100%);
`;

export const BackgroundSquare = styled.div`
  position: absolute;
  z-index: 2;
  top: 52%;
  left: 0%;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(-3deg);
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 400px;
  padding: 3rem 0 2rem;
  border-radius: 0.5rem;
  color: white;
  ${gradiente()};
  box-shadow: 
            0 24px 38px 3px rgba(0, 0, 0, 0.25),
            0 9px 46px 8px rgba(0, 0, 0, 0.25), 
            0 11px 15px -7px rgba(0, 0, 0, 0.25);75px
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
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
  ${gradiente()};
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

export const TipoPokemon = styled.div`
  font-size: 1.25rem;
`;

export const NomePokemon = styled.div`
  font-size: 3rem;
`;

export const AtributosListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  /* margin-bottom: 0.325rem; */
`;

export const AtributoItemTitulo = styled.div`
    font-size: 1.2rem;
`;

export const ImgPokemon = styled.img`
  height: 12vh;
  width: 12vh
`;

export const ActionButton = styled.button`
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