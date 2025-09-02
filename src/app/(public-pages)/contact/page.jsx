import Header from '@/src/components/common/Header'
import ContactForm from '@/src/components/features/contact/ContactForm'
import ContactInfo from '@/src/components/features/contact/ContactInfo'

export default function Contact () {
  return (
    <>
      <Header />
      <section className='flex flex-col justify-center items-center px-[191px] pt-[98px]'>
        <h1>Get In Touch With Us</h1>
        <p className='text-center'>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className='flex flex-row justify-center gap-[30px]'>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  )
}
