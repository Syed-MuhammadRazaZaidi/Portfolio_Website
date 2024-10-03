import React from 'react'

const About = () => {
  return (
    <div id='About'>
        <section className="text-gray-600 body-font bg-slate-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
   
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
        About Me
        <div className='w-[11rem] h-2 bg-orange-500 mt-2 leading-relaxed'></div>
      </h1>
      <p className="mt-8 leading-relaxed">
      Hello, I'm <b>Syed M. Raza</b>, a seasoned website developer with a passion for delivering high-quality, custom solutions that exceed client expectations. With expertise in Next.js, I create responsive, scalable, and secure websites that drive results. Browse my portfolio to see how I can help transform your online presence.
      </p>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default About