import React from 'react'

export default function USP () {
  const benefits = [
    {
      icon: '/icons/trophy.svg',
      title: 'High Quality',
      subtitle: 'crafted from top materials'
    },
    {
      icon: '/icons/guarantee.svg',
      title: 'Warranty Protection',
      subtitle: 'Over 2 years'
    },
    {
      icon: '/icons/shipping.svg',
      title: 'Free Shipping',
      subtitle: 'Order over 150 $'
    },
    {
      icon: '/icons/customer-support.svg',
      title: '24 / 7 Support',
      subtitle: 'Dedicated support'
    }
  ]

  return (
    <aside className='px-[100px] py-[53px]'>
      <div className='flex flex-row gap-8 justify-between'>
        {benefits.map((item, index) => (
          <div key={index} className='flex flex-row items-center gap-[10px]'>
            <img src={item.icon} alt={item.title} className='w-12 h-12' />
            <div className='flex flex-col px-[5px]'>
              <div className='font-semibold'>{item.title}</div>
              <div className='text-gray-500 text-sm'>{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
