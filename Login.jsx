import React from 'react'
import { Link } from 'react-router-dom'
import { Homepage } from './Homepage'
import { useState } from 'react'
import { Teenagers } from './Teenagers'


export const Login = () => {
  const teen=false;
  const handleLogin = (age)=>{
if(age<=18 ){

  
  console.log("young lady")
}else if(age>18 && age<40){
  console.log("young lady")
}else{
  console.log("menopausic women")
}
  }
const [age, setAge] = useState("")

  const submithandler = (e)=>{
    e.preventDefault()
    handleLogin(age)

  }

  return (
   
    <div className=' bg-rose-200  h-screen w-full pt-60 justify-items-center'>
     
      <form onSubmit={submithandler} className='bg-rose-300 flex flex-col items-center justify-center h-4/5 w-1/2 text-5xl gap-9 border-2 rounded-2xl'>
      <h3 className='pt-4 italic'>Login/SignUp</h3>
<input className='border-2 rounded-2xl' type="email" placeholder='Enter Your Email'></input>
<input className='border-2 rounded-2xl' type="tel" placeholder='Enter Your PhoneNumber'></input>
<div className='bg-rose-400 h-20 w-100 mb-4 border-2 rounded-2xl mr-1 justify-items-center pl-19 pb-2 mb-4'><Link className='text-3xl justify-items-center italic ' to={'/choose'}>Choose Your Space</Link></div>
      </form></div>
     
    
  )
   
}
