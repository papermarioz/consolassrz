import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
export default function NavBar() {

    return (
        <><nav className="navbar">
            <div>
                <img className="navbar__logo" src={"assets/joystick.png"}/>
            </div>
            <ul className="navbar__menu">
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Contacto</a></li>
                <CartWidget/>
            </ul>
            
        </nav></>
    )

}