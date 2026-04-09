import { Link, useNavigate } from 'react-router-dom'
import bg from './assets/bg.png'
import bg1 from './assets/bg1.png'

import Fruniture from './assets/Fruniture.jpg'
import Homedec from './assets/Homedec.webp'
import Saree from './assets/Saree.webp'
import Mens from './assets/Mens.jpg'
import Makeup from './assets/Makeup.avif'
import Footwear from './assets/Footwear.webp'
import Jewellery from './assets/Jewellery.webp'
import Grocery from './assets/Grocery.jpg'
import { FaArrowRight } from 'react-icons/fa'

function Home() {
  const navigate = useNavigate()

  const categories = [
    { img: Fruniture, text: "Furniture", category: "furniture" },
    { img: Homedec, text: "Home", category: "home" },
    { img: Saree, text: "Saree", category: "saree" },
    { img: Mens, text: "Mens Fashion", category: "mens" },
    { img: Makeup, text: "Beauty", category: "beauty" },
    { img: Footwear, text: "FootWear", category: "footwear" },
    { img: Jewellery, text: "Accessories", category: "accessories" },
    { img: Grocery, text: "Grocery", category: "grocery" }
  ]
  const featureProducts = [
    { img: Fruniture, text: "Furniture", price: 477, category: "furniture" },
    { img: Homedec, text: "Home", price: 477, category: "home" },
    { img: Saree, text: "Saree", price: 477, category: "saree" },
    { img: Mens, text: "Mens Fashion", price: 477, category: "mens" }
  ]
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="relative h-[85vh] w-full">
        <img src={bg} alt="bg" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex items-center">
          <div className="ml-60 bg-[#f4f1ee]/90 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md">

            <p className="text-xs tracking-widest text-gray-500 mb-3">COLLECTION 2026 </p>

            <h1 className="text-4xl font-semibold text-gray-800 mb-4 leading-tight"> Welcome to <br /> Our Store </h1>

            <p className="text-gray-600 mt-4 text-lg"> Curated tactile experiences for the modern minimalist. Every piece is a statement to quiet authority.</p>
            <button onClick={() => navigate('/product')} className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-[#7a5c50] text-white rounded-full hover:bg-[#5c433a] transition duration-300 shadow-md hover:shadow-lg">
              Shop Now <FaArrowRight className="text-sm" /> </button>
          </div>
        </div>
      </div>

      <div className="px-10 py-12 mt-10">
        <p className="text-sm text-gray-500">BROWSE BY</p>
        <h2 className="text-2xl font-semibold mb-6">Curated Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((value, index) => (
            <div key={index} className="cursor-pointer bg-white p-4 rounded-xl hover:shadow-md transition">
              <img src={value.img} alt="" className="w-full h-40 object-cover rounded-lg" />

              <h4 className="mt-3 text-center text-gray-700 font-medium">{value.text}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="px-12 py-16 bg-white mt-20">
        <h2 className="text-3xl font-semibold text-center text-gray-800"> Featured Products </h2>

        <p className="text-gray-500 text-center mt-2 mb-10 text-sm"> Selected highlights from our latest collection. </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featureProducts.map((value, index) => (
            <div key={index} className="group">
              <div className="rounded-xl overflow-hidden">
                <img src={value.img} alt="" className="w-full h-68 object-cover group-hover:scale-105 transition duration-300" />
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-gray-800 font-medium text-sm"> {value.text}</h4>
                  <p className="text-gray-700 text-sm font-medium">${value.price}
                  </p>
                </div>
                <button className="mt-4 w-full py-2 bg-gray-400 text-gray-700 text-xs rounded-md hover:bg-gray-300 transition"> ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="px-12 py-18 bg-gray-100">
        <div className="grid md:grid-cols-2 items-center">

          <div className="bg-gray-50 p-12 rounded-2xl">
            <h1 className="text-4xl font-semibold text-gray-800">
              Crafting Permanence in a Disposable World.
            </h1>

            <p className="text-gray-500 mt-5 text-sm leading-relaxed">
              Our design philosophy is simple: create objects that age with grace.
              We prioritize sustainable materials.
            </p>

            <Link to="/about">
              <p className="mt-6 text-xs text-[#7a5c50] cursor-pointer">READ OUR STORY →</p>
            </Link>
          </div>

          <div className="flex justify-end">
            <img src={bg1} alt="" className="w-[70%] h-[380px] object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home