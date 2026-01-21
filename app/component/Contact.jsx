import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-auto flex flex-col mt-10 mb-5 justify-center items-center gap-3'>
            <div className='flex flex-col gap-1 text-primary justify-center items-center'>
                <h1 className='text-[21px] font-bold'>CONTACT US</h1>
                <p className='text-[11px] font-bold max-w-80 text-center'>We Love To Hare From You,Reach Out With Question ,Ideas,Or Way To Get Incolve</p>
            </div>

            <div className='flex flex-wrap w-full h-auto items-center justify-center gap-7 mt-5  p-8'>
                <div className='flex flex-col w-auto'>
                    <div className="max-w-3xl mx-auto w-150 h-auto max-xl:w-100 max-sm:w-80">
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

                <div className='auto h-auto pl-5 max-sm:pl-0'>
                   <img src="/Ceoimg.png" alt=""  className='w-140 h-100 max-xl:w-110 max-sm:w-80 '/>
                </div>
            </div>
        </div>
    )
}

export default Contact