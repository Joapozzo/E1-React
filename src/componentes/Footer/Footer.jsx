import React from 'react'
import {FooterTop, FootTextContainer, FooterDown} from "./FooterStyles"

import LogoWhite from "../../imgs/logos/logo-copa-white.png"

import {GoMail} from "react-icons/go"
import {BsWhatsapp} from "react-icons/bs"
import {GoLocation} from "react-icons/go"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <>
        <FooterTop>
            <img src={LogoWhite} alt="" />
            <FootTextContainer>
                <h2>MENÚ</h2>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nuevo</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Descuentos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </FootTextContainer>
            <FootTextContainer>
                <h2>CONTACTÁNOS</h2>
                <ul>
                    <li> <GoMail/> <a href="#">contacto@copaindumentaria.com</a></li>
                    <li> <BsWhatsapp/> <a href="#">154648121</a></li>
                    <li> <GoLocation/> <a href="#">Av. Poeta Lugones 36, Córdoba Capital.</a></li>
                    <li> <BsFacebook/> <a href="#">copaindumentaria.oficial</a></li>
                    <li> <AiOutlineInstagram/> <a href="#">copa.oficial</a></li>
                </ul>
            </FootTextContainer>
        </FooterTop>
        <FooterDown>
            <p>2022 © COPA INDUMENTARIA | Design By Joaquín Pozzo</p>
        </FooterDown>
    </>
  )
}

export default Footer