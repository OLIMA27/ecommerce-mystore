import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Cart from './Cart'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Fruniture1 from './assets/Fruniture1.jpg'
import Fruniture2 from './assets/Fruniture2.jpg'
import Fruniture3 from './assets/Fruniture3.jpg'
import Fruniture4 from './assets/Fruniture4.webp'
import Homedec1 from './assets/Homedec1.jpg'
import Homedec2 from './assets/Homedec2.jpg'
import Homedec3 from './assets/Homedec3.jpg'

export const productContext = createContext()
export const cartContext = createContext()


function App() {


  const [productData, setProductData]= useState([
    { id: 1, img: Fruniture1, name: "Chair", price: 200, category: "furniture" },
    { id: 2, img: Fruniture2, name: "Table", price: 300, category: "furniture" },
    { id: 4, img: Fruniture3, name: "Sofa", price: 500, category: "furniture" },
    { id: 5, img: Fruniture4, name: "Bed", price: 700, category: "furniture" },
    { id: 6, img: Homedec1, name: "Decor", price: 120, category: "home" },
    { id: 7, img: Homedec2, name: "Wall Art", price: 180, category: "home" },
    { id: 8, img: Homedec3, name: "Vase", price: 90, category: "home" }])

    const [cart, setCart] = useState([])

  return (
    <>
      <BrowserRouter>
        <productContext.Provider value={{productData,cart,setCart}}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='cart' element={<Cart />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </productContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
