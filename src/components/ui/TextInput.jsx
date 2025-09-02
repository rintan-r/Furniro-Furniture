// components/ui/TextInput.jsx
export default function TextInput({ label, type = "text", name, placeholder, required }) {
  return (
    <div className="flex flex-col mb-4 gap-[22px]">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
      />
    </div>
  )
}
