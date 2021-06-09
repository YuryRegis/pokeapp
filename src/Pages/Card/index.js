import React from "react"
import PokeCard from "../../Components/PokeCard/PokeCard"
 

function Card() {
    return (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}>
          <PokeCard/>
        </div>
    )
}

export default Card;    