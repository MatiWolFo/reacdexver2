import React, {useContext} from 'react'
import {CardPokemon} from './CardPokemon'
import PokemonContext from './context/PokemonContext'
import {Loader} from './Loader'


//ESTE COMPONENTE MUESTRA TODO EL LISTADO Y MAPEA LOS POKEMON, CONSUME EL USECONTEXT
export const PokemonList = () => {

    const {allPokemons, loading, filteredPokemons} = useContext(PokemonContext)

    if (loading) return <Loader/>

    const pokemonList  = filteredPokemons.length ? filteredPokemons : allPokemons

    return <div className="card-list-pokemon container">
        {pokemonList.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id}/>))}
    </div>


}
