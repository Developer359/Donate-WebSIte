import React from 'react'
import Hero from '../../component/Hero'
import Count from '../../component/Count'
import Intro from '../../component/Intro'
import Compain from '../../component/Compain'
import Moments from '../../component/Moments'
import Involve from '../../component/Involve'
import Information from '../../component/Information'
import Contact from '../../component/Contact'
import Footer from '../../component/Footer'
import Header from '@/app/component/Header'


const Home = () => {
  return (
     <div className=' w-full h-auto flex flex-col justify-center items-center gap-5 overflow-hidden'>
           <div className='w-full h-auto'>
             <Header/>
           </div>
           <div className='w-full h-auto mt-10'>
             <Hero/>
           </div>
            <div className='w-full h-auto'>
             <Count/>
           </div>
           <div className='w-full h-auto'>
             <Intro/>
           </div>
           <div className='w-full h-auto'>
             <Compain/>
           </div>
           <div className='w-full h-auto'>
             <Moments/>
           </div>
           <div className='w-full h-auto'>
             <Involve/>
           </div>
           <div className='w-full h-auto'>
             <Information/>
           </div>
           <div className='w-full h-auto'>
             <Contact/>
           </div>
           <div className='w-full h-auto'>
             <Footer/>
           </div>
     </div>
  )
}

export default Home