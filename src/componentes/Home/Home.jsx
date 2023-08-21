import React from 'react'
import Hero from '../Hero/Hero'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import { HomeWrapper } from './HomeStyles'

const Home = () => {
  return (
    <HomeWrapper>
        <Hero/>
        <Categories/>
        <Products/>
    </HomeWrapper>
  )
}

export default Home