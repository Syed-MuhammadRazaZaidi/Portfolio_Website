import React from 'react'

const Project = () => {
  return (
    <div id='Project'>
       <section className="text-gray-600 body-font bg-slate-100">
  <div className="container mx-auto px-5 py-24 items-start">
   
  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
        MY PROJECTS
        <div className='flex flex-col text-center w-[15rem] h-2 bg-orange-500 mt-2 leading-relaxed'></div>
      </h1>
      <p className="mt-8 lg:w-2/3  leading-relaxed text-base">
        These are some of the projects, which i worked on.
      </p>
    </div>
    <div className="mt-8 mx-20 flex flex-wrap -m-4">
      {/* Project 1 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/1.PNG"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Landing Page Project 1
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              DENTYTECH_Clone:
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <a target='_blank' href="/1.PNG">
            <p className="leading-relaxed mt-1 text-blue-500 hover:text-orange-600 underline">
              View Project
            </p>
            </a>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/2.PNG"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Landing Page Project 2
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Bent Lindberg Landing Page Clone:
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <a target='_blank' href="/2.png">
            <p className="leading-relaxed mt-1 text-blue-500 hover:text-orange-600 underline">
              View Project
            </p>
            </a>
          </div>
        </div>
      </div>
      {/* Project 3 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/3.PNG"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Landing Page Project 3
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Ilya Miskov Landing Page Clone:
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <a target='_blank' href="/3.png">
            <p className="leading-relaxed mt-1 text-blue-500 hover:text-orange-600 underline">
              View Project
            </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Project