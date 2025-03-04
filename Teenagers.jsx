import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Login } from './Login'
export const Teenagers = () => {
  return (
    <>
    <h1 className='text-6xl ml-120 pt-10 italic'>Join that suits you the most !</h1>
    <div className='bg-rose-200 h-screen w-full flex flex-row justify-stretch'>
      ,<div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-5 pl-10'>
      <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./teenline.jpg")] opacity-80 '>
        </div>
      <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
      <h2 className='text-4xl bold italic'>Teen Line</h2>
      <p className=' italic'> A peer-to-peer helpline and online community that allows teens to talk about mental health struggles like anxiety, depression, and stress. It provides a safe space for discussion and support.</p>
      </div>
      </div>
      <div className='h-screen w-100 bg-rose-200 '>
      <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./girlshealth.jpg")] opacity-80 '>
        </div>
      <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
      <h2 className='text-4xl bold italic'>Girls' Health</h2>
      <p className=' italic'> A resource of Health & Human Services with information on menstrual health, sexual health, and reproductive issues. The community also encourages dialogue around normalizing discussions of menstrual cycles.</p>
      </div>
      </div>
    </div>
    <div className='bg-rose-200 h-screen w-full flex flex-row justify-stretch'>
    ,<div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-5 pl-10'>
    <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./bodypositive.jpg")] opacity-80 '>
      </div>
    <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
    <h2 className='text-4xl bold italic'>The Body Positive</h2>
    <p className=' italic'>An organization that encourages healthy body image, self-love, and acceptance. Their workshops and online communities provide resources to help girls cope with societal pressures and cultivate confidence.</p>
    </div>
    </div>
    <div className='h-screen w-100 bg-rose-200 '>
    <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./girlscan.jpg")] opacity-80 '>
      </div>
    <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
    <h2 className='text-4xl bold italic'>Girls Can</h2>
    <p className=' italic'> An empowering campaign that promotes physical activity among women of all shapes, sizes, and abilities. It provides online communities where teens can find workout inspiration, motivation, and connect with other girls focused on fitness.</p>
    </div>
    </div>
  </div>
  </>
  )
}
