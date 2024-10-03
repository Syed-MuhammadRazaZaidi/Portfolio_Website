import About from '@/Components/about'
import Contact from '@/Components/contact'
import Hero from '@/Components/hero'
import Project from '@/Components/project'
import Skills from '@/Components/skills'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default page