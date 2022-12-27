import React from 'react'
import { Link } from 'react-router-dom'

export const HomeButton = () => {
    return (
        <Link to='/'>
            <button className='btn-flotante'>HOME</button>
        </Link>
    )
}
