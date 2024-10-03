"use client"
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-slate-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0">
      <img
        className="object-cover object-center m-auto rounded-3xl"
        alt="hero"
        width={300}
        src="/pp.jpg"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-2 md:pl-2 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
        Do You Need
        <br className="hidden lg:inline-block" />
        <Typewriter
          options={{
            strings: ['YOUR WEBSITE?'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className='w-[18rem] h-2 bg-orange-500 mb-4 leading-relaxed'></div>
      <p className="mb-8 leading-relaxed">
      Welcome to my digital workshop. I'm a skilled website developer dedicated to crafting innovative, user-friendly experiences that bring your vision to life. Explore my portfolio to discover how I can help elevate your online presence.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"} >
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
        <a href='/cv.pdf'>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
          Resume
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero