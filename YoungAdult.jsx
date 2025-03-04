import React from 'react'
import { Link } from 'react-router-dom'

export const YoungAdult = () => {
  return (
    <>
    <h1 className='text-6xl ml-120 pt-10 italic'>Join that suits you the most !</h1>
    <div className='bg-rose-200 h-screen w-full flex flex-row justify-stretch'>
      ,<div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-5 pl-10'>
      <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./postpartum.jpg")] opacity-80 '>
        </div>
      <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
      <h2 className='text-4xl bold italic'>Postpartum Support</h2>
      <p className=' italic'> This group provides support for women experiencing postpartum depression or other perinatal mood disorders. It offers online support groups, resources, and connects women to local therapists and peer counselors.</p>
      </div>
      </div>
      <div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-10 '>
      <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./fertility.jpg")] opacity-80 '>
        </div>
      <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
      <h2 className='text-4xl bold italic'>Fertility and me</h2>
      <p className=' italic'> An online community and support network for women struggling with fertility. They provide access to peer support groups, resources on treatment options, and emotional support for women trying to conceive.</p>
      </div>
      </div>
    </div>
    <div className='bg-rose-200 h-screen w-full flex flex-row justify-stretch'>
    ,<div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-5 pl-10'>
    <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./motherly.jpg")] opacity-80 '>
      </div>
    <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
    <h2 className='text-4xl bold italic'>Motherly</h2>
    <p className=' italic'>An interactive, community-driven platform that supports women through pregnancy and early motherhood. Women can find advice, connect with other mothers, and join forums on topics ranging from pregnancy nutrition to postpartum fitness.</p>
    </div>
    </div>
    <div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-8 '>
    <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./fibro.jpg")] opacity-80 '>
      </div>
    <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
    <h2 className='text-4xl bold italic'>MyFibroTeam</h2>
    <p className=' italic'> A social network and support group for women with fibromyalgia. It connects women experiencing chronic pain to share tips, support each other, and discuss ways to manage pain, fatigue, and other symptoms.</p>
    </div>
    </div>
  </div>
  </>
  )
}
