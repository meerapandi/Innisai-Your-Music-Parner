import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const {seekBar, seekBg, play, pause, playStatus, track, time, before, after, seekBgClick } = useContext(PlayerContext)

  return (
<div className="fixed bottom-0 left-0 w-full text-xs font-serif font-bold border-t-4 border-black text-white p-3 flex justify-between items-center bg-cover bg-center"
  style={{ backgroundImage: `url(${assets.playerbackground})`, backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'darken' }}>
<div className='hidden lg:flex gap-4 '>
    <img className='w-12 ' src={track.image} alt=''/>
    <div>
        <p className='mt-3 '>{track.name}</p>
        <p className='mt-3 '>{track.desc.slice(0,16)+'...'}</p>
        
    </div>
</div>
<div className='flex flex-col items-center gap-1 ml-20'>
<div className='flex item-center gap-3 '>
        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div ref={seekBg} onClick={seekBgClick} className='w-[60vw] h-1 max-w-[500px] bg-[#ede7f6] rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-15 bg-[#7b1fa2] rounded-full'/>
             </div>
             <p>{time.totalTime.minute}:{time.totalTime.second}</p>

    </div>
    <div className='flex gap-4'>
        <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=''/>
        <img onClick={before} className='w-4 cursor-pointer' src={assets.prev_icon} alt=''/>
        {playStatus? (  
           <img 
           onClick={pause} 
           className='w-4 cursor-pointer' 
           src={assets.pause_icon} 
           alt=''
           />      
          
        ):(       
          <img onClick={play} 
          className='w-4 cursor-pointer' 
          src={assets.play_icon} 
          alt=''
          />
          )}
        <img onClick={after} className='w-4 cursor-pointer' src={assets.next_icon} alt=''/>
        <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=''/>

    </div>
    
     </div>
     <div className='hidden cursor-pointer lg:flex mb-4 items-center gap-4 opacity-75'>
  <img className='w-4' src={assets.play_icon} alt='Play'/>
  <img className='w-4' src={assets.mic_icon} alt='Mic'/>
  <img className='w-4' src={assets.queue_icon} alt='Queue'/>
  <img className='w-4' src={assets.speaker_icon} alt='Speaker'/>
  <img className='w-4' src={assets.volume_icon} alt='Volume'/>
  <div className='w-20 bg-slate-50 h-1 rounded'></div> 
  <img className='w-4' src={assets?.mini_player_icon} alt='Mini Player'/>
  <img className='w-4 ' src={assets?.zoom_icon} alt='Zoom'/>
</div>

    </div>
  )
}

export default Player