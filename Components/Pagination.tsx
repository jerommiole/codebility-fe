"use client"
const Pagination = () => {
  const array = Array.from({ length: 5 }, () => "")
  return (
    <div className="mt-4 hidden items-center justify-center gap-1 tablet:flex">
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-card-client">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>
      {array.map((_, i) => (
        <div
          key={`item-${i}`}
          className={`flex h-8 w-8 items-center justify-center rounded-sm bg-card-client active:bg-text2 ${
            i + 1 === 2 && "bg-text2"
          }`}
        >
          {i + 1}
        </div>
      ))}
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-card-client">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  )
}

export default Pagination
