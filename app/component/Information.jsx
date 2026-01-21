'use client'
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'

const Information = () => {
    const {items5}=useContext(UserContext)
    return (
        <div className='flex justify-center items-center w-full h-auto mt-5 mb-5 '>
            <div style={{ backgroundImage: "url('/LastHomeimg.jpg')" }}
                className="h-auto bg-cover bg-center  w-full ">
                <div className='inset-0 bg-gray-400 opacity-90 w-full h-full p-10 pb-5 flex flex-col justify-center items-center  '>
                    <div className='flex flex-col gap-1 text-primary justify-center items-center'>
                        <h1 className='text-xl font-bold text-center'>
                            WHAT MAKES REACH BEYOUND HOPE DIFFERENCE?
                        </h1>
                        <p className='text-[11px] font-bold text-center'>
                            We Are Student-Lead Organization Founded On Campassion,Generosity,And the Responsibilty To Uplift Other.
                        </p>
                    </div>

                    <div className='flex gap-5 justify-center items-center w-full p-2 mt-10  flex-wrap'>
                      {items5.map((item)=>(
                        <div key={item.id} className='flex flex-col gap-3 p-3 bg-white text-primary justify-center
                           items-center w-73 h-55 border border-gray-300 rounded-lg max-xl:w-53 max-xl:h-50 max-sm:w-80'>
                            <div className='flex-col flex gap-1 justify-center items-center'>
                                {item.icon}
                                <h2 className='text-primary text-[20px] font-bold text-center'>{item.title}</h2>
                            </div>
                            <p className='text-[13px] text-black text-center w-50  max-xl:text-[10px]'>{item.des}</p>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information