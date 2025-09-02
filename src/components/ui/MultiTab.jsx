'use client'
import { cn } from '@/src/lib/utils'

export default function MultiTab ({ tabs, activeTab, onTabChange }) {
  return (
    <div className='w-full'>
      {/* Tab Headers */}
      <div className='flex border-b border-gray-200'>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={cn(
              'px-4 py-2 -mb-px text-sm font-medium border-b-2',
              activeTab === tab.key
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='mt-6'>
        {tabs.find(tab => tab.key === activeTab)?.content}
      </div>
    </div>
  )
}
