'use client'
import React from 'react'
import HeaderClick from './HeaderClick.jsx'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  return (
    <div className="w-full z-100 h-auto p-2 pl-12 pr-12 flex justify-between items-center max-width fixed bg-white max-sm:pr-6 max-sm:pl-6">
           <div className='flex flex-col gap-0 justify-center items-center z-100'>
                <p className='text-secondary text-[10px] font-bold leading-none m-0'>Reach Beyond</p>
                <h1 className='text-primary-dark text-[27px] font-bold  leading-none m-0'>Hope</h1>
           </div>
           <div className=' cursor-pointer mt-2'>
                <HeaderClick />
           </div>
           <div onClick={()=>{router.push('/Pages/Contact')}} className='flex text-[15px] font-bold text-primary p-1.5 pl-3 pr-3 cursor-pointer border border-primary rounded-md max-sm:hidden sm:hidden md:hidden mt-2 lg:flex'>
              <p>Contact Us</p>
           </div>
    </div>
  )
}

export default Header