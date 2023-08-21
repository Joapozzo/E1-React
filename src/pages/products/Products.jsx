import React from 'react'
import {ProductsWrapper, ProductsTop, ProductsContainer} from "./ProductsStyles"
import { products } from '../../data/ProductsData'
import ProductPage from './ProductPage'

import {AiOutlineArrowDown, AiFillFilter} from "react-icons/ai"


const Productos = () => {
  return (
    <ProductsWrapper>
        <ProductsTop>
            <button>
                Volver
            </button>
            <h4>Productos</h4>
            <div>
                <span>
                    <p>Filtrar</p>
                    <AiFillFilter/>
                </span>
                <span>
                    <p>Mas nuevo a mas viejo</p>
                    <AiOutlineArrowDown/>
                </span>
            </div>
        </ProductsTop>

        <h3>Remeras</h3>

        <ProductsContainer>
            {
                products.map((item) => {
                    return <ProductPage key={item.id} {...item}/>
                })
            }
        </ProductsContainer>

    </ProductsWrapper>
  )
}

export default Productos