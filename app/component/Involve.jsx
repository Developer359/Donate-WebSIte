'use client'
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'


const Involve = () => {
    const { items3 } = useContext(UserContext);
  return (
    <div className='w-full h-auto flex flex-col mt-10 mb-5 justify-center items-center gap-3'>
        <div className='flex flex-col gap-1 text-primary justify-center items-center max-sm:w-80'>
                <h1 className='text-[20px] font-bold text-center '>GET INVOLVED . MAKE A DIFFERENCE</h1>
                <p className='text-[11px] font-bold text-center'>Your Time,Support And Genrousity Help ,Turn Campagion into Real Impact</p>
            </div>
        <div className='flex gap-12 justify-center items-center w-full p-2 mt-5 flex-wrap max-xl:gap-9'>
            {items3.map((item)=>(
             <div key={item.id} className='flex flex-col gap-5 p-3 bg-white text-primary justify-center
              items-center w-90 h-auto shadow-lg border border-gray-300 rounded-lg max-xl:w-70 max-xl:gap-4 max-sm:w-80'>
                   <div className='flex-col flex gap-1 justify-center items-center'>
                        {item.icon}
                        <h2 className='text-primary text-[20px] font-bold'>{item.title}</h2>
                   </div>
                   <p className='text-sm text-primary text-center w-70 '>{item.des}</p>
                    {item.btn}
             </div>
             ))}
        </div>
    </div>
  )
}

export default Involve