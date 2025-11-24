import TextInput from "@/components/ui/TextInput"
import Textarea from "@/components/ui/Textarea"
import Button from "@/components/ui/Button"

export default function ContactForm() {
  return (
    <form className="flex flex-col px-13 pt-[119px] pb-[63px] gap-[49px] w-full">
    <div className="flex flex-col gap-9">
      <TextInput label="Your Name" name="name" placeholder="John Doe" required />
      <TextInput label="Email Address" type="email" name="email" placeholder="john@email.com" required />
      <TextInput label="Subject" name="subject" placeholder="This is optional" />
      <Textarea label="Message" name="message" placeholder="Hi! I'd like to ask about..." />
    </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
