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
import Backpack from './assets/Backpack.jpg'
import Laptop from './assets/Laptop.webp'
import Runningshoe from './assets/Runningshoe.jpg'
import Smartwatch from './assets/Smartwatch.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

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
    { img: Backpack, text: "Backpack", price: 477, rating: 4 },
    { img: Laptop, text: "Laptop", price: 150000, rating: 5 },
    { img: Runningshoe, text: "Running Shoe", price: 699, rating: 3 },
    { img: Smartwatch, text: "Smart Watch", price: 899, rating: 4 }
  ]
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">

        <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[75vh] lg:h-screen overflow-hidden">

          <img
            src={bg}
            alt=""
            className="w-full h-full object-cover md:object-cover lg:object-cover object-[center_top]sm:object-center"/>

          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="bg-[#f4f1ee]/90 backdrop-blur-sm rounded-2xl shadow-xl p-5 sm:p-7 md:p-8 w-[90%] sm:w-[75%] md:w-[450px]" >

              <p className="text-xs sm:text-sm tracking-[4px] text-gray-500 uppercase">
                Collection 2026
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mt-4 leading-tight">
                Welcome to <br /> Our Store
              </h2>

              <p className="text-gray-600 mt-5 text-sm sm:text-base leading-relaxed">
                Curated tactile experiences for the modern minimalist.
                Every piece is a statement to quiet authority.
              </p>

              <button
                onClick={() => navigate('/product')}
                className="mt-7 bg-[#8b6b5c] text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-[#75584c] transition"
              >
                Shop Now →
              </button>

            </div>

          </div>

        </div>
        <div className="px-4 sm:px-6 md:px-10 py-12 mt-10">

          <p className="text-sm text-gray-500">BROWSE BY</p>

          <h2 className="text-2xl font-semibold mb-6">
            Curated Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {categories.map((value, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white p-4 rounded-xl hover:shadow-md transition" >
                <img
                  src={value.img}
                  alt=""
                  className="w-full h-40 object-cover rounded-lg"/>

                <h4 className="mt-3 text-center text-gray-700 font-medium">
                  {value.text}
                </h4>

              </div>
            ))}

          </div>

        </div>

      </div>
      
      <div className="px-4 sm:px-6 md:px-10 py-12 mt-10">
        <p className="text-sm text-gray-500">BROWSE BY</p>
        <h2 className="text-2xl font-semibold mb-6">Curated Categories</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((value, index) => (
            <div key={index} className="cursor-pointer bg-white p-4 rounded-xl hover:shadow-md transition">
              <img src={value.img} alt="" className="w-full h-40 object-cover rounded-lg" />

              <h4 className="mt-3 text-center text-gray-700 font-medium">{value.text}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white mt-20">

        <h2 className="text-3xl font-semibold text-center text-gray-800">Featured Products</h2>

        <p className="text-gray-500 text-center mt-2 mb-12 text-sm">
          Selected highlights from our latest collection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {featureProducts.map((value, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden" >

              <div className="relative overflow-hidden">

                <img src={value.img} alt="" className="w-full h-52 sm:h-60 md:h-64 object-cover group-hover:scale-110 transition duration-500" />

                <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">  New</span>

              </div>

              <div className="p-4">
                <h4 className="text-gray-800 font-medium text-sm mb-1"> {value.text} </h4>

                <div className="flex text-yellow-400 text-xs mb-2">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                </div>
                <p className="text-gray-900 font-semibold"> ${value.price}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
      
      <div className="px-4 sm:px-6 md:px-12 py-12 md:py-18 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
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
           
            <img src={bg1} alt="" className="w-full md:w-[70%] h-[250px] sm:h-[320px] md:h-[380px] object-cover rounded-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-700 px-4 sm:px-6 md:px-10 py-12 mt-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">MyStore</h2>
            <p className="text-sm leading-relaxed">
              Your one-stop destination for fashion, electronics, and everyday essentials.
              Shop smart, live better.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">Shop</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Living</li>
              <li>Beauty</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
                <FaTwitter />
              </div>
              <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
                <FaInstagram />
              </div>
              <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm">
          © 2026 MyStore. All rights reserved.
        </div>

      </div>
    </div>


  )
}

export default Home