import React from 'react'
import './NavBar.css'
export default function NavBar() {

    return (
        <><nav className="navbar">
            <div>
                <img className="navbar__logo" src={"assets/joystick.jpg"}/>
            </div>
            <ul className="navbar__menu">
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </nav></>
    )

}