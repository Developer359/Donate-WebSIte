'use client'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'
import { useRouter } from 'next/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

const Slider = () => {
  const { Compain2 } = useContext(UserContext)
  const router = useRouter()

  return (
    <div className='w-full h-auto flex flex-col mt-5 mb-5 justify-center items-center gap-3'>

      <div className='w-full px-10 mt-10 mb-2 max-sm:px-1'>
        <h2 className='text-xl font-bold text-primary max-sm:text-2xl'>More Campaigns</h2>
      </div>

      <div className='relative w-full px-16 max-sm:px-0'>

        <Swiper
           modules={[Navigation, Autoplay]}
             loop={true}
           autoplay={{
           delay: 3000,
           disableOnInteraction: false,
           }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          spaceBetween={28}
          slidesPerView={'auto'}
          className='mt-5 pb-5'
        >
          {Compain2.map((items) => (
            <SwiperSlide key={items.id} className='max-xl:!w-[248px] !w-[360px] max-sm:!w-82 '>
              <div className='h-auto flex gap-1 bg-white shadow-sm shadow-gray-300 rounded-lg flex-col'>
                <img
                  src={items.img}
                  alt=''
                  className='w-full h-55 object-cover rounded-t-lg'
                />
                <div className='p-4 flex flex-col gap-2'>
                  <h2 className='text-[16px] text-primary font-bold w-40'>
                    {items.title}
                  </h2>
                  <p className='text-[12px] text-gray-700 w-50 '>{items.des}</p>
                  <p className='text-[9px] text-secondary cursor-pointer'>
                    Read more
                  </p>
                  <button
                    onClick={() => router.push(items.move)}
                    className='mt-4 w-full text-white cursor-pointer p-2 text-sm rounded-lg bg-primary'
                  >
                    {items.btn}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className='swiper-prev hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-50 bg-white p-2 rounded-full shadow-lg text-primary border border-gray-100'>
          <i className='ri-arrow-left-s-line text-2xl'></i>
        </button>

        <button className='swiper-next hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-50 bg-white p-2 rounded-full shadow-lg text-primary border border-gray-100'>
          <i className='ri-arrow-right-s-line text-2xl'></i>
        </button>
      </div>

      <div className='flex w-120 mt-8 justify-center items-center'>
        <p className='text-[12px] text-gray-700 text-center font-bold max-w-80'>
          EVERY CAMPAIGN REFLECT OUR COMMITMENT TO SERVICE, COMPASSION, AND
          MEANINGFUL CHANGE ACROSS COMMUNITIES
        </p>
      </div>
    </div>
  )
}

export default Slider
