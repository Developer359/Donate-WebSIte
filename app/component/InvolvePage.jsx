import React from 'react';
import Footer from './Footer';

const volunteerOptions = [
  {
    title: 'Community Support',
    description: 'Assist communities through outreach, card distribution, and on-ground support.',
    icon: 'ri-home-heart-line',
  },
  {
    title: 'Medical Assistance',
    description: 'Support clinics and health initiatives through patient care and basic assistance.',
    icon: 'ri-hand-heart-line',
  },
  {
    title: 'Event Support',
    description: 'Help organize, manage, and support community events and fundraisers.',
    icon: 'ri-calendar-check-line',
  },
  {
    title: 'Logistics & Supplies',
    description: 'Assist with sorting, packing, and distributing essential supplies.',
    icon: 'ri-box-3-line',
  },
];

export default function VolunteerSection() {
  return (
    <section className=" font-sans pb-0">
      <div className="max-w-5xl mx-auto text-center mt-15 py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight uppercase">
          Volunteer With Us
        </h2>
        <p className="mt-2 text-slate-500 text-[12px] md:text-sm mb-12">
          Give Your Time, Create Meaningful Change.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-xl:grid-cols-4 lg:grid-cols-4  gap-5 p-5 max-sm:grid-cols-1">
          {volunteerOptions.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="mb-4 text-secondary text-4xl">
                <i className={item.icon}></i>
              </div>

              <h3 className="text-sm font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-primary text-[10px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-5 p-10 pb-0 flex flex-col justify-center items-center gap-10'>
          <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight uppercase">
              Become Part Of Our Mission
          </h2>
             <div className='flex flex-wrap w-full h-auto items-center justify-center max-xl:gap-7 gap-15 pt-3 p-6'>
                <div className='flex flex-col w-auto '>
                    <div className="max-w-2xl mx-auto max-xl:w-100 h-auto w-130 max-sm:w-70">
                        <form className="max-xl:space-y-3 space-y-2">

                            <div className="flex gap-6">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full p-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B4D6D]/20 placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full p-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B4D6D]/20 placeholder:text-gray-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Enter Your Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B4D6D]/20 placeholder:text-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Message Here"
                                    className="w-full p-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B4D6D]/20 placeholder:text-gray-300 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#0B4D6D] text-white py-2 rounded-xl font-semibold hover:bg-[#083a52] transition-colors mt-2"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                 <div className='auto h-auto pl-5 max-sm:pl-0 mt-2'>
                   <img src="/Volunteerimg.png" alt=""  className='w-140 h-100 max-xl:w-100 max-sm:w-80 '/>
                </div>
            </div>
      </div>
      <div className='w-full h-auto'>
          <Footer/>
      </div>
    </section>
  );
}