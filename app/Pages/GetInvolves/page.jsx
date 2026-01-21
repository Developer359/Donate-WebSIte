import React from 'react'
import Header from '../../component/Header'
import InvolvePage from '../../component/InvolvePage'

const page = () => {
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center gap-5'>
           <div className='w-full h-auto'>
                       <Header/>
           </div>
           <div className='w-full h-auto'>
                       <InvolvePage/>
           </div>
    </div>
  )
}

export default page