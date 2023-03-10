import React from 'react'
import Head from '../components/Head'
import Layout from './../layout/Layout'

function AboutUs() {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="About Us" />
        <div className=' xl:py-20 py-10 px-4 '>
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 cxl:gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold '>
                Welcome to our Plix
              </h3>
              <div className='mt-3 text-sm leading-8 text-text'>
                <p>You can watch Plixx through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance.
                  You can watch Plixx through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance.
                  You can watch Plixx through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance.

                </p>

              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold'>
                    10k
                  </span>
                  <h4 className='text-lg font-semibold my-2'>
                    Listed Movies
                  </h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    You can watch Plixx through any internet-connected device that offers the Netflix app.
                  </p>
                </div>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold'>
                    8k
                  </span>
                  <h4 className='text-lg font-semibold my-2'>
                    Lovely Users
                  </h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
Completely free, without registration!                  </p>
                </div>
              </div>
            </div>
<div className='mt-10 lg:mt-0'>
  <img src='/images/about3.jpg' alt='about us' className='w-full xl:block hidden h-header rounded-lg object-cover'/>
</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs