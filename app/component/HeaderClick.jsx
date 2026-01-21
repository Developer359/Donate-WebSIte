'use client'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const HeaderClick = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const activeClass = (path) =>
    pathname === path
      ? 'bg-primary text-white'
      : 'bg-transparent text-primary'

  const handleNav = (path) => {
    router.push(path)
    setOpen(false)
  }

  return (
    <div className="relative">
      <div
        className="lg:hidden p-2 cursor-pointer text-primary z-60 relative"
        onClick={() => setOpen(!open)}
      >
        <i className={open ? 'ri-close-line text-2xl' : 'ri-menu-line text-2xl'}></i>
      </div>

      <div
        className={`
          ${open ? 'fixed' : 'hidden'} 
          inset-0 bg-white z-50 flex-col gap-4 p-4
          lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0
          lg:gap-1 max-lg:w-70 max-sm:w-50 
          text-[14px] font-medium text-primary justify-start items-start`}
      >
        <div className="flex flex-col gap-4 mt-16 lg:mt-0 lg:flex-row lg:items-center w-full lg:w-auto">
          <span
            onClick={() => handleNav('/Pages/Home')}
            className={`p-2 rounded-sm text-start lg:text-center w-full lg:w-24 cursor-pointer ${activeClass('/Pages/Home')}`}
          >
            Home
          </span>

          <span
            onClick={() => handleNav('/Pages/Compaign')}
            className={`p-2 rounded-sm text-start lg:text-center w-full lg:w-28 cursor-pointer ${activeClass('/Pages/Compaign')}`}
          >
            Our Campaign
          </span>

          <span
            onClick={() => handleNav('/Pages/GetInvolves')}
            className={`p-2 rounded-sm text-start lg:text-center w-full lg:w-28 cursor-pointer ${activeClass('/Pages/GetInvolves')}`}
          >
            Get Involved
          </span>

          <span
            onClick={() => handleNav('/Pages/Gallery')}
            className={`p-2 rounded-sm text-start lg:text-center w-full lg:w-24 cursor-pointer ${activeClass('/Pages/Gallery')}`}
          >
            Gallery
          </span>

          <span
            onClick={() => handleNav('/Pages/Contact')}
            className={`p-2 lg:hidden rounded-sm text-start lg:text-center w-full lg:w-24 cursor-pointer ${activeClass('/Pages/Contact')}`}
          >
            Contact
          </span>

          <span
            onClick={() => handleNav('/Pages/About')}
            className={`p-2 rounded-sm text-start  lg:text-center w-full lg:w-24 cursor-pointer ${activeClass('/Pages/About')}`}
          >
            About
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeaderClick