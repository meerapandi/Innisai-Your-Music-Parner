import React from 'react'
import background from '../assets/background-intro.mp4'
const Opening = () => {
  return (
    <div className='h-full bg-[#121212] flex items-center justify-center'>
        <video className='w-[75%] object-cover mix-blend-screen' src={background} preload='auto' autoPlay loop muted></video>
    </div>
  )
}

export default Opening