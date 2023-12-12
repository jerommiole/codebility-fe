import React from "react"

const HamburgSVG = ({ className = "", ...props }) => {
  return (
    <div className={className}>
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H4M17 1H8M17 11H14M1 11H10M1 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default HamburgSVG
