import React from 'react'
import Footer from './footer/Footer'
import MobileFooter from './footer/MobileFooter'
import Navbar from './navbar/Navbar'
import { Link } from 'react-router-dom'

function HalfLayout({ children }) {
    return (
        <>
            <div className='bg-main text-white'>
                <div className='bg-main shadow-md sticky top-0 z-20'>
                    <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center '>
                        {/*Logo*/}
                        <div className='col-span-1 lg:block hidden'>
                            <Link to="/">
                                <img src="../../images/newlogo2.png" alt='Plixx' className='w-full h-12 object-contain' />
                            </Link>
                        </div>
                    </div>
                </div>
                {children}
                <Footer />
                {/*Mobile Footer */}
                <MobileFooter />
            </div>
        </>
    )
}

export default HalfLayout