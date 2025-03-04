import React from 'react'

export const Mature = () => {
  return (
    <>
    <h1 className='text-6xl ml-120 pt-10 italic'>Join that suits you the most !</h1>
    <div className='bg-rose-200 h-screen w-full flex flex-row justify-stretch'>
      ,<div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-5 pl-10'>
      <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./menopause.jpg")] opacity-80 '>
        </div>
      <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
      <h2 className='text-4xl bold italic'>The Menopause Circle</h2>
      <p className=' italic'> A community focused on menopause health and wellness. This group provides expert advice, online support groups, and a wealth of resources on everything from nutrition to coping with menopause symptoms.</p>
     </div>
      </div>
      <div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-10 '>
      <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./bone.jpg")] opacity-80 '>
        </div>
      <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
      <h2 className='text-4xl bold italic'>Osteoporosis Foundation</h2>
      <p className=' italic'>  A community-focused on bone health, offering resources, events, and peer support for women navigating bone density loss and osteoporosis prevention. It also provides information about lifestyle changes like diet and exercise.</p>
      </div>
      </div>
    </div>
    <div className='bg-rose-200 h-screen w-full flex flex-row justify-stretch'>
    ,<div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-5 pl-10'>
    <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./heart.jpg")] opacity-80 '>
      </div>
    <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
    <h2 className='text-4xl bold italic'>Go Red for Women</h2>
    <p className=' italic'> A national initiative focused on women’s heart health. It educates women on the importance of heart health, offers community programs, and provides support to those at risk of or living with heart disease.</p>
    </div>
    </div>
    <div className='h-screen w-100 bg-rose-200 flex flex-col gap-y-8 '>
    <div className='h-75 w-75 bg-red-500 mt-18 flex flex-col gap-y-5 bg-cover bg-[url("./memory.jpg")] opacity-80 '>
      </div>
    <div className='h-75 w-75 bg-rose-200 flex flex-col gap-y-5 pl-3'>
    <h2 className='text-4xl bold italic'>Brain and Mental Health</h2>
    <p className=' italic'>An organization dedicated to women’s brain health, including issues like anxiety, depression, and stress. MIND offers online communities,counseling services, and resources for coping with mental health challenges in midlife.
    </p>
    </div>
    </div>
  </div>
  </>
  )
}
