import React, { useContext, useEffect, useRef }  from 'react'
import Navbar from './Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const displayref = useRef();
    const loc = useLocation();
    const isAlbum = loc.pathname.includes ("album");
    const albumID = isAlbum?loc.pathname.slice(-1):"";
    const bgclr = albumsData[Number(albumID)].bgColor;
    
    useEffect (() =>{
      if(isAlbum)
      {
      displayref.current.style.background = `linear-gradient(${bgclr},#8e24aa)`;
      }
      else{
      displayref.current.style.background = "#121212";
      }
      })

 const {id} = useParams(); {/* it is used for storing parameter */}
  const albumDatalocal = albumsData[id];
  const {playWithId} = useContext(PlayerContext)

 
 return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8 flex col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumDatalocal.image} alt=''/>
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-4xl font-bold mb-4 md:text-6xl'>
                {albumDatalocal.name}
            </h2>
            <h4 ref={displayref} className='bg-[#7b1fa2] pl-3 font-mono'>{albumDatalocal.desc}</h4>
             <p className='mt-2'>
                <img className='w-9 inline-block' src={assets.inisai_logo} alt=''/>
             <b className='pl-2'>Inisai Your Music Partner </b> 33,62,251 likes |
             <b> 50 Songs </b>| about 2hr 35 min
             </p>
        </div>
    </div>
    <div className='grid grid-cols-4 sm-grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7]' >
        <p><b className='mr-4'>#</b> Title </p>
        <p>Album</p>
        <p className='hidden md:block'>Data Added</p>
        <p>Duration <img className='m-auto w-4 inline' src={assets.clock_icon} alt="" />
        </p>
    </div>
    <hr/>
    {/* here we can give separate data */}
    { 
        songsData.map((item,index)=>(
            <div onClick={()=> playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 item-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                    <img className='inline mr-5 w-12' src={item.image} alt=''/>
                      {item.name}
                </p>
                <p className='text-[15px]'>{albumDatalocal.name}</p>
                <p className='text-[15px]'>3 days ago</p>
                <p className='text-[15px]'>{item.duration}</p>
            </div>
        ))
    }
    </>
  )
}

export default DisplayAlbum