import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PokemonContext from '../components/context/PokemonContext';
import { Loader } from '../components/Loader';
import { primerMayuscula, palabraMayuscula } from '../helper/helper';
import { HomeButton } from '../components/HomeButton';


export const PokemonPage = () => {
    //OBTENER LA INFORMACION DE SOLO 1 POKEMON POR VEZ USANDO FUNCION ESPECIFICA
    const { getPokemonByID } = useContext(PokemonContext)

    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})

    //DESESTRUCTURAR lA RUTA DINAMICA CON USEPARAMS PARA OBTENER LA ID
    const { id } = useParams()

    //FUNCION ASYNC QUE TENDRA ID PASADA POR USEPARAM A USEEFFECT CUANDO SEA LLAMADA
    const fetchPokemon = async (id) => {
        const data = await getPokemonByID(id)
        setPokemon(data)
        setLoading(false)
    }

    //PASAR ID DESDE USEPARAM PARA LLAMAR A FUNCION CORRECTAMENTE
    useEffect(() => {
        fetchPokemon(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        document.title = "Pokedex React - Pokemon Info"
    }, []);

    return (
        <>
            <main className='container main-pokemon'>
                {/* CONDICIONAL DEL LOADER */}
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className='header-main-pokemon'>
                                <span className='number-pokemon'>#{pokemon.id}</span>
                                <div className='container-img-pokemon'>
                                    <img
                                        src={pokemon.sprites.other.home.front_default}
                                        alt={`Pokemon ${pokemon?.name}`}
                                    />
                                </div>

                                <div className='container-info-pokemon'>
                                    <h1>{palabraMayuscula(pokemon.name)}</h1>
                                    <div className='card-types info-pokemon-type'>
                                        {pokemon.types.map(type => (
                                            <span key={type.type.name} className={`${type.type.name}`}>
                                                {primerMayuscula(type.type.name)}
                                            </span>
                                        ))}
                                    </div>
                                    <div className='info-pokemon'>
                                        <div className='group-info'>
                                            <p>HEIGHT</p>
                                            <span>{pokemon.height / 10} m</span>
                                        </div>
                                        <div className='group-info'>
                                            <p>WEIGHT</p>
                                            <span>{pokemon.weight / 10} Kg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='container-stats'>
                                <h1>BASE STATS</h1>
                                <div className='stats'>
                                    <div className='stat-group'>
                                        <span>HP</span>
                                        <div className='progress-bar'></div>
                                        <span className='counter-stat'>
                                            {pokemon.stats[0].base_stat}
                                        </span>
                                    </div>
                                    <div className='stat-group'>
                                        <span>ATK</span>
                                        <div className='progress-bar'></div>
                                        <span className='counter-stat'>
                                            {pokemon.stats[1].base_stat}
                                        </span>
                                    </div>
                                    <div className='stat-group'>
                                        <span>DEF</span>
                                        <div className='progress-bar'></div>
                                        <span className='counter-stat'>
                                            {pokemon.stats[2].base_stat}
                                        </span>
                                    </div>
                                    <div className='stat-group'>
                                        <span>SP ATK</span>
                                        <div className='progress-bar'></div>
                                        <span className='counter-stat'>
                                            {pokemon.stats[3].base_stat}
                                        </span>
                                    </div>
                                    <div className='stat-group'>
                                        <span>SP DEF</span>
                                        <div className='progress-bar'></div>
                                        <span className='counter-stat'>
                                            {pokemon.stats[4].base_stat}
                                        </span>
                                    </div>
                                    <div className='stat-group'>
                                        <span>SPD</span>
                                        <div className='progress-bar'></div>
                                        <span className='counter-stat'>
                                            {pokemon.stats[5].base_stat}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </main>
            <HomeButton />  
        </>
    );
};