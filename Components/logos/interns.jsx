import React from "react"

const InternSVG = ({ className = "", ...props }) => {
  return (
    <div className={className}>
      <svg width="24" height="24" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.488281 7.99991L4.61328 3.87491L5.79161 5.05324L2.84495 7.99991L5.79161 10.9466L4.61328 12.1249L0.488281 7.99991ZM7.32245 15.2732L11.0608 0.323242L12.6774 0.727409L8.93995 15.6774L7.32328 15.2732H7.32245ZM14.2083 10.9466L17.1549 7.99991L14.2083 5.05324L15.3874 3.87491L19.5124 7.99991L15.3874 12.1249L14.2083 10.9466Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default InternSVG
