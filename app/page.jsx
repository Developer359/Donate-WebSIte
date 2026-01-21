import React from 'react'
import Header from '../app/component/Header.jsx'
import Home from './Pages/Home/page.jsx'


const page = () => {
  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center">
        <div className='h-auto w-full '>
          <Home />
        </div>
    </div>
  )
}

export default page