import React, { useContext } from 'react'
import { CardPokemon } from './CardPokemon'
import PokemonContext from './context/PokemonContext'
import { Loader } from './Loader'




//ESTE COMPONENTE MUESTRA TODO EL LISTADO Y MAPEA LOS POKEMON, CONSUME EL USECONTEXT
export const PokemonList = () => {

    const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext)


    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className="card-list-pokemon container">
                        {
                            //SI FILTEREDPOKEMONS.LENGHT MAYOR QUE 0, MUESTRA LA LISTA DE FILTEREDPOKEMON, SI ESTA VACIO O ES 0, MUESTRA TODOS LOS POKEMON
                            filteredPokemons.lenght ? (
                                //MAPEA Y PASA PROPS AL COMPONENTE CARD
                                <>
                                    {filteredPokemons.map(pokemon => (
                                        <CardPokemon pokemon={pokemon} key={pokemon.id} />
                                    ))}
                                </>
                            ) : (
                                <>
                                    {allPokemons.map(pokemon => (
                                        <CardPokemon pokemon={pokemon} key={pokemon.id} />
                                    ))}
                                </>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}