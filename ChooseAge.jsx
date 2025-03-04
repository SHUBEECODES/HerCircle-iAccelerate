import React from 'react'
import { Link } from 'react-router-dom'

const ChooseAge = () => {
  return (
    <>
    <div className='bg-rose-200 h-2/3 w-full flex justify-around pt-10'>
        <div className='bg-red-400 h-100 w-100 rounded-full bg-cover bg-[url("./teenage.jpg")] opacity-80'></div>
        <div className='bg-green-400 h-100 w-100 rounded-full bg-cover bg-[url("./youngadult.jpg")] opacity-80'></div>
        <div className='bg-yellow-400 h-100 w-100 rounded-full bg-cover bg-[url("./mature.jpg")] opacity-80'></div>
    </div>
    <div className='w-full h-96 bg-rose-200 flex justify-around'>
   <div className='text-4xl pt-7 ml-11 italic '><Link to={'/teenage'}>Age Group 5-18</Link></div>
   <div  className='text-4xl pt-7 ml-19 italic'><Link to={'/young'}>Age Group 19-40</Link></div>
   <div className='text-4xl pt-7 italic '><Link to={'/mature'}>Age Group 40 and above</Link></div>
    </div>
    </>
  )
}

export default ChooseAge