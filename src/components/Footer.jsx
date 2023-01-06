import React from 'react'

const Footer = () => {
  return (
      <footer className='pt-24'>
         {/* newsletter */}
          <div className='bg-[#b35920] p-4 rounded-lg w-full h-[200px] shadow-lg shadow-[#b3592030] flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-20 mt-14'>
              <h2 className='text-white text-4xl'>Subscribe Newsletter</h2>

              <div className='bg-white rounded-lg px-4 flex items-center py-1 lg:py-4 w-full lg:w-[55%] justify-between'>
                  <input type="email"  placeholder='Enter your email' className='outline-none bg-white text-gray-400 text-sm lg:text-lg w-[70%]'/>
                  <button className='px-6 lg:px-8  whitespace-nowrap py-3 bg-[#333333] text-white rounded-lg text-xs lg:text-md'>Subscribe Now</button>
              </div>
        </div>
          <div className='flex space-y-4 lg:space-y-0 flex-col lg:flex-row justify-between mt-16'>
              <div className='text-sm flex w-full lg:w-[40%] justify-between text-[#0A142F] font-bold '>
                  <a href="#about">About Us</a>
                  <a href="#training">Training </a>
                  <a href="#explore">Explore</a>
                  <a href="#features">Features</a> 
              </div>
              <div className='space-x-5 text-2xl text-[#0A142F]'>
                  <i className="fa-brands fa-square-facebook cursor-pointer"></i>
                  <i className="fa-brands fa-square-youtube cursor-pointer"></i>
              </div>
      </div>
          <hr className='bg-gray-300 mt-8 h-[3px]' />
          <div className='flex justify-between items-center mt-10 pb-8'>
              <div>
                 <p className='text-xs text-gray-400 whitespace-nowrap'> &copy; &nbsp; 2022</p> 
              </div>
              <div>
                  <h1 className='text-2xl font-bold'>AdireHouse</h1>
              </div>
              <div className='space-x-0 lg:space-x-6 text-xs flex flex-col lg:flex-row space-y-4 lg:space-y-0'>
                  <a className='cursor-pointer'>Terms of Service</a>
                  <a className='cursor-pointer'>Privacy Policy</a>
              </div>
          </div>
      </footer>
  )
}

export default Footer