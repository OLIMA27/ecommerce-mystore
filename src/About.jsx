// import React from 'react'

// function About() {
//   return (
//     <div>
//       <h1>about</h1>
//     </div>
//   )
// }

// export default About

import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f8f5f2] text-[#2e2e2e] bg-gray-100">

      {/* HERO SECTION */}
      <div className="px-10 py-28 flex flex-col items-center text-center">
        
        <p className="text-sm tracking-widest text-gray-500 mb-4">
          ABOUT US
        </p>

        <h1 className="text-5xl md:text-6xl font-light leading-tight max-w-3xl">
          Designed for simplicity. <br /> Built for everyday living.
        </h1>

        <p className="mt-6 max-w-xl text-gray-500 leading-relaxed">
          We create modern, minimal products that bring calm, comfort, 
          and elegance into your space.
        </p>

      </div>

      {/* SPLIT SECTION */}
      <div className="px-10 py-20 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT TEXT */}
        <div className="flex-1">
          <h2 className="text-3xl font-medium mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our journey started with a simple idea — to design products that
            feel as good as they look. Every piece is crafted with attention
            to detail and a deep understanding of modern living.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We believe in clean design, quality materials, and creating
            experiences that last.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt=""
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>

      {/* VALUES SECTION */}
      <div className="px-10 py-20 text-center">

        <h2 className="text-3xl font-medium mb-12">
          What We Stand For
        </h2>

        <div className="flex flex-wrap justify-center gap-16">

          <div>
            <h3 className="text-xl mb-2">Minimal Design</h3>
            <p className="text-gray-500 text-sm">
              Clean and timeless aesthetics
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Quality First</h3>
            <p className="text-gray-500 text-sm">
              Crafted with premium materials
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Sustainable</h3>
            <p className="text-gray-500 text-sm">
              Designed with responsibility
            </p>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="px-10 py-24 text-center">
        
        <h2 className="text-3xl mb-6">
          Explore Our Collection
        </h2>

        <button 
          onClick={() => navigate('/product')}
          className="px-8 py-3 bg-[#7a5c50] text-white rounded-full hover:bg-[#5c433a] transition"
        >
          Shop Now →
        </button>

      </div>

    </div>
  )
}

export default About