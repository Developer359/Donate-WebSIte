'use client'
import React, { useContext } from 'react'
import { UserContext } from '@/app/context/UserContext.jsx'
import Header from '@/app/component/Header'
import Part from '@/app/component/Part'
import Footer1 from '@/app/component/Footer1'

const page = () => {
  const {style} = useContext(UserContext)
  const s = style[0].hero;
  const i = style[0].section1;
  const t = style[0].text;

  return (
   <div className='w-full h-auto flex flex-col justify-center items-center'>
            <div className='w-full h-auto'><Header /></div>

          <div className={s.section}>
              <div style={{ backgroundImage: "url('/coatdrive-bg.png')" }} className={s.banner}>
                <div className={s.banneroverlay}>
                 <div className={s.overlay}>
                    <h1 className={s.title}>About Us</h1>
                    <p className={s.subtitle}>Serving Humanity with Compassion and Purpose</p>
                 </div>
              </div>
            </div>
           </div>

           <div className={i.section}>
             <div className={i.section1}>
                  <div className={i.section2}>
                       <div className={i.icon}><i className="ri-heart-pulse-line"></i></div>
                        <div className={i.section3}>
                          <h1 className={i.h1}>Our Passion</h1>
                          <p className={i.p}>For Service</p>
                        </div>
                  </div>
                  <div className={i.section2}>
                       <div className={i.icon}><i className="ri-focus-3-line"></i></div>
                        <div className={i.section3}>
                          <h1 className={i.h1}>Our Vision</h1>
                          <p className={i.p}>Global Impact</p>
                        </div>
                  </div>
                  <div className={i.section2}>
                       <div className={i.icon}><i className="ri-group-line"></i></div>
                        <div className={i.section3}>
                          <h1 className={i.h1}>Our Team</h1>
                          <p className={i.p}>Driven by Love</p>
                        </div>
                  </div>
             </div>
          </div>

          <div className={t.section}>
            <div className={t.section1}>
               <h1 className={t.h1}>The Story Behind Reach Beyond Hope</h1>
               <p className={t.p}>Reach Beyond Hope was founded on the belief that every individual deserves dignity, care, and a chance for a better future. What started as a small community initiative has grown into a movement dedicated to bridging the gap between need and resources. We focus on providing essential supplies, medical assistance, and educational support to underserved communities. Our journey is fueled by the incredible stories of resilience we witness every day and the collective compassion of our supporters and volunteers.</p>
            </div>
            <div className={t.section2}>
                  <img src='/img-4.png' alt="" className={t.img1}/>
                  <img src='/coat1.png' alt="" className={t.img1}/>
            </div>
          </div>
            
          <div className='w-full h-auto mt-12'><Part/></div>
          <div className='w-full h-auto'><Footer1/></div>
    </div>
  )
}
export default page