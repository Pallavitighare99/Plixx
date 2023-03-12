import React from 'react';
import Layout from './../layout/Layout';
import Head from '../components/Head';
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi';

function SubscriptionPage() {
  const monthlyPlan = {
    name: 'Monthly Plan',
    price: '₹99 / month',
    benefits: [
      'Access to all premium features for 30 days',
      '24/7 customer support',
    ],
  };

  const yearlyPlan = {
    name: 'Yearly Plan',
    price: '₹499 / year',
    benefits: [
      'Access to all premium features for 365 days',
      '24/7 customer support',
    ],
  };

  return (
    <Layout>
      <div className='min-h-screen container mx-auto px-2 my-6'>
        <Head title='Subscribe to our service' />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-8 pt-10'>
          <div className='max-w-xs border border-gray-300 rounded-lg shadow-md overflow-hidden text-sm'>
            <div className='bg-subMain py-2 px-4'>
              <h2 className='text-md font-bold'>{monthlyPlan.name}</h2>
              <p className='text-sm font-bold my-2'>{monthlyPlan.price}</p>
            </div>
            <div className='p-4'>
              <ul className='list-disc list-inside my-2'>
                {monthlyPlan.benefits.map((benefit) => (
                  <li key={benefit} className='my-2 text-gray-600'>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className='bg-blue-500 text-white py-2 px-3 rounded-lg text-sm'>
                Subscribe
              </button>
            </div>
          </div>
          <div className='max-w-xs border border-gray-300 rounded-lg shadow-md overflow-hidden text-sm'>
            <div className='bg-subMain py-2 px-4'>
              <h2 className='text-md font-bold'>{yearlyPlan.name}</h2>
              <p className='text-sm font-bold my-2'>{yearlyPlan.price}</p>
            </div>
            <div className='p-4'>
              <ul className='list-disc list-inside my-2'>
                {yearlyPlan.benefits.map((benefit) => (
                  <li key={benefit} className='my-2 text-gray-600'>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className='bg-blue-500 text-white py-2 px-3 rounded-lg text-sm'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SubscriptionPage;
