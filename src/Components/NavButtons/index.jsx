import React from "react";
import styled from "styled-components";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import "../../Assets/CSS/icofont.css"


const BotaoNav = styled.button`
  width: 12vh;
  height: 4vh;
  text-align: center;
  border-radius: 15px;
  padding: 5px 20px;
  margin: 2vh;
  font-size: 1vw;
  font-weight: 600;
  border: 2px solid orange;
  background: orange;
  color: white;
`;

const DivBotao = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const useStyles = makeStyles({
  root: {
    // maxWidth: 600,
    flexGrow: 1,
    width: '100vh',
    backgroundColor: 'rgba(255,255,255,0)'
  },
});

function NavButtons(props) {
  const classes = useStyles();

  return (
    <DivBotao>
      <MobileStepper
        variant="progress"
        steps={props.stepper.passos}
        position="static"
        activeStep={props.stepper.passoAtual}
        className={classes.root}  
        nextButton={
          <BotaoNav onClick={props.funcoes.proximo} disabled={props.stepper.passoAtual === props.stepper.passos}>Proximo</BotaoNav>
        }
        backButton={
          <BotaoNav onClick={props.funcoes.voltar} disabled={props.stepper.passoAtual === 0}>Voltar</BotaoNav>
        }
      />
    </DivBotao>
  );
}

export default NavButtons;