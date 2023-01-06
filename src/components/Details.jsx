import React from 'react'
import frame859 from '../assets/Frame859.png'
import frame860 from '../assets/Frame860.png'
import frame861 from '../assets/Frame861.png'
import frame862 from '../assets/Frame862.png'
import frame863 from '../assets/Frame863.png'

const Details = () => {
  return (
      <main className='pt-24'>
      {/* top flex */}
          <div id="features" className='flex lg:flex-row flex-col w-full justify-between space-x-16 space-y-12 lg:space-y-0'>
              {/* top-left */}
              <div className='flex flex-col space-y-6 w-full  items-center lg:w-[30%]'>
                  <div className="flex flex-col lg:flex-row space-x-0  space-y-6 lg:space-y-0 lg:space-x-6">
                      <img className='hover:scale-[1.02] duration-700' src={frame859} alt="" />
                      <img className='hover:scale-[1.02] duration-700' src={frame860} alt="" />
                  </div>
                  <div className="flex lg:flex-row flex-col space-x-0 space-y-6 lg:space-y-0 lg:space-x-6">
                      <img className='hover:scale-[1.02] duration-700' src={frame861} alt="" />
                      <img className='hover:scale-[1.02] duration-700' src={frame862} alt="" />
                  </div>
             </div>
              {/* top-right */}
              <div className='w-full lg:w-[30%] '>
                 
                  <h1 className='text-2xl font-bold'>What we offer</h1>
                  <div className='flex items-center space-x-6 mt-7'>
                     <div className='h-10 w-10 rounded-full bg-[#b35920] flex items-center justify-center text-white text-xl'>1</div> <p className='text-lg'>Adire T-shirts</p> 
                  </div>
                  <div className='flex items-center space-x-6 mt-12'>
                     <div className='h-10 w-10 rounded-full bg-[#b35920] flex items-center justify-center text-white text-xl'>2</div> <p className='text-lg'>Slides</p> 
                  </div>
                   <div className='flex items-center space-x-6 mt-12'>
                     <div className='h-10 w-10 rounded-full bg-[#b35920] flex items-center justify-center text-white text-xl'>3</div> <p className='text-lg'>Bed-spreads and Pillows</p> 
                  </div>
                   <div className='flex items-center space-x-6 mt-12'>
                     <div className='h-10 w-10 rounded-full bg-[#b35920] flex items-center justify-center text-white text-xl'>4</div> <p className='text-lg'>Adire Bags</p> 
                  </div>
                  <div className='flex items-center space-x-6 mt-12'>
                     <div className='h-10 w-10 rounded-full bg-[#b35920] flex items-center justify-center text-white text-xl'>5</div> <p className='text-lg'>Trainings</p> 
                  </div>
              </div>
          </div>
          {/* next segment after top with images */}
            <div className='mt-16 pt-16'>
              <div className='relative flex items-center'>
                  <h2 className='text-7xl absolute text-gray-200 lg:text-gray-300 font-bold -z-10'>
                      New Arrivals
                  </h2>
                  <h2 className='font-bold text-5xl z-20 text-[#333333]'>
                      New Arrivals
                  </h2>
              </div> 
              {/* shop cards */}
              <div id="explore" className='flex flex-col lg:flex-row mt-16 '>
                  <div className='cursor-pointer' >
                      <img src="/src/assets/Frame 863.png" alt="" />
                  </div>
                  <div className='cursor-pointer'>
                      <img src="/src/assets/Frame 866.png" alt="" />
                  </div>
                  <div className='cursor-pointer'>
                      <img src="/src/assets/Frame 867.png" alt="" />
                  </div>
                  <div className='cursor-pointer'>
                      <img src="/src/assets/Frame 868.png" alt="" />
                  </div>
              </div>
          </div>
          {/* join training */}
          <div id="training" className='flex flex-col lg:flex-row items-center justify-between mt-24 space-y-6 lg:space-y-0'>
              <div className="lg:w-[55%] w-full items-center">
                  <img src="/src/assets/Frame 870.png" alt="" />
              </div>
              <div className='space-y-8 w-full lg:w-[40%]'>
                  <h2 className='text-2xl'>Join Our <span className='text-[#b35920]'> Training</span> </h2>
                  <p>We train individuals who are passionate about culture and fashion. We have produced thousands of individuals from our training school.</p>
                  <button className='outline outline-[#b35920] text-[#b35920] px-6 py-2 rounded-lg outline-1 hover:bg-[#b35920] hover:text-white duration-700'>Learn More</button>
              </div>
          </div>
      </main>
  )
}

export default Details