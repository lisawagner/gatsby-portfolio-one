import React from 'react'
// import { Skillicons } from '../constants'

// import "../css/main.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <main className='resume-wrapper'>{children}</main>
        <Footer />
    </>
  )
}

export default Layout