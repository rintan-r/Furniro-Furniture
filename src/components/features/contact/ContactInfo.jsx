import Image from "next/image"

export default function ContactInfo () {
  return (
    <section className='p-6 max-w-md mx-auto space-y-8 pt-[46px] mt-[68px]'>
      {/* Address */}
      <article className='flex items-start space-x-4'>
        <Image
          src='/icons/location.svg'
          alt='User Icon'
          width={28}
          height={28}
        />
        <div>
          <h2 className='font-semibold text-lg'>Address</h2>
          <p className='text-sm text-gray-700'>
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </article>

      {/* Phone */}
      <article className='flex items-start space-x-4'>
        <Image
          src='/icons/phone.svg'
          alt='User Icon'
          width={28}
          height={28}
        />
        <div>
          <h2 className='font-semibold text-lg'>Phone</h2>
          <p className='text-sm text-gray-700'>Mobile: +(84) 546-6789</p>
          <p className='text-sm text-gray-700'>Hotline: +(84) 456-6789</p>
        </div>
      </article>

      {/* Working Time */}
      <article className='flex items-start space-x-4'>
        <Image
          src='/icons/clock.svg'
          alt='User Icon'
          width={28}
          height={28}
        />
        <div>
          <h2 className='font-semibold text-lg'>Working Time</h2>
          <p className='text-sm text-gray-700'>Monday–Friday: 9:00 – 22:00</p>
          <p className='text-sm text-gray-700'>Saturday–Sunday: 9:00 – 21:00</p>
        </div>
      </article>
    </section>
  )
}
