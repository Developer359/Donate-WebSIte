'use client'
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'

const Count = () => {
    const { items } = useContext(UserContext);
  return (
    <div className='w-full h-auto flex justify-center items-center p-8 mt-4 mb-2'>
          <div className='flex flex-wrap justify-center items-center gap-10'>
            {items.map((item) => (
                  <div key={item.id} className='flex flex-col bg-primary text-white gap-2 p-3 w-60 max-xl:w-40 items-center justify-center rounded-lg max-sm:w-60'>
                        <h1 className='text-3xl font-bold'>{item.title}</h1>
                        <div className='text-lg flex gap-2 items-center'>
                            {item.icon}
                            <p className='text-[12px]'>{item.des}</p>
                        </div>
                  </div>
            ))}
          </div>
    </div>
  )
}

export default Count