'use client'
import Contact from '@/app/component/Contact'
import Footer from '@/app/component/Footer'
import Header from '@/app/component/Header'
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '@/app/context/UserContext'


const page = () => {
    const {contact} = useContext(UserContext)
  return (
    <div className='w-full h-auto flex flex-col'>
         <div className='w-full h-auto'>
             <Header/>
         </div>
           <div className="max-w-5xl mx-auto text-center mt-20 py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight uppercase">
          Become Our Partner
        </h2>
        <p className="mt-2 text-slate-500 text-[12px] md:text-sm mb-12">
          Give Your Time, Create Meaningful Change.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-xl:grid-cols-4 lg:grid-cols-4  gap-5 p-5 max-sm:grid-cols-1">
          {contact.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="mb-4 text-secondary text-4xl">
                <i className={item.icon}></i>
              </div>

              <h3 className="text-sm font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-primary text-[10px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
         <div className='w-full h-auto '>
             <Contact/>
         </div>
         <div className='w-full h-auto '>
             <Footer/>
         </div>
    </div>
  )
}

export default page