import React from 'react'
import img from './group.jpg'
import { Homepage } from './Components/Homepage'
import { Login } from './Components/Login'
import { useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Teenagers } from './Components/Teenagers'
import { Mature } from './Components/Mature'
import { YoungAdult } from './Components/YoungAdult'
import ChooseAge from './Components/ChooseAge'

const App = () => {
  
  
  return (
    
   <div className='bg-rose-200'>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/teenage' element={<Teenagers/>}/>
    <Route path='/young' element={<YoungAdult/>}/>
    <Route path='/mature' element={<Mature/>}/>
    <Route path='/choose' element={<ChooseAge/>}/>
     
    </Routes>
  
  
   
    </div>
  )
}

export default App
