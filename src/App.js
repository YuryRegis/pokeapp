import React from "react"
import { flushSync } from "react-dom";
import { Content } from "./Components/PokeCard";
import PokeCard from "./Components/PokeCard/PokeCard";


function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <PokeCard />
    </div>
   
  );
}

export default App;