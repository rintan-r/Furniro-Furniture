// components/ui/Textarea.jsx
export default function Textarea({ label, name, placeholder }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 text-poppins-16-medium placeholder:text-poppins-16-regular font-medium">{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        rows="4"
        className="text-poppins-16-medium placeholder:text-poppins-16-regular border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
      />
    </div>
  )
}
