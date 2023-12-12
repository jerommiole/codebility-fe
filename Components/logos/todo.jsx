import React from "react"

const TodoSVG = ({ className = "", ...props }) => {
  return (
    <div className={className}>
      <svg width="24" height="24" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.66667 1.1665H2.33333C1.8731 1.1665 1.5 1.5396 1.5 1.99984V5.33317C1.5 5.79341 1.8731 6.1665 2.33333 6.1665H5.66667C6.1269 6.1665 6.5 5.79341 6.5 5.33317V1.99984C6.5 1.5396 6.1269 1.1665 5.66667 1.1665Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 11.1667L3.16667 12.8333L6.5 9.5M9.83333 2H16.5M9.83333 7H16.5M9.83333 12H16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default TodoSVG
