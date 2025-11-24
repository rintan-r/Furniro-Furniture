// components/ui/RadioGroup.jsx
export default function RadioGroup({ label, name, options }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <p className="mb-2 font-medium">{label}</p>}
      {options.map((opt, idx) => (
        <label key={idx} className="flex items-center gap-2 mb-1">
          <input type="radio" name={name} value={opt.value} />
          {opt.label}
        </label>
      ))}
    </div>
  )
}
