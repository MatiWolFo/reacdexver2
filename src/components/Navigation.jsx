import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import PokemonContext from './context/PokemonContext';

//COMPONENTE DE RENDERIZADO
export const Navigation = () => {
    //USECONTEXT PARA UTILIZAR LOS VALORES DEL POKEMON PROVIDER Y USARLOS EN ESTE COMPONENTE
    const { onInputChange, valueSearch, onResetForm, setActive, active } = useContext(PokemonContext)

    //REDIRECCIONAR A LA PAGINA O RUTA DE SEARCH POKEMON EN BASE AL VALUESEARCH (LO QUE TENGA EN LA BARRA DE BUSQUEDA)
    const navigate = useNavigate()

    //EVITAR REFRESH PAGINA
    const onSearchSubmit = (e) => {
        //IF PARA BOTON BUSCAR, EVITAR AUTO RENDER Y LIMPIAR, EVITAR BUSCAR VACIO SIN VALUESEARCH
        if (valueSearch) {
            e.preventDefault()
            navigate('/search', {
                state: valueSearch               
            });
            onResetForm()
        } else {
            e.preventDefault()
            onResetForm()
        }      
    };
    return (
        <>
            <div>
                <header className='header-container'>
                    <a href='/' className='logo'>
                        <img
                            src='https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png'
                            alt='Logo Pokedex'
                        />
                    </a>
                    <form onSubmit={onSearchSubmit}>
                        <div className='form-group'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='icon-search'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                                />
                            </svg>
                            <input
                                type='search'
                                name='valueSearch'
                                id=''
                                value={valueSearch}
                                onChange={onInputChange}
                                placeholder="Search by Pokémon name"
                            />
                        </div>
                        <div className='container-filter container'>
                            {/* !active, SI ESTA EN TRUE PONLO EN FALSE, SI ESTA EN FALSE PONLO EN TRUE */}
                            <div className='icon-filter' onClick={() => setActive(!active)}>
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
                                <span>Filter</span>
                            </div>
                        </div>
                        <button className='btn-search'>Search</button>
                    </form>
                </header>
                <Outlet />
            </div>
        </>
    )
};

