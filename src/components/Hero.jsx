import React from 'react'
import img1 from '../assets/Vector(10).png'
const Hero = () => {
  return (
      <div id='about' className=''>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
               {/* Left section */}
          <div className='w-full lg:w-[34%] pt-24 '>
              <p className='font-semibold text-gray-500'>New Collections &nbsp; <i className="fa-solid fa-bahai text-[#FCEA2B]"></i></p>
              <h2 className='text-4xl font-bold leading-relaxed text-[#3D3D3D]'>Elegance with Colors and <span className='text-[#B35920] underline-norm '>Culture</span>. </h2>
              <p className='text-gray-500 text-md mt-8'>We design beautiful patterns  according to the needs of our users where splash of colours meets luxury and comfort to become the piece with the best quality.</p>
              <div className='flex space-x-4 mt-8'>
                  <button className='px-6 py-2 whitespace-nowrap bg-[#333333] text-sm lg:text-md rounded-lg text-white group ease-in-out hover:text-[#333333] hover:bg-white duration-700  hover:outline hover:outline-[#333333] hover:outline-1'>Shop Now &nbsp; <i className="fa-solid fa-bag-shopping group-hover:text-[#333333] duration-700"></i></button>
                  <button className='px-6 py-2 whitespace-nowrap rounded-lg text-sm lg:text-md hover:bg-[#B35920] duration-700 hover:text-white group ease-in-out'><i className="fa-solid fa-circle-play text-[#B35920] group-hover:text-white  duration-700"></i> &nbsp;View Gallery</button>
              </div>
              <div className='relative mt-16 flex items-center space-x-4 lg:space-x-12 py-1'>
                  <div className='space-y-4'>
                      <p className='text-gray-400 text-xs font-bold'>Limited Stock</p>
                      <div className='flex items-center space-x-5'>
                           <p className='text-gray-500'><span className='text-3xl text-[#B35920]'>40</span>/100</p><p className='mt-2 whitespace-nowrap'>Sold Out</p>
                      </div>
                     
                  </div>
                  <div className='relative mt-4'>
                      <img src={img1} alt="" className='animate-bounce' />
                 <p className='text-xs absolute  top-2 -right-5 lg:-right-8 transform -rotate-[30deg]'>Hurry up!</p>
                  </div>

              </div>
          </div>
          {/* right side */}
          <div className='w-full lg:w-[45%] flex space-x-6 mt-24'>
              <div >
               <img className='hover:scale-[1.05] duration-700' src='/src/assets/Frame 846.png'/>
              </div>
              <div  className = 'flex flex-col space-y-6'>
                  <img  className='hover:scale-[1.05] duration-700' src="/src/assets/Frame 847.png" alt="" />
                  <img  className='hover:scale-[1.05] duration-700' src="/src/assets/Group 5484.png" alt="" />
              </div>
          </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:items-start items-center justify-between space-y-10 lg:space-y-0  mt-24 pb-8'>
              <h2 className='text-4xl font-semibold mr-8 lg:mr-20 hidden lg:block'>Why  <br /> Choose Us :</h2>
              <h2 className='text-4xl font-semibold mr-8 lg:mr-20 lg:hidden block'>Why  Choose Us :</h2>
              <div className='flex flex-col space-y-4 w-full lg:w-[17%]'>
                  <h2 className='text-2xl lg:text-xl font-semibold'>Luxury Quality</h2>
                  <p className= "text-lg lg:text-xs text-gray-400 ">Our wears are made with the highest quality fabrics and colors. </p>
              </div>
              <div className='flex flex-col space-y-4 w-full lg:w-[17%]'>
                  <h2 className='text-2xl lg:text-xl font-semibold'>Hand-Dyed Fabric</h2>
                  <p className="text-lg lg:text-xs text-gray-400">We offer quality pieces that are carefully made with hands to satisfy our customer’s pattern choice.</p>
              </div>
              <div className='flex flex-col space-y-4 w-full lg:w-[17%]'>
                  <h2 className='text-2xl lg:text-xl font-semibold'>Affordable Price</h2>
                  <p className="text-lg lg:text-xs text-gray-400">Our pieces ranging from T-shirts, Bags, Slides, Trending female wears are all affordable to all.</p>
              </div>
       </div>
    </div>
  )
}

export default Hero