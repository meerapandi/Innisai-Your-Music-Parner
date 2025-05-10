import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const nav= useNavigate();
  return (
    <div className='w-[20%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
    <div className='bg-[#7b1fa2] h-[15%] rounded-lg flex flex-col justify-center px-3 space-y-2'>
      <div onClick={()=>nav('/')} className='flex items-center gap-3 cursor-pointer flex-wrap'>
        <img src={assets.home_icon} alt="" className="w-5 h-5" />
        <p className="text-lg font-bold">Home</p>
      </div>
      <div className="flex items-center gap-3 cursor-pointer flex-wrap">
        <img src={assets.search_icon} alt="" className="w-5 h-5" />
        <p className="text-lg font-bold">What's in your mind</p>
      </div>
    </div>
    <div className="bg-[#7b1fa2] h-[190%] rounded-lg px-3 space-y-2">
    <div className='flex items-center gap-3 cursor-pointer flex-wrap'>
        <img src={assets.stack_icon} alt="" className="mt-5 h-7 w-7" />
        <p className="text-xl font-bold mt-5">Isai Library</p>
        <div className='flex item-center gap-3'>
          <img className='w-5 mt-6 ' src={assets.arrow_icon} alt=""/>
          <img className='w-5 mt-6' src={assets.plus_icon} alt=""/>
        </div> 
        </div>   
    <div className='p-4 bg-[#8e24aa] mv-3 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
      <h1 className='font-[italic]'>Create Your IsaiHub</h1>
      <p className='font-light text-xs'>😊🎶"Yeahh We are here to help you..."</p>
    <button className='px-4 py-1.5 bg-[#f3e5f5] text-[15px] text-black rounded-full mt-4 font-[italic]'>Create Playlist</button>
    </div>
    <div className='p-4 bg-[#8e24aa] mv-3 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
      <h1 className='font-[italic]'>The Magic of Singing</h1>
      <p className='font-light text-xs'>🎼 "Some days there won’t be a song in your heart. Sing anyway."</p>
    <button className='px-4 py-1.5 bg-[#f3e5f5] text-[15px] text-black rounded-full mt-4 font-[italic]'>let's sing</button>
    </div>
    <div className='p-4 bg-[#8e24aa] mv-3 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
      <h1 className='font-[italic]'>Echo Talks...</h1>
      <p className='font-light text-xs'>🎶"Whispers of wisdom dance through the air, stories unfolding beyond time's stare..."</p>
    <button className='px-4 py-1.5 bg-[#f3e5f5] text-[15px] text-black rounded-full mt-4 font-[italic]'>Podcasts</button>
    </div>
    <div className='p-4 bg-[#8e24aa] mv-3 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
      <h1 className='font-[italic]'>Vibe Spirits</h1>
      <p className='font-light text-xs'>🎤💖"Feel the beats, let spirits rise, music lives where vibes collide."</p>
    <button className='px-4 py-1.5 bg-[#f3e5f5] text-[15px] text-black rounded-full mt-4 font-[italic]'>Artist</button>
    </div>
    <div className='p-4 bg-[#8e24aa] mv-3 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
      <h1 className='font-[italic]'></h1>
      <p className='font-light text-xs'></p>
    </div>
      </div>
  </div>
  

  )
}

export default Sidebar