import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components/CardPokemon';
import PokemonContext from '../components/context/PokemonContext';
import { HomeButton } from '../components/HomeButton';


export const SearchPage = () => {

    useEffect(() => {
        document.title = "Pokedex React - Search"
    }, []);

    const location = useLocation()
    //console.log(location)
    const { globalPokemons } = useContext(PokemonContext)


    //USAR FILTER Y ALMACENAR EN CONSTANTE, FILTRA TODOS LOS QUE INCLUYAN LOS TERMINOS DE BUSQUEDA DE USELOCATION
    const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
    //console.log(filteredPokemons)

    return (
        <>
            <div className='container'>
                <p className='p-search'>
                    {/* CANTIDAD DE ELEMENTOS DEL ARRAY DEVUELTO POR LA CONSULTA CON LENGHT */}
                    Se encontraron <span>{filteredPokemons.length}</span> resultados:
                </p>
                {/* MAPEAR LOS RESULTADOS PARA OBTENER LA CARD */}
                <div className='card-list-pokemon container'>
                    {filteredPokemons.map(pokemon => (
                        <CardPokemon pokemon={pokemon} key={pokemon.id} />
                    ))}
                </div>
            </div>
            <HomeButton />    
        </>
    )
};