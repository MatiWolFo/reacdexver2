import React from 'react'
import { Link } from 'react-router-dom'
import { primerMayuscula } from '../helper/helper';

export const CardPokemon = ({ pokemon }) => {
    return (
        //RETORNAR LINK 
        <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
            <div className='card-img'>
                <img
                    //TRAE LAS IMAGENES Y EL NOMBRE
                    src={pokemon.sprites.other.home.front_default}
                    alt={`Pokemon ${pokemon.name}`}
                />
            </div>
            <div className='card-info'>
                {/* TRAER NUMERO, NOMBRE Y MAPEA TIPOS */}
                <span className='pokemon-id'>N° {pokemon.id}</span>
                <h3>{primerMayuscula(pokemon.name)}</h3>
                <div className='card-types'>
                    {pokemon.types.map(type => (
                        //CLASSNAME DE LOS TIPOS PARA APLICAR CSS SEGUN EL DATO
                        <span key={type.type.name} className={type.type.name}>
                            {primerMayuscula(type.type.name)}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};
