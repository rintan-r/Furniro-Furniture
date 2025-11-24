export default function ProductAdditional({ additional }) {
  if (!additional) return <p>Loading...</p>
  return (
    <pre className="text-sm bg-gray-100 p-4 rounded-lg">
      {JSON.stringify(additional, null, 2)}
    </pre>
  )
}
