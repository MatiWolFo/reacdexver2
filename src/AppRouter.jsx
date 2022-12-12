import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { PokemonPage } from './pages/PokemonPage';
import { SearchPage } from './pages/SearchPage';


export const AppRouter = () => {
    return (
        <Routes>
            {/* INYECTAR LOS ELEMENTOS PARA LA NAVEGACION ENTRE VISTAS */}
            {/* CON EL COMPONENTE NAVEGA ENTRE LAS PAGINAS O VISTAS */}
            {/* AGREGAR OUTLET A NAVIGATION EN COMPONENTE */}
            <Route path='/' element={<Navigation />}>
                <Route index element={<HomePage />} />
                <Route path='pokemon/:id' element={<PokemonPage />} />
                <Route path='search' element={<SearchPage />} />
            </Route>
            {/* EN CASO DE CUALQUIER OTRO PATH QUE NO SEAN LOS ANTERIORES, DEVUELVE AL HOME */}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
    
};