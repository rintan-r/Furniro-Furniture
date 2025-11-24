import TextInput from "@/components/ui/TextInput"
import SelectInput from "@/components/ui/SelectInput"
import Button from "@/components/ui/Button"
import RadioGroup from "@/components/ui/RadioGroup"

export default function BillingForm() {
  return (
    <form className="w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <TextInput label="First Name" name="firstName" required />
        <TextInput label="Last Name" name="lastName" required />
      </div>
      <TextInput label="Company Name (Optional)" name="company" />
      <SelectInput label="Country / Region" name="country" options={[
        { value: "us", label: "United States" },
        { value: "lk", label: "Sri Lanka" },
      ]} />
      <TextInput label="Street Address" name="address" required />
      <TextInput label="Town / City" name="city" required />
      <SelectInput label="Province" name="province" options={[
        { value: "western", label: "Western Province" },
        { value: "eastern", label: "Eastern Province" },
      ]} />
      <TextInput label="ZIP Code" name="zip" required />
      <TextInput label="Phone" type="tel" name="phone" required />
      <TextInput label="Email Address" type="email" name="email" required />
      <Textarea label="Additional Information" name="additionalInfo" />

      <RadioGroup 
        label="Payment Method"
        name="payment"
        options={[
          { value: "bank", label: "Direct Bank Transfer" },
          { value: "cod", label: "Cash On Delivery" },
        ]}
      />

      <Button type="submit">Place Order</Button>
    </form>
  )
}
