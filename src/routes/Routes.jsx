import React from 'react'
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route
} from "react-router-dom"
import Layout from '../componentes/Layout/Layout'
import Home from "../componentes/Home/Home"
import About from "../pages/About/About"
import Contacto from '../pages/Contacto/Contacto'
import Productos from '../pages/products/ProductsPage'
import PageError from "../pages/Error/PageError"
import { ContextoProvider } from '../context/Context'


const Routes = () => {
  return (
    <BrowserRouter>
    <ContextoProvider>
        <Layout>
          <ReactDomRoutes>

            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contacto/>} />
            <Route path='products' element={<Productos/>} />
            <Route path='*' element={<PageError/>} />

          </ReactDomRoutes>
        </Layout>
    </ContextoProvider>

    </BrowserRouter>
  )
}

export default Routes