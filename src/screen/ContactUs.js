import React from 'react'
import Layout from './../layout/Layout'
import Head from '../components/Head'
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi'
import { InlineError } from '../components/Notifications/Error'
import { Input } from '../components/UsedInput'


function contactUs() {

  return (
    <Layout>
      <Head title="24/7 Access To All Premium Users" />
      <div className='container mx-auto px-2 my-24 flex flex-col justify-center items-center '>
        <form className='w-full 2xl:w-2/5 gap-8 p-8 sm:p-14 md:w-3/5 flex flex-col justify-center items-center bg-dry rounded-lg border border-border'>
          <h2 className='text-2xl font-bold'>Having Queries??</h2>
          <div className='w-full'>
            <Input
              label="Previous Password"
              placeholder="*******"
              type="password"
              name="oldPassword"
              bg={true}
            />

          </div>
          <div className='w-full'>
            <Input
              label=""
              placeholder="*******"
              type="password"
              name="oldPassword"
              bg={true}
            />

          </div>
          <div className='w-full'>
            <Input
              label="Previous Password"
              placeholder="*******"
              type="password"
              name="oldPassword"
              bg={true}
            />

          </div>
          <div
            type='submit'
            className='flex justify-end items-center my-4'>
            <button className='bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default contactUs