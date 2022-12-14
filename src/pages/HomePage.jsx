import React, { useContext, useEffect } from 'react'
import PokemonContext from '../components/context/PokemonContext';
import { FilterBar } from '../components/FilterBar';
import { PokemonList } from '../components/PokemonList';


export const HomePage = () => {

    useEffect(() => {
        document.title = "Pokedex React - Home"
    }, []);

    const {onClickLoadMore} = useContext(PokemonContext)

    return (
        <>
            <PokemonList />
            <FilterBar />
            <div className ="container-btn-load-more container">
                {/* CARGA EL SIGUIENTE ARRAY DE POKEMON CON EL ONCLICK DEL PROVIDER */}
                <button className ='btn-load-more' onClick ={onClickLoadMore}>
                    LOAD MORE
                </button>
            </div>         
        </>
    );
};

