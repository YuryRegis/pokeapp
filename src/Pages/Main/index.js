import React, {useState, useEffect} from "react";
import api from "../../api";


function Main() {
    const [data, setData] = useState([]);
    const [prevURL, setPrevURL] = useState('');
    const [nextURL, setNextURL] = useState('');
    const [loadingStatus, setLoadingStatus] = useState(true);

    const URL = 'https://pokeapi.co/api/v2/pokemon';

    useEffect( () => {
      async function fetchData() {
        let resposta = await api.get(URL);
        console.log(resposta);
        setNextURL(resposta.next);
        setPrevURL(resposta.previous);
        setLoadingStatus(false);
      }
      fetchData();
    },[])

    return (
        <div style={{
          display: "flex",  
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}>
          {loadingStatus ? <h1>Carregando...</h1> : (
            <h1>Lista carregada</h1>
          )}  
        </div>
       
      );
}

export default Main;
  