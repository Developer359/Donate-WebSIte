'use client'
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'
import { useRouter } from 'next/navigation';
import Slider from '@/app/component/Slider'

const Compain = () => {
    const { Compain1 } = useContext(UserContext);
    const router = useRouter()

  return (
    <div className='w-full h-auto flex flex-col mt-5 mb-5 justify-center items-center gap-3 '>
         
         <div className='flex flex-col gap-1 text-primary justify-center items-center'>
               <h1 className='text-2xl font-bold'>OUR CAMPAIGNS</h1>
               <p className='text-[11px] font-bold max-sm:w-80 text-center'>EVERY CAMPAIGN REPRESENT A STORY OF COMPASSION, SERVICE, AND IMPACT</p>
         </div>

         <div className='flex flex-wrap gap-7 mt-10 w-full justify-center items-center'>
            {Compain1.map((items)=>(
               <div key={items.id} className='w-100 h-auto flex gap-1 bg-white shadow-sm shadow-gray-300 rounded-lg flex-col max-w-200 max-xl:w-70 max-sm:w-80'>
                    <div className='w-full'>
                        <img src={items.img} alt="" className='w-full h-55 object-cover rounded-t-lg'/>
                    </div>
                     <div className='p-4 flex flex-col gap-2 '>
                        <h2 className='text-[16px] text-primary font-bold w-40'>
                           {items.title}
                        </h2>
                        <p className='text-[12px] text-gray-700 w-50'>{items.des} </p>
                        <p className='text-[9px] text-secondary cursor-pointer'>Read more</p>
                        <button onClick={()=>{router.push(items.move)}} className='mt-4 w-full text-white flex justify-center items-center cursor-pointer p-2 text-sm rounded-lg bg-primary'>
                            {items.btn}
                        </button>
                     </div>
               </div>
            ))}
         </div>

         <div className='flex flex-nowrap gap-7 mt-3 w-full px-10 pb-5 max-sm:px-3'>
            <Slider/>
         </div>

    </div>
  )
}

export default Compain