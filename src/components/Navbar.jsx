import {React, useRef} from 'react'
import '/src/index.css'

const Navbar = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("showNav")
    }

  return (
      <nav className='flex w-full justify-between items-center relative'>
          <div>
               <h1 className='font-bold text-xl'>AdireHouse</h1>
          </div>
          <div className='lg:flex w-[30%] justify-evenly  text-gray-500 font-semibold hidden'>
              <a href="" className='hover:text-[#B35920] duration-300'>Home</a>
              <a href="" className='hover:text-[#B35920] duration-300'>About</a>
              <a href="" className='hover:text-[#B35920] duration-300'>Shop</a>
              <a href="" className='hover:text-[#B35920] duration-300'>Contact Us</a>
          </div>
          <div className='hidden lg:flex w-[15%] space-x-6'>
              <button className='px-6 py-2 rounded-lg outline-[#B35920] outline  outline-1 text-[#B35920] hover:bg-[#b35920] hover:outline-none duration-700 hover:text-white' >Register</button>
              <button className='bg-[#B35920] px-6 py-2 rounded-lg text-white hover:bg-white hover:outline hover:outline-[#b35920] hover:outline-1 duration-700 hover:text-[#b35920]'>  Login</button>
          </div>
          <div onClick={showNavBar} className='lg:hidden block outline outline-[1px] outline-[#b35920] px-1 cursor-pointer'>
              <i className="fa-solid fa-bars text-lg text-[#b35920]"></i>
          </div>
          {/* mobile nav menu */}
          <div
          ref={navRef}
              className=" lg:hidden flex flex-col space-y-12 items-center pt-20 pb-16 fixed -right-[100vw] top-0 bg-white bg-opacity-70 backdrop-blur-xl h-[560px] w-[350px] z-[40] duration-700 ease-in-out" >
              <div onClick={showNavBar} className='lg:hidden block outline outline-[1px] outline-[#b35920] px-2 absolute top-10 right-10'>
                  <i className="fa-solid fa-xmark text-lg text-[#b35920] cursor-pointer"></i>
              </div>
           <div className='flex w-[80%] justify-evenly flex-col  space-y-16 items-center  text-gray-500 font-semibold '>
              <a href="" className='hover:text-[#B35920] duration-300'>Home</a>
              <a href="" className='hover:text-[#B35920] duration-300'>About</a>
              <a href="" className='hover:text-[#B35920] duration-300'>Shop</a>
              <a href="" className='hover:text-[#B35920] duration-300'>Contact Us</a>
              </div>
               <div className=' flex  space-x-6 items-center'>
              <button className='px-6 py-2 rounded-lg outline-[#B35920] outline  outline-1 text-[#B35920] hover:bg-[#b35920] hover:outline-none duration-700 hover:text-white' >Register</button>
              <button className='bg-[#B35920] px-6 py-2 rounded-lg text-white hover:bg-white hover:outline hover:outline-[#b35920] hover:outline-1 duration-700 hover:text-[#b35920]'>  Login</button>
          </div>
         </div>
    </nav>
  )
}



  

  export default Navbar