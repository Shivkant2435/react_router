import React from 'react'
import Home from './Home/Home'
import Header from './Header/Header'

import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'


const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout