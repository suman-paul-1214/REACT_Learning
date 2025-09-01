import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> // isko dene se automatically react router dom ke trf se nesting ki ja sakti hai ,it will show the children component
    <Footer/>

    </>

  )
}

export default Layout