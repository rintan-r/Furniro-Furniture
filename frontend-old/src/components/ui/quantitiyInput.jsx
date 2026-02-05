import { useState } from "react";

export default function QuantityInput({
  value,
  onChange,
  min = 1,
  max = 99,
  className = "",
}) {
  const [internalValue, setInternalValue] = useState(value ?? min);
  const quantity = value ?? internalValue;

  const handleChange = (newVal) => {
    const clamped = Math.max(min, Math.min(max, newVal));
    setInternalValue(clamped);
    onChange?.(clamped); // hanya panggil kalau prop ada
  };

  return (
    <div
      className={`w-max py-5 pl-[15px] pr-3 flex items-center border border-gray-300 rounded-lg overflow-hidden ${className}`}
    >
      <button
        type="button"
        onClick={() => handleChange(quantity - 1)}
        className="text-lg font-bold hover:bg-gray-100"
      >
        −
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => handleChange(parseInt(e.target.value) || min)}
        className="mx-[35px] text-poppins-16-medium text-center outline-none w-[37px]"
      />
      <button
        type="button"
        onClick={() => handleChange(quantity + 1)}
        className="text-lg font-bold hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}
