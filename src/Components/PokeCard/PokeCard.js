import React, {useState} from "react"
import {Card, Content, Icon, NomePokemon, TipoPokemon, AtributosListItem, ActionButton, AtributoItemTitulo, BackgroundSquare} from "./index"
import "../../Assets/CSS/icofont.css"


function PokeCard() {
    const [ features ] = useState([ ])

    return (
        <div>
            <Card>
                <BackgroundSquare />
                <Content>
                    <Icon classname = "icofont-paper-plane"/>
                    <TipoPokemon>Aquatico</TipoPokemon>
                    <NomePokemon>Squirtle</NomePokemon>
                    {   
                        <>
                            <AtributosListItem>
                                <AtributoItemTitulo>
                                    <i className="icofont-hand-thunder"/>
                                    Habilidades
                                </AtributoItemTitulo>
                            </AtributosListItem>
                            <AtributosListItem>
                                <AtributoItemTitulo>
                                    <i className="icofont-woman-bird"/>
                                    Formas
                                </AtributoItemTitulo>
                            </AtributosListItem>
                            <AtributosListItem>
                                <AtributoItemTitulo>
                                    <i className="icofont-hand-power"/>
                                    Força base
                                </AtributoItemTitulo>
                            </AtributosListItem>
                            <AtributosListItem>
                                <AtributoItemTitulo>
                                    <i className="icofont-shield-alt"/>
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
                    <ActionButton>Voltar</ActionButton>
                </Content>
            </Card>
        </div>
    )
}

export default PokeCard