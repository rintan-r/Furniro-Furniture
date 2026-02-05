'use client';

export default function SliderDots ({ totalSlides, currentIndex, onDotClick }) {
  return (
    <div className='flex gap-2 mt-4'>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            currentIndex === index ? 'bg-yellow-600' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}
