export default function ProductReviews({ reviews }) {
  if (!reviews) return <p>Loading...</p>
  if (reviews.length === 0) return <p>No reviews yet.</p>
  return (
    <ul className="space-y-2">
      {reviews.map(r => (
        <li key={r.id} className="p-3 border rounded-lg">
          <p className="font-medium">{r.author}</p>
          <p className="text-sm text-gray-600">{r.comment}</p>
        </li>
      ))}
    </ul>
  )
}
