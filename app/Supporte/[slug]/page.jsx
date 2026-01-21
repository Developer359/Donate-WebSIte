import React from 'react'
import { campaigns1 } from '@/app/data/CompaingData'
import { style } from '@/app/data/Theme'
import Part from '@/app/component/Part'
import Footer1 from '@/app/component/Footer1'
import Header from '@/app/component/Header'

export default async function CampaignPage({ params }) {
  
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = campaigns1[slug];
 
  const s = style[0].hero
  const i = style[0].section1
  const t = style[0].text

  return (
    <div className='w-full h-auto flex flex-col justify-center items-center'>
      <div className='w-full h-auto'>
      <Header/>
      </div>
      <div className={s.section}>
        <div
          className={s.banner}
          style={{ backgroundImage: `url(${data.banner})` }}
        >
          <div className={s.overlay}>
            <h1 className={s.title}>{data.title}</h1>
            <p className={s.subtitle}>{data.subtitle}</p>
          </div>
          <div className={s.btnstyle}>{s.btn}</div>
        </div>
      </div>

      <div className={i.section}>
        <div className={i.section1}>
          {data.highlights.map((item, idx) => (
            <div key={idx} className={i.section2}>
              <div className={i.icon}><i className={item.icon}></i></div>
              <div className={i.section3}>
                <h1 className={i.h1}>{item.title}</h1>
                <p className={i.p}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={t.section}>
        <div className={t.section1}>
          <h1 className={t.h1}>The Story Behind The Campaign</h1>
          <p className={t.p}>{data.story}</p>
        </div>
          <div className={t.section2}>
          {data.images.map((img, idx) => (
            <img key={idx} src={img} className={data.images.length === 2 ? t.img1 : t.img} alt="" />
          ))}
        </div>
      </div>

      <Part />
      <Footer1 />
    </div>
  )
}
