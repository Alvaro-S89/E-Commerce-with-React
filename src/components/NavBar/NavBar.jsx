import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
    <div className='container'>
            <div className='nav_brand'>
                <NavLink className='nav_link' to='/'>
                    <img className='logo' src="https://res.cloudinary.com/dfg3nr91y/image/upload/v1678630741/Logo_nc1ufn.png" alt="img" />
                </NavLink>
            </div>
        <nav className='nav'>
            <ul className='nav_list'>
                <li>
                    <NavLink className='nav_link' to='/category/dojo' >Todo para tu Dojo</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='/category/kendo' >Kendo</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='/category/karate' >Karate</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='/category/judo' >Judo</NavLink>
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
