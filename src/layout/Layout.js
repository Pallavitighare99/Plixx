import React from 'react'
import Footer from './footer/Footer'
import MobileFooter from './footer/MobileFooter'
import Navbar from './navbar/Navbar'

function Layout({children}) {
  return (
    <>
    <div className='bg-main text-white'>
        <Navbar />
        {children}
        <Footer />
        {/*Mobile Footer */}
        <MobileFooter/>
    </div>
    </>
  )
}

export default Layout