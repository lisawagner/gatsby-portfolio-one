import React from 'react'
import About from '../components/About'
import Layout from "../components/Layout"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"



const index = () => {
  return (
    <Layout>
      <div>Index Page Contents:</div>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Layout>
    
  )
}

export default index