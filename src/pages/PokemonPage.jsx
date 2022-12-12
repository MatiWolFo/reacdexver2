import React, {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import PokemonContext from '../components/context/PokemonContext';
import {Loader} from '../components/Loader';
import {primerMayuscula} from '../helper/helper';
import {Stats} from "../components/Stats";


export const PokemonPage = () => {
    const {getPokemonByID} = useContext(PokemonContext)

    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})

    const {id} = useParams()

    const fetchPokemon = async (id) => {
        const data = await getPokemonByID(id)
        setPokemon(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPokemon(id)
    }, [])

    return (
        <>
            <main className='container main-pokemon'>
                {
                    loading ? (
                        <Loader/>
                    ) : (
                        <>
                            <div className='header-main-pokemon'>
                                <span className='number-pokemon'>#{pokemon.id}</span>
                                <div className='container-img-pokemon'>
                                    <img
                                        src={pokemon.sprites.other.dream_world.front_default}
                                        alt={`Pokemon ${pokemon?.name}`}
                                    />
                                </div>

                                <div className='container-info-pokemon'>
                                    <h1>{primerMayuscula(pokemon.name)}</h1>
                                    <div className='card-types info-pokemon-type'>
                                        {pokemon.types.map(type => (
                                            <span key={type.type.name} className={`${type.type.name}`}>
                                                {type.type.name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className='info-pokemon'>
                                        <div className='group-info'>
                                            <p>ALTURA</p>
                                            <span>{pokemon.height / 10} m</span>
                                        </div>
                                        <div className='group-info'>
                                            <p>PESO</p>
                                            <span>{pokemon.weight / 10} Kg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Stats pokemon={pokemon}/>
                        </>
                    )
                }
            </main>
        </>
    );
};
