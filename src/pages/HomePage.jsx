import React, { useContext } from 'react'
import PokemonContext from '../components/context/PokemonContext';
import { FilterBar } from '../components/FilterBar';
import { PokemonList } from '../components/PokemonList';


export const HomePage = () => {

    const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

    return (
        //CORREGIR FILTRADO DE TIPOS
        <>
            <div className='container-filter container'>
                {/* !active, SI ESTA EN TRUE PONLO EN FALSE, SI ESTA EN FALSE PONLO EN TRUE */}
                <div className='icon-filter' onClick={()=> setActive(!active)}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                        />
                    </svg>
                    <span>Filtrar</span>
                </div>
            </div>
            <PokemonList />
            <FilterBar />
            <div className ="container-btn-load-more container">
                {/* CARGA EL SIGUIENTE ARRAY DE POKEMON CON EL ONCLICK DEL PROVIDER */}
                <button className ='btn-load-more' onClick ={onClickLoadMore}>
                    CARGAR MÁS
                </button>
            </div>
        </>
    );
};

