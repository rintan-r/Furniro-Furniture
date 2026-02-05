export default function PaginationControls({
  page,
  hasNextPage,
  onPrev,
  onNext,
}) {
  return (
    <div className="flex gap-4 mt-8 items-center">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="text-poppins-14-regular">Page {page}</span>

      <button
        onClick={onNext}
        disabled={!hasNextPage}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}
