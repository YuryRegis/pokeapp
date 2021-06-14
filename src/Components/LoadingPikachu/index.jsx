
import Lottie from "react-lottie";
import styled from 'styled-components';
import React, { useState } from "react";
import pikachuLoading from "../../Assets/Images/pikachu.json";
import textLoading from "../../Assets/Images/loadingText.json";


const LoadingDiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const PikachuDiv = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

const TextLoadingDiv = styled.div`
    display: flex;
    margin-bottom: 50vh;
    position: absolute;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

function getConfiguracao(animationData) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSetting: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return defaultOptions;
}

function LoadingPikachu(props) {
    const [animationState, setAnimationState] = useState({
        isStopped: false,
        isPaused: false
    });

    const pikachuOptions = getConfiguracao(pikachuLoading);
    const loadingOptions = getConfiguracao(textLoading);
  
    return (
        <LoadingDiv>
            <TextLoadingDiv>
                <Lottie 
                    options={loadingOptions}
                    width={400}
                    height={300}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                />
            </TextLoadingDiv>
            <PikachuDiv>
                <Lottie 
                    options={pikachuOptions}
                    width={400}
                    height={400}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                />
            </PikachuDiv>
        </LoadingDiv>
    );
}

export default LoadingPikachu;