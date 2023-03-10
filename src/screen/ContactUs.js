import React from 'react'
import Layout from './../layout/Layout'
import Head from '../components/Head'
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi'


function contactUs() {
  const contactData = [
    {
      id: 1,
      title: 'Email Us',
      info: 'Interactive grow backend ideas for cross-platform models.',
      icon: FiMail,
      contact: "pallavitighare01@gmail.com",
    },
    {
      id: 2,
      title: 'Call Us',
      info: 'Interactive grow backend ideas for cross-platform models.',
      icon: FiPhoneCall,
      contact: "+91 9644377621",
    },
    {
      id: 3,
      title: 'Location',
      info: 'At-Post Mathani, Tah. Mouda, Dist. Nagpur-441104',
      icon: FiMapPin,
      contact: "",
    },
  ]
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="Contact Us" />
        <div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
          {
            contactData.map((item) => (
              <div className='border border-border flex flex-col justify-center items-center p-10 bg-dry rounded-lg text-center' key={item.id}>
               <span className='flex flex-col justify-center items-center w-20 h-20 mb-3 rounded-full bg-main text-subMain text-2xl'>
                  <item.icon />
               </span>
                <h5 className='text-xl font-semibold mb-2'>
                  {item.title}
                </h5>
                <p className='mb-0 text-sm text-text leading-7'>
                 <a href={`mailto:${item.contact}`} className='text-blue-600'>{item.contact}</a>
                {' '}
                {item.info}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default contactUs