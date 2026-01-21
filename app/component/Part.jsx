import React from 'react'

const Part = () => {
  return (
      <div className='flex justify-center items-start w-full h-auto mt-5'>
            <div style={{ backgroundImage: "url('/LastHomeimg.jpg')" }}
                className="h-auto bg-cover bg-center  w-full ">
                <div className='inset-0 bg-gray-300 opacity-90 w-full h-full p-5  flex flex-col justify-center items-center '>
                    <div className='flex flex-col gap-5 text-primary justify-center items-start'>
                        <h1 className='text-xl font-bold'>
                            Every contribution no matter the size-creates dignity,comfort,and Hope
                        </h1>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Part