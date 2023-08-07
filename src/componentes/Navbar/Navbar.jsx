import React from 'react'
import  { NavbarContainer, NavbarTop, NavbarCenter, IconDesktopContainer, Menuicon, } from './NavbarStyles'

import {FaUser} from "react-icons/fa"
import {BsFillHandbagFill} from "react-icons/bs"
import {FiMenu} from "react-icons/fi"
import Logo from "../../imgs/logos/logo-copa-white.png"

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarTop>
                <p>
                    20% DE DESCUENTO ABONANDO EN EFECTIVO O TRANSFERENCIA - ENVÍOS GRATIS EN CÓRDOBA CAPITAL
                </p>
            </NavbarTop>
            <NavbarCenter>
                <img src={Logo} alt="Logo" />
                <ul>
                    <li>Inicio</li>
                    <li>Nuevo</li>
                    <li>Productos</li>
                    <li>Descuentos</li>
                    <li>Contacto</li>
                </ul>
                <IconDesktopContainer>
                    <FaUser></FaUser>
                    <BsFillHandbagFill></BsFillHandbagFill>
                </IconDesktopContainer>
                <Menuicon>
                    <FiMenu></FiMenu>
                </Menuicon>
            </NavbarCenter>
        </NavbarContainer>
        
    )
}

export default Navbar