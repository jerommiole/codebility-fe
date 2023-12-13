import React from "react"

const LinkedinSVG = ({ className = "", ...props }) => {
  return (
    <div className={className}>
      <svg width="15" height="15" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.18099 2.29167C3.18087 2.53478 3.08417 2.76789 2.91218 2.93971C2.74019 3.11154 2.50698 3.208 2.26386 3.20788C2.02075 3.20775 1.78764 3.11106 1.61582 2.93907C1.444 2.76707 1.34753 2.53387 1.34766 2.29075C1.34778 2.04764 1.44447 1.81453 1.61647 1.6427C1.78846 1.47088 2.02167 1.37442 2.26478 1.37454C2.5079 1.37466 2.74101 1.47136 2.91283 1.64335C3.08465 1.81535 3.18111 2.04855 3.18099 2.29167ZM3.20849 3.88667H1.37516V9.625H3.20849V3.88667ZM6.10516 3.88667H4.28099V9.625H6.08682V6.61375C6.08682 4.93625 8.27307 4.78042 8.27307 6.61375V9.625H10.0835V5.99042C10.0835 3.1625 6.84766 3.26792 6.08682 4.65667L6.10516 3.88667Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default LinkedinSVG