import React from 'react'

import "../css/main.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
        <h2>Layout Component</h2>
        <Navbar />
        <main className='resume-wrapper'>{children}</main>
        <Footer />
    </>
  )
}

export default Layout