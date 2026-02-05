// components/ui/SelectInput.jsx
export default function SelectInput({ label, name, options }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <select
        name={name}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
