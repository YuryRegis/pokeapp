import React from "react"
import styled from "styled-components"


const Logo = styled.img`
    height: 10vh;
`;

const BarraNavegacao = styled.nav`
    height: 10vh;
    display: flex;
    padding: 0 5vw;
    justify-content: space-between;
    background-color: orange;
`;

function NavBar() {
    return (
        <BarraNavegacao>
            <Logo src="https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png"/>
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/f/f3/LogoCompasso-positivo.png"/>
        </BarraNavegacao>
    )
}


export default NavBar