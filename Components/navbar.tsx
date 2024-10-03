import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-300 z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo.png" alt="Raza" height={100} width={100} className="w-[4rem]" />
            <span className="ml-3 text-xl">MY PORTFOLIO WEBSITE</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 px-3 py-1 rounded hover:bg-orange-500 hover:text-white">Home</Link>
            <Link href={"#About"} className="mr-5 px-3 py-1 rounded hover:bg-orange-500 hover:text-white">About</Link>
            <Link href={"#Skills"} className="mr-5 px-3 py-1 rounded hover:bg-orange-500 hover:text-white">Skills</Link>
            <Link href={"#Project"} className="mr-5 px-3 py-1 rounded hover:bg-orange-500 hover:text-white">Projects</Link>
            <Link href={"#Contact"} className="mr-5 px-3 py-1 rounded hover:bg-orange-500 hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar