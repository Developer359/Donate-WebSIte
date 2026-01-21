import React from 'react'

const Intro = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto mt-5 mb-5'>
          <div style={{ backgroundImage: "url('/Childimg.png')" }}
            className="h-80 bg-cover bg-center  w-full">
                <div className='inset-0 bg-sub w-full h-full p-10 flex justify-center items-center '>
                      <div className='justify-center items-center h-auto flex flex-col gap-4 '>
                          <h2 className='text-primary text-[20px] font-bold'>WHO WE ARE</h2>
                          <div className='flex flex-col text-primary items-center justify-center'>
                               <h2 className='text-[20px] font-bold'>Reach Beyond Hope</h2>
                               <p className='text-sm'>Founded 2019</p>
                               <p className='text-sm font-bold mt-1'>Welcome to Reach Beyond Hope</p>
                                <p className='text-[12px] text-gray-800 text-center mt-1'>I am dedicated supporting underserved 
                                    communities locally and globally, <br />
                                    <span className='text-primary font-bold'>Problem:</span> Millions of familes struggle 
                                    daily for basic needs <br />
                                     <span className='text-primary font-bold'>Solution:</span>We prioritize direct item 
                                     donations-school supplies,hygiene,and clothing <br />
                                     because we believe real change beign with meething everyday needs. <br />
                                      <span className='text-primary font-bold'>Belief:</span>Our mission is simple yet
                                      powerfull to inspire dignity,opportunity,and lasting hope.</p>
                          </div>
                      </div>
                </div>
          </div>
    </div>
  )
}

export default Intro