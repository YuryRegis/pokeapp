
import styled from "styled-components";


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
  background: linear-gradient(20deg,#b70df2 9%,#130212 100%);
  position: relative;
  overflow: hidden;
  width: 450px;
  padding: 3rem 0 2rem;
  border-radius: 5rem;
  color: white;
  box-shadow: 
            0 24px 38px 3px rgba(0, 0, 0, 0.25),
            0 9px 46px 8px rgba(0, 0, 0, 0.25), 
            0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon  = styled.div`
  background: linear-gradient(45deg,#b70df2 0%,#130212 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vh;
  height: 20vh;
  flex: 0 0 auto;
  margin-bottom: 2rem;
  border-radius: 10vh;
  font-size: 90px;
  color: white;
  box-shadow: -6px 0px 29px 15px rgba(255, 255, 255, 0.25);
`;



export const ImgPokemon = styled.img`
  height: 15vh;
  width: 15vh
`;