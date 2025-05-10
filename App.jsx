
import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Opening from './components/Opening'
function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setSplashVisible(false);
    },7570)
    return ()=> clearTimeout(timer)
  },[])
  return (
   <>
   {isSplashVisible && <Opening/>}
   <Home/>
   </>
  )
}

export default App