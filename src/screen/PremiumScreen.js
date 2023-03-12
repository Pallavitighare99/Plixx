import React from 'react';
import Layout from './../layout/Layout';
import Head from '../components/Head';

function SubscriptionPage() {

  const subData = [
    {
      id: 1,
      name: 'Monthly Plan',
      price: '₹99 / month',
      benefits: [
        'Access to all premium features for 30 days',
        '24/7 customer support',
      ],
    },
   
    {
      id: 2,
      name: 'Yearly Plan',
      price: '₹499 / year',
      benefits: [
        'Access to all premium features for 365 days',
        '24/7 customer support',
      ],
    },
    {
      id: 3,
      name: 'LifeTime Plan',
      price: '₹1499 / Life',
      benefits: [
        'Access to all premium features for 365 days',
        '24/7 customer support',
      ],
    },

  ]


  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="Subscribe to our service" />
        <div className='grid mg:grid-cols-1 lg:grid-cols-3 gap-6 lg:my-20 my-10 xl:gap-10'>
          {
            subData.map((item) => (
              <div className='border border-border flex flex-col justify-center items-center p-5 bg-dry rounded-lg text-center hover:bg-main' key={item.id}>
                <span className='flex flex-col justify-center items-center w-80 h-20 mb-3  bg-subMain text-white text-xl'>
                  {item.name}
                </span>
                <span className='flex flex-col justify-center items-center w-60 h-20  bg-main text-subMain text-xl'>
                  {item.price}
                </span>
                <h5 className='text-xl font-semibold mb-2'>
                  {item.title}
                </h5>
                <ul className='mb-0 text-sm text-text leading-7'>
                {item.benefits.map((benefit) => (
                  <li key={benefit} className='my-2 text-gray-600'>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* <button className='bg-subMain transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded lg:rounded-full sm:w-auto'> */}
               <button className='bg-white flex flex-row justify-center items-center gap-4 text-black p-4 rounded-lg w-full hover:bg-subMain hover:text-white'>
                Subscribe {item.name}
              </button>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}

export default SubscriptionPage;
