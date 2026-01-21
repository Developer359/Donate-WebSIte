'use client'
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'
import { useRouter } from 'next/navigation';

const Moments = () => {
    const { items2 } = useContext(UserContext);
    const router = useRouter()
    return (
        <div className='w-full h-auto flex flex-col mt-5 mb-5 justify-center items-center gap-3'>
            <div className='flex flex-col gap-1 text-primary justify-center items-center'>
                <h1 className='text-lg font-bold'>MOMENTS THAT MATTER</h1>
                <p className='text-[11px] font-bold text-center'>REAL MOMENTS FORM OUR CAMPAING,CAPTURING COMPASSION,CONNECTION, AND CHANGE</p>
            </div>
            <div className='flex flex-wrap gap-10 mt-10 w-full justify-center items-center'>
                {items2.map((item) => (
                    <div key={item.id} className='w-150 h-auto flex gap-1 bg-white shadow-sm shadow-gray-300 rounded-lg flex-col max-xl:w-110 max-sm:w-80'>
                        <div className='grid grid-cols-2 gap-0.5 w-full'>
                            {(Array.isArray(item.img) ? item.img : [item.img]).map((src, index, allImgs) => (
                                <div
                                    key={index}
                                    className={`relative h-32 ${allImgs.length === 3 && index === 2 ? 'col-span-2 h-30' : 'col-span-1'
                                        } ${allImgs.length === 2 ? 'col-span-2 h-30' : ''
                                        }`}
                                >
                                    <img
                                        src={src}
                                        alt={item.title}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='p-4 flex flex-col gap-2 '>
                            <h2 className='text-[16px] text-primary font-bold w-40'>
                                {item.title}  </h2>
                            <p className='text-[12px] text-gray-700 w-91 max-sm:w-60'> {item.des}</p>
                            <p className='text-[9px] text-secondary'>Read more</p>
                            <button onClick={()=>{router.push(item.move)}}
                            className='mt-4 w-full text-white flex justify-center items-center p-2 text-sm rounded-lg bg-primary cursor-pointer'>
                                {item.btn}</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Moments