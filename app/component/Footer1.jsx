import React from 'react';

const Footer1 = () => {
  return (
    <footer className="bg-white text-primary pt-16 pb-8 px-2 w-full h-auto pl-15 pr-15 max-sm:pl-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row flex-wrap gap-20 max-sm:gap-10 justify-between">

        <div>
          <h2 className="text-[#F39C12] font-bold text-lg">Reach Beyond</h2>
          <h1 className="text-5xl font-black mb-4">HOPE</h1>
          <div className='flex flex-col justify-center mt-7'>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <i className="ri-mail-fill text-[#F39C12]"></i>
                <span>Email: Reachbeyondhope@Gmail.Com</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-phone-fill text-[#F39C12]"></i>
                <span>Call us: 817-247-7825</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-auto justify-center items-center'>
                    <div className="max-w-3xl mx-auto max-xl:w-130 w-160 h-auto max-sm:w-80">
                      <h2 className='text-primary text-lg font-bold mb-3'>Please Reach Out</h2>
                        <form className="space-y-4 ">

                            <div className="flex gap-4">
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
      </div>
    </footer>
  )
};

export default Footer1