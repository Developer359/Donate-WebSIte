'use client'
import { createContext } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {

  const items = [
    {
      id: 1,
      title: "11,483",
      icon:<i className="text-secondary ri-hand-heart-fill"></i> ,
      des:'Items Donated'
    },
    {
      id: 2,
      title: "1,013",
      icon:<i className="text-secondary ri-community-fill"></i>,
      des:'Hours Volunteered'
    },
    {
      id: 3,
      title: "12,123",
      icon:<i className="text-secondary ri-funds-box-fill"></i>,
      des:'Funds donated'
    },
    {
      id: 4,
      title: "3,117",
      icon: <i className="text-secondary ri-service-fill"></i>,
      des:'Lives impacted'
    },
  ];

 const items1 = [
  {
    id: 1,
    img: '/img-1.png',
    title: 'Arlington Bob Mann Medical Clinic',
    date: '2023-2025 · 52.5 Hours',
    des: 'Providing free, quality healthcare to low-income families for over 34 years.',
    read: 'Read more',
    btn: 'Support This Clinic',
    move: '/Campaignes/Supportclinic'
  },
  {
    id: 2,
    img: '/img-2.png',
    title: 'La Hogar Dulce Orphanage Visit',
    date: 'Mexico City · 2025 · 8 Hour Visit',
    des: 'Supporting children at La Hogar Dulce Orphanage by providing essential',
    read: 'Read more',
    btn: 'Support Orphan Care',
    move: '/Campaignes/SupportOrphanCare'
  },
  {
    id: 3,
    img: '/img-3.png',
    title: 'Mission Arlington Food Pantry',
    date: 'Arlington · 2023 · 238 Volunteer Hours',
    des: 'Providing daily groceries and warm meals to families, offering hope, comfort, and ...',
    read: 'Read more',
    btn: 'Support Food Relief',
    move: '/Campaignes/SupportFoodRelief'
  },
  {
    id: 4,
    img: '/img-4.png',
    title: 'Winter Coat Drive Area',
    date: 'Texas · 2024 · 21 Volunteer Hours',
    des: 'Raising funds to provide warm winter coats to children in need at M.H. Walton Elementary.',
    read: 'Read more',
    btn: 'Support Child Care',
    move: '/Campaignes/SupportChildCare'
  },
  {
    id: 5,
    img: '/img-5.png',
    title: 'Zanzibar Village School',
    date: 'Zanzibar · 2023 · 8 Volunteer Hours',
    des: 'Supporting education in a rural Zanzibar village by providing essential school...',
    read: 'Read more',
    btn: 'Support Education',
    move: '/Campaignes/SupportEducation'
  },
  {
    id: 6,
    img: '/img-6.png',
    title: 'STEAM Night at RC Hatch',
    date: 'Uniontown, Alabama · 2020 · 15 Volunteer Hours',
    des: 'Hosting a STEAM Night to inspire middle school students through hands-on...',
    read: 'Read more',
    btn: 'Support Youth Education',
    move: '/Campaignes/SupportYouthEducation'
  }
];

const items2 = [
  {
    id: 1,
    img: ['/Mimg-1.png', '/Mimg-2.png', '/Mimg-3.png'],
    title: 'Kenya Village Care Initiative',
    des: 'Providing essential hair care and hygiene supplies to a village in Kenya to restore dignity, confidence, and a sense of care.',
    read: 'Read more',
    btn: 'Support Community Care',
    move: '/Supporte/SupportCommunityCare'
  },
  {
    id: 2,
    img: ['/Mimg-4.png', '/Mimg-5.png'],
    title: 'Community Food Bank Support',
    des: 'Supporting a community food bank to ensure families never have to face the day hungry.',
    read: 'Read more',
    btn: 'Support Food Equity',
    move: '/Supporte/SupportFoodEquity'
  },
  {
    id: 3,
    img: ['/Mimg-6.png', '/Mimg-7.png'],
    title: 'Mississippi Tornado Relief',
    des: 'Providing essential hygiene items and diapers to families affected by the Mississippi tornado, restoring comfort and dignity during crisis.',
    read: 'Read more',
    btn: 'Support Disaster Relief',
    move: '/Supporte/SupportDisasterRelief'
  },
  {
    id: 4,
    img: ['/Mimg-8.png', '/Mimg-9.png', '/Mimg-10.png'],
    title: 'Socks & Underwear Drive',
    des: 'Providing clean socks and underwear to individuals in need, helping restore comfort, confidence, and dignity through essential care.',
    read: 'Read more',
    btn: 'Support Essential Care',
    move: '/Supporte/SupportEssentialCare'
  }
];
const items3 = [
  {
    id: 1,
    icon: <i className="text-secondary text-4xl ri-hand-heart-line"></i>,
    title: 'Donate Today',
    des: 'Your Contribution Helps Provide Essential Care And Support To Communities In Need.',
    btn: <button className='bg-primary px-4 py-2 rounded-md text-white font-medium text-sm'>Donate Now</button>
  },
  {
    id: 2,
    icon: <i className="text-secondary text-4xl ri-user-voice-line"></i>,
    title: 'Volunteer With Us',
    des: 'Give Your Time And Skills To Help Create Meaningful Change On The Ground.',
    btn: <button className='border border-slate-400 px-3 py-2 rounded-md text-slate-600 font-medium text-sm'>Become a Volunteer</button>
  },
  {
    id: 3,
    icon: <i className="text-secondary text-4xl ri-share-line"></i>,
    title: 'Spread the Word',
    des: 'Help Us Reach More Hearts By Sharing Our Mission With Your Community.',
    btn: <button className='border border-slate-400 px-3 py-2 rounded-md text-slate-600 font-medium text-sm'>Share Our Work</button>
  }
];
const items5 = [
  {
    id: 1,
    icon: <i className="text-secondary text-4xl ri-medal-line"></i>,
    title: 'Student-Led with Purpose',
    des: 'We Are A Student-Led Organization Founded On The Core Values Of Compassion, Generosity, And Responsibility To Uplift Others.',
  },
  {
    id: 2,
    icon: <i className="text-secondary text-4xl ri-team-line"></i>,
    title: 'Commitment to Community',
    des: 'We Believe In The Significance Of Community Service And The Importance Of Giving Back Whenever One Is In A Position To Do So.',
  },
  {
    id: 3,
    icon: <i className="text-secondary text-4xl ri-global-line"></i>,
    title: 'Global Responsibility',
    des: 'As Global Citizens, We Recognize That Travel Is A Privilege That Carries The Responsibility To Support And Contribute To Local Communities.',
  },
  {
    id: 4,
    icon: <i className="text-secondary text-4xl ri-group-line"></i>,
    title: 'Youth-Driven Change',
    des: 'Our Mission Is Rooted In The Belief That Meaningful Change Begins With Young People Actively Engaging In Service.',
  }
];

const Compain1 = [
{
    id: 1,
    img: '/img-1.png',
    title: 'Arlington Bob Mann Medical Clinic',
    date: '2023-2025 · 52.5 Hours',
    des: 'Providing free, quality healthcare to low-income families for over 34 years.',
    read: 'Read more',
    btn: 'Support This Clinic',
    move: '/Campaignes/Supportclinic'
  },
  {
    id: 2,
    img: '/img-2.png',
    title: 'La Hogar Dulce Orphanage Visit',
    date: 'Mexico City · 2025 · 8 Hour Visit',
    des: 'Supporting children at La Hogar Dulce Orphanage by providing essential',
    read: 'Read more',
    btn: 'Support Orphan Care',
    move: '/Campaignes/SupportOrphanCare'
  },
  {
    id: 3,
    img: '/img-3.png',
    title: 'Mission Arlington Food Pantry',
    date: 'Arlington · 2023 · 238 Volunteer Hours',
    des: 'Providing daily groceries and warm meals to families, offering hope, comfort, and ...',
    read: 'Read more',
    btn: 'Support Food Relief',
    move: '/Campaignes/SupportFoodRelief'
  },
];

const Compain2 = [
  {
    id: 1,
    img: '/img-1.png',
    title: 'Arlington Bob Mann Medical Clinic',
    date: '2023-2025 · 52.5 Hours',
    des: 'Providing free, quality healthcare to low-income families for over 34 years.',
    read: 'Read more',
    btn: 'Support This Clinic',
    move: '/Campaignes/Supportclinic'
  },
  {
    id: 2,
    img: '/img-2.png',
    title: 'La Hogar Dulce Orphanage Visit',
    date: 'Mexico City · 2025 · 8 Hour Visit',
    des: 'Supporting children at La Hogar Dulce Orphanage by providing essential',
    read: 'Read more',
    btn: 'Support Orphan Care',
    move: '/Campaignes/SupportOrphanCare'
  },
  {
    id: 3,
    img: '/img-3.png',
    title: 'Mission Arlington Food Pantry',
    date: 'Arlington · 2023 · 238 Volunteer Hours',
    des: 'Providing daily groceries and warm meals to families, offering hope, comfort, and ...',
    read: 'Read more',
    btn: 'Support Food Relief',
    move: '/Campaignes/SupportFoodRelief'
  },
  {
    id: 4,
    img: '/img-4.png',
    title: 'Winter Coat Drive Area',
    date: 'Texas · 2024 · 21 Volunteer Hours',
    des: 'Raising funds to provide warm winter coats to children in need at M.H. Walton Elementary.',
    read: 'Read more',
    btn: 'Support Child Care',
    move: '/Campaignes/SupportChildCare'
  },
  {
    id: 5,
    img: '/img-5.png',
    title: 'Zanzibar Village School',
    date: 'Zanzibar · 2023 · 8 Volunteer Hours',
    des: 'Supporting education in a rural Zanzibar village by providing essential school...',
    read: 'Read more',
    btn: 'Support Education',
    move: '/Campaignes/SupportEducation'
  },
  {
    id: 6,
    img: '/img-6.png',
    title: 'STEAM Night at RC Hatch',
    date: 'Uniontown, Alabama · 2020 · 15 Volunteer Hours',
    des: 'Hosting a STEAM Night to inspire middle school students through hands-on...',
    read: 'Read more',
    btn: 'Support Youth Education',
    move: '/Campaignes/SupportYouthEducation'
  }
];
const style = [
  {
    hero: {
      section: "w-full h-auto flex justify-center items-center mt-7",
      banner: "h-165 bg-cover bg-center w-full overflow-hidden gap-5 flex flex-col justify-end items-center pb-10",
      banneroverlay:'w-full h-auto inset-0 bg-black/90 justify-center items-center',
      overlay: "flex flex-col bg-gray-300/90 w-full h-auto p-4 justify-center items-center gap-2",
      title: "text-3xl text-[#134E5E] font-bold uppercase",
      subtitle: "text-sm text-black text-center font-medium",
      btn:<p className='bg-primary text-white text-sm font-bold p-2 rounded-lg cursor-pointer'>Donate Now</p>,
      btnstyle: 'flex justify-center items-center'
    },
    section1: {
      section:'w-full h-auto flex justify-center items-center p-8 mt-10 mb-2  max-sm:w-80',
      section1:'flex flex-wrap justify-center items-center gap-12',
      section2:'flex flex-col bg-primary text-white gap-2 p-3 items-center justify-center rounded-lg w-80 max-xl:w-60',
      section3:'text-lg flex flex-col gap-1 items-center',
      h1:'text-lg font-bold',
      p:'text-[12px]',
      icon:"text-3xl text-secondary"
    },
    text: {
      section:'w-full h-auto flex flex-col p-12 pt-8 gap-5  max-sm:w-105',
      section1:'flex w-full h-auto flex-col justify-start items-start gap-3 ml-2 max-sm:ml-0',
      h1:'text-2xl text-primary font-bold',
      p:'text-sm text-black w-full',
      section2:'flex flex-wrap w-full h-auto gap-5 mt-5 justify-center items-center',
      img1:'h-50 max-xl:w-111 rounded-lg object-cover w-153 max-sm:w-105',
      img:'h-50 max-xl:w-72 w-100 rounded-lg object-cover max-sm:w-105',
    }
  }
];

const contact = [
  {
    "id": 1,
    "title": "General Inquiries",
    "icon": "ri-question-answer-line",
    "description": "Have questions about our mission or how we use donations? Reach out to our support team anytime.",
    "actionText": "Contact Support"
  },
  {
    "id": 2,
    "title": "Donation Support",
    "icon": "ri-hand-coin-line",
    "description": "Need help with a transaction, tax receipts, or setting up recurring gifts? We are here to assist.",
    "actionText": "Get Help"
  },
  {
    "id": 3,
    "title": "Partner With Us",
    "icon": "ri-shake-hands-line",
    "description": "Are you a corporate entity or nonprofit looking to collaborate for a greater cause? Let’s talk.",
    "actionText": "Inquire Now"
  },
  {
    "id": 4,
    "title": "Technical Help",
    "icon": "ri-customer-service-2-line",
    "description": "Facing issues with our donation portal or website features? Report it to our technical team.",
    "actionText": "Report Issue"
  }
]

  return (
    <UserContext.Provider value={{ items, items1, items2 ,items3,items5,Compain1,
    Compain2,contact,style }}>
      {children}
    </UserContext.Provider>
  );
}
