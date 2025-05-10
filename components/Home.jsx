import React, { useContext, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import Display from './Display'
import { PlayerContext } from '../context/PlayerContext'

const Home = () => {
 const [isSplashVisible, setSplashVisible] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setSplashVisible(true);
    },7570)
    return ()=> clearTimeout(timer)
  },[])
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='h-full bg-black'>
        <div className='h-[80%] flex'>
            <Sidebar/>
            <Display/>
        </div>
        {isSplashVisible && <Player/>}
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default Home