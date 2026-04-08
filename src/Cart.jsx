import React, { useContext } from 'react'
import { productContext } from './App'

function Cart() {
  const { cart, setCart } = useContext(productContext)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  function deletecart(index) {
    const remove = cart.filter((value, i) => i !== index)
    setCart(remove)
    alert("Removed")
  }

  return (
    <div className="bg-[#f4f1ee] min-h-screen px-10 py-10">

      <h1 className="text-3xl font-semibold text-[#5a3e36] mb-8">
        Shopping Bag
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">

        <div className="flex-1">

          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm mb-4"
              >

                <div className="flex items-center gap-4">
                  <img 
                    src={item.img} 
                    alt="" 
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="font-medium text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      ₹{item.price}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => deletecart(index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        {/* RIGHT SIDE - SIMPLE TOTAL */}
        <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-md p-6 h-fit">

          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Total
          </h2>

          <div className="flex justify-between font-semibold text-xl mb-6">
            <span>Amount</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full bg-[#7a5c50] text-white py-3 rounded-lg hover:bg-[#5a3e36] transition">
            Checkout
          </button>

        </div>

      </div>
    </div>
  )
}

export default Cart