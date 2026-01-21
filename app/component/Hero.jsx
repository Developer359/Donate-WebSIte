import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center mt-5">
      <div 
        style={{ backgroundImage: "url('/hero.png')" }}
        className="h-125 md:h-120 bg-cover bg-center w-full overflow-hidden"
      >

        <div className='inset-0 bg-black/30 w-full h-full'>   
          <div className='w-full md:w-1/2 h-full bg-hero bg-opacity-80 flex flex-col justify-center items-center text-white px-6 md:px-0'>
   
            <div className='max-w-md w-full flex flex-col gap-3 max-xl:ml-10 max-sm:ml-0'>
              <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
                SERVING HUMANITY WITH COMPASSION
              </h1>
              <p className='text-base md:text-[19px] font-bold text-primary-dark w-90 max-sm:w-60'>
                We Provide Food, Care And Support Families In Need
              </p>
              <div className='mt-8 md:mt-12 flex flex-wrap gap-4 items-center max-sm:mt-15'>
                <button className='bg-primary text-white text-sm font-bold py-3 px-6 rounded-lg cursor-pointer hover:bg-opacity-90 transition-all'>
                  Get Involve
                </button>
                <button className='border border-primary text-primary-dark text-sm font-bold py-3 px-6 rounded-lg cursor-pointer bg-white/10 hover:bg-white/20 transition-all'>
                  Become a Volunteer
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero