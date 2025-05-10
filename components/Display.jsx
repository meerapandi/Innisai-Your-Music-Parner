import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

function Display() {
const displayref = useRef();
const loc = useLocation();
const isAlbum = loc.pathname.includes ("album");
const albumID = isAlbum?loc.pathname.slice(-1):"";
const bgclr = albumsData[Number(albumID)].bgColor;

useEffect (() =>{
  if(isAlbum)
  {
  displayref.current.style.background = `linear-gradient(${bgclr},#121212)`;
  }
  else{
  displayref.current.style.background = "#121212";
  }
  })
  return (
    <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[85%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>}></Route> {/* it similar to index.html  */}
            <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
        </Routes>
    </div>
  )
}

export default Display