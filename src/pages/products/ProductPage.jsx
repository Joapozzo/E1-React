import React from 'react'
import {ProductCard, PartsPrice, ButtonsContainer, Buttons} from "./ProductsStyles"

import {AiFillCreditCard} from "react-icons/ai"
import {BsBagFill} from "react-icons/bs"
import {AiFillEye} from "react-icons/ai"

const ProductPage = ({img, nombre, precio}) => {
  return (
    <ProductCard>
        <img src={img} alt="" />
        <p>{nombre}</p>
        <h3>${precio}</h3>
        <PartsPrice>
            <AiFillCreditCard/>
            Hasta 6 cuotas sin interés
        </PartsPrice>
        <ButtonsContainer>
            <Buttons>
                <BsBagFill/> Comprar
            </Buttons>
            <Buttons>
                <AiFillEye/> Ver mas
            </Buttons>
        </ButtonsContainer>

    </ProductCard>
  )
}

export default ProductPage