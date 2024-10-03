import React from 'react'
import { FaCheck } from "react-icons/fa";   

const Skills = () => {
  return (
    <div id='Skills'>
        <section className="text-gray-600 body-font bg-slate-100">
  <div className="container px-5 py-24 mx-auto">
  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900 ">
        MY SKILLS OVERVIEW
      </h1>
      <div className='mt-2 w-[23.5rem] h-2 bg-orange-500 mb-4 leading-relaxed'></div>
    </div>
    <div className="flex flex-wrap mx-12 mt-2">
        {/* Skiils */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[90%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>90%</p>
          </div>
        </div>
      </div>
       {/* Skiils */}
       <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[85%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>85%</p>
          </div>
        </div>
      </div>
      {/* Skiils */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript/TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[75%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>75%</p>
          </div>
        </div>
      </div>
      {/* Skiils */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full mt-[-3rem] px-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[60%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>60%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Skills