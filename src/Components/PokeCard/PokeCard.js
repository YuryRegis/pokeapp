import React, {useState,useEffect} from "react"
import {Card, Content, Icon, NomePokemon, TipoPokemon, AtributosListItem, ActionButton, AtributoItemTitulo, BackgroundSquare, ImgPokemon} from "./index"
import "../../Assets/CSS/icofont.css"
import Icognita from "../../Assets/Images/icognita.png";

const PokeCard = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(props.pokeData);

  useEffect(() => {
    // if (!loading) return
    setData(props.pokeData);
    setLoading(false);
  });

  const defaultImg = data ? data.sprites.front_default : Icognita;
  const artworkImg = data ? data.sprites.other["official-artwork"].front_default : undefined;

  return (
    <div>
      <Card>
        <BackgroundSquare />
        <Content>
          <Icon>
            {   
                loading ? <ImgPokemon src={defaultImg} /> :
                <ImgPokemon src={artworkImg ? artworkImg : defaultImg} />
            }
          </Icon>
          <TipoPokemon>Aquatico</TipoPokemon>
          <NomePokemon>Squirtle</NomePokemon>
          {
            <>
              <AtributosListItem>
                <AtributoItemTitulo>
                  <i className="icofont-hand-thunder" />
                  Habilidades
                </AtributoItemTitulo>
              </AtributosListItem>
              <AtributosListItem>
                <AtributoItemTitulo>
                  <i className="icofont-woman-bird" />
                  Formas
                </AtributoItemTitulo>
                Card/4
              </AtributosListItem>
              <AtributosListItem>
                <AtributoItemTitulo>
                  <i className="icofont-hand-power" />
                  Força base
                </AtributoItemTitulo>
              </AtributosListItem>
              <AtributosListItem>
                <AtributoItemTitulo>
                  <i className="icofont-shield-alt" />
                  Defesa base
                </AtributoItemTitulo>
              </AtributosListItem>
            </>
            // features.map(item => (
            //     (
            //         <AtributosListItem>
            //             <AtributoItemTitulo>

            //                 Habilidades
            //             </AtributoItemTitulo>
            //             <span>
            //                 {item}
            //             </span>
            //         </AtributosListItem>
            //     )
            // ))
          }
          <ActionButton onClick={props.onClick}>Voltar</ActionButton>
        </Content>
      </Card>
    </div>
  );
};

export default PokeCard