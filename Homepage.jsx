import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Login } from './Login'



export const Homepage = () => {
 
   return (
    <>
  <div className='w-full h-1/3 text-9xl font-serif italic justify-items-center py-15' >
  HerCircle
  <p className='text-5xl py-3'>For her , By her</p>
</div>
    <div className=' mt-5 h-200 bg-cover  bg-[url("./group.jpg")]  opacity-50'></div>

<div className='w-full h-96  text-3xl font-serif italic pt-20 pl-7'>Welcome to HerCircle, your trusted platform for connecting with a supportive and empowering health community. Whether you're navigating personal health challenges, seeking wellness resources, or looking to join a group of like-minded women, we make it easy to find and connect with others who understand. We offer a safe space for women to share experiences, exchange advice, and find groups tailored to your unique health journey. Join us today to start building connections that inspire, uplift, and support your path to well-being.</div>
    <div className=' flex justify-center pb-100'><div  className='h-15 w-100 bg-fuchsia-600 text-black items-center rounded-md text-2xl font-bold justify-center pl-33 pt-4'><Link to={'/login'}>Join Now!</Link>
      </div></div>
      </>
      
  
  )
}
