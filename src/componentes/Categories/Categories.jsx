import React from 'react'
import {CategoriesWrapper ,CategoriesTitle, CategoriasContainer} from "./CategoriesStlyes"
import { categories } from '../../data/Categories'
import Categorie from './Categorie'

import {motion} from "framer-motion"

const Categories = () => {
  return (
    <>
        <CategoriesWrapper>
            <CategoriesTitle>
                <h2>CATEGORIAS</h2>
                <span></span>
            </CategoriesTitle>
            <CategoriasContainer>
                
                {
                    categories.map((category) => {
                        return <Categorie key={category.id} {...category} />
                    })
                }

            </CategoriasContainer>
        </CategoriesWrapper>

    </>
  )
}

export default Categories