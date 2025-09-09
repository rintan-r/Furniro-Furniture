// components/ui/Textarea.jsx
export default function Textarea({ label, name, placeholder }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        rows="4"
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
      />
    </div>
  )
}
