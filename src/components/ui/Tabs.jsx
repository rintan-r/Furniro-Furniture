'use client'
import { useState } from 'react'
import { cn } from '@/src/lib/utils/cn.js'

export default function Tabs ({ tabs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='w-full'>
      {/* Tab Buttons */}
      <div className='flex flex-row justify-center '>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              'px-4 py-2',
              activeIndex === i
                ? '!text-black text-poppins-24-medium'
                : 'text-poppins-24-regular !text-[#9F9F9F] hover:text-black'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className='pt-[37px] pb-9 px-[207px] text-poppins-16-regular text-[#9F9F9F]'>{tabs[activeIndex]?.content}</div>
    </div>
  )
}
