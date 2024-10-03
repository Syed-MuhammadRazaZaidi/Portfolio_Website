
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gray-300'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src="/logo.png" alt="Raza" height={100} width={100} className="w-[4rem]" />
      <span className="ml-3 text-xl">Syed Muhammad Raza Zaidi</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Syed Muhammad Raza Zaidi 
    
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <div className="text-gray-500 flex justify-between gap-3 text-2xl">
      <Link target='_blank' href={"https://www.youtube.com/"} className=' className="text-gray-500 gap-3 text-2xl" hover:text-red-600 text'>
      <FaYoutube />
      </Link>
      <Link target='_blank' href={"https://www.facebook.com/"} className=' className="text-gray-500 gap-3 text-2xl" hover:text-blue-600'>
      <FaFacebook />
      </Link>
      <Link target='_blank' href={"https://www.twitter.com/"} className=' className="text-gray-500 gap-3 text-2xl" hover:text-black'>
      <FaXTwitter />
      </Link>
      </div>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer

