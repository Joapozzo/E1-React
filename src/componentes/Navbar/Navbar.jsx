import React, { useContext, useState } from 'react'
import  { NavbarContainer, NavbarTop, NavbarCenter, IconDesktopContainer, Menuicon, ButtonMenu, MenuLinksContainer, NavLinkStyled } from './NavbarStyles'

import {FaUser} from "react-icons/fa"
import {BsFillHandbagFill} from "react-icons/bs"
import {FiMenu} from "react-icons/fi"
import Logo from "../../imgs/logos/logo-copa-white.png"
import { Context } from '../../context/Context'



const Navbar = () => {

    const {isMenuOpen, setIsMenuOpen}  = useContext(Context);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };


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
                    <li> <NavLinkStyled to="/"> Inicio </NavLinkStyled>  </li>
                    <li> <NavLinkStyled to="/"> Nuevo </NavLinkStyled> </li>
                    <li> <NavLinkStyled to="/products"> Productos </NavLinkStyled> </li>
                    <li> <NavLinkStyled to="/about"> Sobre Nosotros </NavLinkStyled> </li>
                    <li> <NavLinkStyled to="/"> Contacto </NavLinkStyled> </li>
                </ul>

                <IconDesktopContainer>
                    <FaUser></FaUser>
                    <BsFillHandbagFill></BsFillHandbagFill>
                </IconDesktopContainer>

                <Menuicon>
                    <ButtonMenu onClick={toggleMenu}>
                        <FiMenu style={{ color: isMenuOpen ? 'var(--blue)' : 'var(--white)' }}/>
                    </ButtonMenu>
                </Menuicon>

            </NavbarCenter>

            <MenuLinksContainer style={{ display: isMenuOpen ? 'flex' : 'none' }}>
                <a href="#">Inicio</a>
                <a href="#">Nuevo</a>
                <a href="#">Productos</a>
                <a href="#">Sobre Nosotros</a>
                <a href="#">Contacto</a>
            </MenuLinksContainer>
            
        </NavbarContainer>
        
    )
}

export default Navbar