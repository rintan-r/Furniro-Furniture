import Image from 'next/image'

export default function ProductToolbar () {
  return (
    <section className='flex flex-row justify-between pl-[98px] pr-[100px] pt-[22px] pb-[23px] bg-[#F9F1E7]'>
      <div className='flex flex-row'>
        <button className='flex flex-row gap-3 items-center text-poppins-20-regular'>
          <Image src='./icons/filter.svg' width={25} height={25} alt='' />
          Filter
        </button>
        <button className='ml-[23px]'>
          <Image src='./icons/grid-round.svg' width={25} height={25} alt='' />
        </button>
        <button className='ml-6'>
          <Image src='./icons/view-list.svg' width={25} height={25} alt='' />
        </button>
        <div className='flex ml-[30px] items-center text-poppins-16-regular'>
          Showing 1–16 of 32 results
        </div>
      </div>

      <div className='flex flex-row gap-4 items-center text-poppins-20-regular'>
        <label className='flex items-center gap-[17px]'>
          <span>Show</span>
          <input
            type='number'
            placeholder='16'
            className='w-[55px] h-[55px] flex bg-white text-center'
          />
        </label>

        <label className='flex items-center gap-[17px]'>
          <span>Sort by</span>
          <select
            defaultValue='Default'
            className='w-[188px] h-[55px] pl-[30px] pr-[30px] items-center bg-white appearance-none text-[#9F9F9F]'
          >
            <option className='text-poppins-16-light'>Default</option>
            <option className='pr-[30px] text-poppins-16-light'>Price: Low to High</option>
            <option className='pr-[30px] text-poppins-16-light'>Price: High to Low</option>
          </select>
        </label>
      </div>
    </section>
  )
}
