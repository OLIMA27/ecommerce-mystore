import React, { useContext } from 'react'
import { productContext } from './App'

function Cart() {

  const { cart, setCart } = useContext(productContext)

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1), 0)

  const totalItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 1), 0)

  function deletecart(index) {
    const remove = cart.filter((value, i) => i !== index)
    setCart(remove)
  }

  function increaseQty(index) {

    const updatedCart = [...cart]
    updatedCart[index].quantity =
      (updatedCart[index].quantity || 1) + 1

    setCart(updatedCart)
  }

  function decreaseQty(index) {
    const updatedCart = [...cart]
    if ((updatedCart[index].quantity || 1) > 1) {
      updatedCart[index].quantity =
        updatedCart[index].quantity - 1
    }
    setCart(updatedCart)
  }

  return (

    <div className="bg-[#f4f1ee] min-h-screen px-4 sm:px-6 md:px-10 py-6 md:py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold text-[#5a3e36] mb-8">
        Shopping Bag
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="flex-1">

          {cart.length === 0 ? (

            <div className="bg-white p-8 sm:p-10 rounded-xl shadow text-center">

              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                Your cart is empty
              </h2>

              <p className="text-gray-500 text-sm sm:text-base">
                Add products to your shopping bag
              </p>

            </div>) : (cart.map((item, index) => (

              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm mb-4">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  <div className="flex gap-4">

                    <img
                      src={item.img}
                      alt=""
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg" />
                    <div>

                      <h3 className="font-medium text-gray-800 text-base sm:text-lg">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm mb-3">
                        ₹{item.price}
                      </p>

                      <div className="flex items-center gap-3">

                        <button
                          onClick={() => decreaseQty(index)}
                          className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300">-</button>

                        <span className="font-semibold text-base sm:text-lg">
                          {item.quantity || 1}
                        </span>

                        <button
                          onClick={() => increaseQty(index)}
                          className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300">+</button>

                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deletecart(index)}
                    className="text-red-500 hover:underline text-sm self-start sm:self-center">Remove</button>

                </div>
              </div>
            ))
          )}
        </div>

        <div className="w-full lg:w-[320px] bg-white rounded-xl shadow-md p-5 sm:p-6 h-fit">

          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            Order Summary
          </h2>
          <div className="flex justify-between text-gray-600 mb-4 text-sm sm:text-base">

            <span>Total Items</span>

            <span>{totalItems}</span>
          </div>
          <hr className="mb-4" />

          <div className="flex justify-between font-bold text-lg sm:text-xl mb-6">

            <span>Total Amount</span>
            <span>₹{total}</span>

          </div>
          <button className="w-full bg-[#7a5c50] text-white py-3 rounded-lg hover:bg-[#5a3e36] transition text-sm sm:text-base">
            Checkout </button>

        </div>

      </div>

    </div>
  )
}

export default Cart