import { useState } from 'react'

export default function ColorSelect ({ colors = [], value, onChange, label }) {
  const [open, setOpen] = useState(false)
  const selectedColor = colors.find(c => c.hex === value) ||
    colors[0] || { name: 'None', hex: '#fff' }

  return (
    <div className='relative inline-block w-44'>
      {label && (
        <label className='block mb-1 text-sm text-gray-600'>{label}</label>
      )}

      {/* Button (current selected color) */}
      <button
        type='button'
        onClick={() => setOpen(prev => !prev)}
        className='flex items-center justify-between w-full border rounded-md px-3 py-2 bg-white hover:bg-gray-50'
      >
        <span className='flex items-center gap-2'>
          <span
            className='w-4 h-4 rounded-full border'
            style={{ backgroundColor: selectedColor.hex }}
          ></span>
          {selectedColor.name}
        </span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {/* Dropdown list */}
      {open && (
        <div className='absolute z-10 w-full mt-1 bg-white border rounded-md shadow-md'>
          {colors.map(color => (
            <button
              key={color.hex}
              onClick={() => {
                onChange?.(color.hex)
                setOpen(false)
              }}
              className='flex items-center w-full px-3 py-2 text-left hover:bg-gray-100 gap-2'
            >
              <span
                className='w-4 h-4 rounded-full border'
                style={{ backgroundColor: color.hex }}
              ></span>
              {color.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
