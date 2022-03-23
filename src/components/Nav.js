import React from 'react'
import logo from '../images/SoftVirtual_Logo-PhotoRoom.png'
import './Nav.css'
import logito from '../images/tecnologi.jpg'

const Nav = () => {
  return (
    
    <div className='Container'>
        <img className='logo' src={logito}></img>
        <nav>
            <ul className='nav_links'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Servicio</a></li>
                <li><a href="#">Nuestros Clientes</a></li>
            </ul>
        </nav>
    
    </div>
    
  )
}

export default Nav