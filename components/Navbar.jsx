import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const nav = useNavigate()
  return (
    <>
    <div className='w-[100%] flex justify-between item-center font-semibold'>
        <div className='flex item-center gap-2'>
            <img onClick={()=>nav(-1)} className='w-8 by-black p-2 rounded-2x1 cursor-pointer' src={assets.arrow_left} alt=''/>
            <img onClick={()=>nav(1)} className='w-8 by-black p-2 rounded-2x1 cursor-pointer' src={assets.arrow_right} alt=''/>
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-[#f3e5f5] text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px]'>Install App</p>
          <p className='bg-[#c51162] text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>RM</p>
        </div>
    </div>
        <div className='flex items-center gap-2 mt-4'>
          <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
          <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
          <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
          <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>IsaiHub</p>

     </div>
     </>
  )
}

export default Navbar