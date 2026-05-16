
import React, { useContext } from 'react'
import { productContext } from './App'
import { toast } from 'react-toastify'

function Product() {

  const { productData, cart, setCart } = useContext(productContext)

  function add(item) {

    const existingProduct = cart.find(
      (product) => product.name === item.name
    )

    if (existingProduct) {

      const updatedCart = cart.map((product) =>

        product.name === item.name
          ? {
              ...product,
              quantity: (product.quantity || 1) + 1
            }
          : product
      )

      setCart(updatedCart)

    } else {

      setCart([
        ...cart,
        {
          ...item,
          quantity: 1
        }
      ])
    }

  toast.success(
  <div className="flex items-center gap-4">

    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center ml-2">

      <span className="text-[#3b3948] text-xl font-bold">
        ✓
      </span>

    </div>

    <p className="text-white text-l font-semibold">
      Product is added to cart.
    </p>

  </div>
)
  }

  return (

    <div className="bg-white min-h-screen px-4 sm:px-6 md:px-10 py-10">
      <div className="mb-12 max-w-2xl">

        <p className="text-xs tracking-[0.2em] text-gray-500 mb-3">
          SELECTED COLLECTION
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">

          Objects of{" "}

          <span className="italic font-normal text-gray-700">
            Enduring Resonance
          </span>

        </h1>

        <p className="text-gray-500 mt-4 text-sm leading-relaxed">
          A curated ensemble of tactile artifacts designed for the contemporary dwelling.
          Every piece is a study in form, materiality, and the quiet authority of earth-toned minimalism.
        </p>

      </div>
      <div className="flex flex-wrap -mx-3">

        {productData.map((value, index) => (

          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-8" >

            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-3">

              <div className="w-full h-52 sm:h-56 md:h-48 overflow-hidden rounded-lg mb-3">

                <img
                  src={value.img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"/>

              </div>
              <div>

                <h3 className="text-gray-800 text-sm font-medium mb-1">
                  {value.name}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  ₹{value.price}
                </p>

                <button
                  onClick={() => add(value)}
                  className="w-full bg-[#7a5c50] text-white py-2 rounded-md text-sm hover:bg-[#5a3e36] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product