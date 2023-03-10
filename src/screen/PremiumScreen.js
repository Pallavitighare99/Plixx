import React from 'react'
import Head from '../components/Head'
import Layout from '../layout/Layout'


const PremiumScreen = () => {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="Premium Subscription" />
        <div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
          <div className='border border-border flex flex-col justify-center items-center p-10 bg-dry rounded-lg text-center' >
            <span className='flex flex-col justify-center items-center w-20 h-20 mb-3 rounded-full bg-main text-subMain text-2xl'>
              399
            </span>
            <h5 className='text-xl font-semibold mb-2'>
              Premium Plan
            </h5>
            <p className='mb-0 text-sm text-text leading-7'>
              {/* <a href="" className='text-blue-600'>Hello</a> */}
              {' '}
              Subscribe for better Use
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PremiumScreen