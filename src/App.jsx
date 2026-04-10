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

import Saree1 from './assets/Saree1.webp'
import Saree2 from './assets/Saree2.webp'
import Saree3 from './assets/Saree3.webp'
import Saree4 from './assets/Saree4.webp'

import Grocery1 from './assets/Grocery1.jpg'

import Footwear1 from './assets/Footwear1.jpg'
import Footwear2 from './assets/Footwear2.jpg'
import Footwear3 from './assets/Footwear3.jpg'

import Jewellery1 from './assets/Jewellery1.webp'
import Jewellery2 from './assets/Jewellery2.webp'
import Jewellery3 from './assets/Jewellery3.webp'
import Jewellery4 from './assets/Jewellery4.jpg'

import Mens1 from './assets/Mens1.webp'
import Mens2 from './assets/Mens2.jpg'
import Mens3 from './assets/Mens3.jpg'
import Mens4 from './assets/Mens4.jpg'



export const productContext = createContext()
export const cartContext = createContext()


function App() {


  const [productData, setProductData] = useState([
    { id: 1, img: Fruniture1, name: "Chair", price: 200, category: "furniture" },
    { id: 2, img: Fruniture2, name: "Table", price: 300, category: "furniture" },
    { id: 4, img: Fruniture3, name: "Sofa", price: 500, category: "furniture" },
    { id: 5, img: Fruniture4, name: "Bed", price: 700, category: "furniture" },

    { id: 6, img: Homedec1, name: "Decor", price: 120, category: "home" },
    { id: 7, img: Homedec2, name: "Wall Art", price: 180, category: "home" },
    { id: 8, img: Homedec3, name: "Vase", price: 90, category: "home" },

    { id: 9, img: Saree1, name: "Silk Saree", price: 800, category: "saree" },
    { id: 10, img: Saree2, name: "Cotton Saree", price: 400, category: "saree" },
    { id: 11, img: Saree3, name: "Designer Saree", price: 1200, category: "saree" },
    { id: 12, img: Saree4, name: "Party Wear Saree", price: 950, category: "saree" },

    { id: 12, img: Grocery1, name: "Mixed Dry Fruits Pack", price: 250, category: "grocery" },

  
    { id: 13, img: Footwear1, name: "Sneakers", price: 600, category: "footwear" },
    { id: 14, img: Footwear2, name: "Casual Shoes", price: 550, category: "footwear" },
    { id: 15, img: Footwear3, name: "Running Shoes", price: 700, category: "footwear" },


  { id: 16, img: Jewellery1, name: "Traditional Gold Necklace Set", price: 1500, category: "accessories" },
{ id: 17, img: Jewellery2, name: "Designer Drop Earrings", price: 800, category: "accessories" },
{ id: 18, img: Jewellery3, name: "Elegant Chain Bracelet", price: 600, category: "accessories" },
{ id: 19, img: Jewellery4, name: "Crystal Studded Ring", price: 500, category: "accessories" },

{ id: 20, img: Mens1, name: "Printed Casual T-Shirt", price: 300, category: "mens" },
{ id: 21, img: Mens2, name: "Slim Fit Cotton Shirt", price: 500, category: "mens" },
{ id: 22, img: Mens3, name: "Classic Blue Denim Jeans", price: 900, category: "mens" },
{ id: 23, img: Mens4, name: "Premium Winter Jacket", price: 1200, category: "mens" }

  ])

  const [cart, setCart] = useState([])

  return (
    <>
      <BrowserRouter>
        <productContext.Provider value={{ productData, cart, setCart }}>
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
