import React from 'react'
import {ProductsWrapper, ProductsContainer, ButtonsMainContainer, Buttons } from "./ProductsStyles"
import { products } from '../../data/ProductsData'
import Product from './Product'


const Products = () => {

  return (
    <ProductsWrapper>
        <ProductsContainer>
            {
                products.map((item) => {
                    return item.destacado ? <Product key={item.id} {...item} /> : null
                })
            }
        </ProductsContainer>
        <ButtonsMainContainer>
            <Buttons>
                Ver mas
            </Buttons>
            <Buttons>
                Ver menos
            </Buttons>
        </ButtonsMainContainer>

    </ProductsWrapper>
  )
}

export default Products