import React from 'react'
import './navBar.css'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
    <div className='container'>
        <nav className='nav'>
            <div className='nav_brand'>
                <NavLink className='nav_link' to='/'>Home</NavLink>
            </div>
            <ul className='nav_list'>
                <li>
                    <NavLink className='nav_link' >Categoria 1</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' >Categoria 2</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='cart' >
                        < CartWidget />
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar;
