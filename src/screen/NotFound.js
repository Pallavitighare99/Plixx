import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6 '>
      <img className='w-full h-96   object-contain '
        src=''
        alt='404'
      />
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>
        The page you are looking for does not exist. You may have mistype URL.
      </p>
      <Link to='/' className='bg-subMain transitions flex flex-row justify-center items-center gap-4 text-white font-medium py-3 hover:text-main px-6 rounded-md'>
        <BiHomeAlt/> Back Home
      </Link>
    </div>
  )
}

export default NotFound