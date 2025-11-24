import Header from '@/src/components/common/Header'
import USP from '@/src/components/common/USP'
import ContactForm from '@/src/components/features/contact/ContactForm'
import ContactInfo from '@/src/components/features/contact/ContactInfo'

export default function Contact () {
  return (
    <>
      <Header />
      <section className='flex flex-col justify-center items-center px-[191px] pt-[98px]'>
        <h1 className='text-poppins-36-semibold'>Get In Touch With Us</h1>
        <p className='text-center text-poppins-16-regular'>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className='flex flex-row justify-center gap-[30px]'>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <USP />
    </>
  )
}
