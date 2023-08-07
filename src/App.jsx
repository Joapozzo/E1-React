import Navbar from "./componentes/Navbar/Navbar"
import Layout from "./componentes/Layout/Layout"
import Hero from "./componentes/Hero/Hero"
import Categories from "./componentes/Categories/Categories"
import Products from "./componentes/Products/Products"
import Footer from "./componentes/Footer/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <Categories/>
        <Products/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
