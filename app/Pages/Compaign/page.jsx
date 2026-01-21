import Compaignpage from '@/app/component/Comaignpage'
import Footer from '@/app/component/Footer'
import Header from '@/app/component/Header'
import Part from '@/app/component/Part'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-auto flex flex-col justify-center items-center overflow-hidden'>
            <div className='w-full h-auto'>
                <Header />
            </div>

            <div className="w-full h-auto flex justify-center items-center mt-7">
                <div
                    style={{ backgroundImage: "url('/Comapingimg.png')" }}
                    className="h-165 bg-cover bg-center w-full overflow-hidden flex flex-col"
                >
                    <div className="flex flex-col w-full h-full justify-end items-center pb-10 gap-3">
                        <div className="flex flex-col bg-gray-300/90 w-full h-auto p-2 justify-center items-center gap-2">
                           <h1 className='text-3xl text-primary font-bold'>OUR COMPAIGNS</h1>
                           <p className='text-sm text-black'>Every Campaigns Represent The Story Of Comprassion,Service,And Impact</p>
                        </div>
                        <div className='flex gap-3 text-sm text-white'>
                            <p>15+ Campaign </p>
                            <p>7+ Country </p>
                            <p>Hundred of Live Touches </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto mt-12'>
              <Compaignpage/>
            </div>

            <div className='w-full h-auto '>
              <Footer/>
            </div>
         </div>

)}
 export default page