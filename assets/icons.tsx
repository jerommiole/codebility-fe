import * as React from "react"
import { SVGProps } from "react"
export const SvgCircleAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} fill="none" {...props}>
    <circle cx={50} cy={50} r={50} fill="#8E8E8E" />
  </svg>
)

export const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#fff"
      d="M16.25 4.375h-2.166L13.02 2.778a.625.625 0 0 0-.52-.278h-5a.625.625 0 0 0-.52.278L5.915 4.375H3.75A1.875 1.875 0 0 0 1.875 6.25V15a1.875 1.875 0 0 0 1.875 1.875h12.5A1.875 1.875 0 0 0 18.125 15V6.25a1.875 1.875 0 0 0-1.875-1.875Zm-3.438 5.938a2.813 2.813 0 1 1-5.625 0 2.813 2.813 0 0 1 5.625 0Z"
    />
  </svg>
)

export const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#fff" {...props}>
    <path
      // fill="#fff"
      d="m12.658 1.342 2 2-1.524 1.525-2-2 1.524-1.525Zm-7.325 9.325h2l4.858-4.858-2-2-4.858 4.858v2Z"
    />
    <path
      // fill="#fff"
      d="M12.667 12.667H5.439c-.018 0-.036.006-.053.006-.022 0-.044-.006-.067-.006H3.333V3.333h4.565L9.231 2H3.333C2.598 2 2 2.597 2 3.333v9.334C2 13.403 2.598 14 3.333 14h9.334A1.334 1.334 0 0 0 14 12.667V6.888l-1.333 1.333v4.446Z"
    />
  </svg>
)

export const SvgEdit2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#363636" {...props}>
    <path
      fill="#363636"
      d="m12.658 1.342 2 2-1.524 1.525-2-2 1.524-1.525Zm-7.325 9.325h2l4.858-4.858-2-2-4.858 4.858v2Z"
    />
    <path
      fill="#363636"
      d="M12.667 12.667H5.439c-.018 0-.036.006-.053.006-.022 0-.044-.006-.067-.006H3.333V3.333h4.565L9.231 2H3.333C2.598 2 2 2.597 2 3.333v9.334C2 13.403 2.598 14 3.333 14h9.334A1.334 1.334 0 0 0 14 12.667V6.888l-1.333 1.333v4.446Z"
    />
  </svg>
)

export const SvgBin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} fill="none" {...props}>
    <path
      fill="#fff"
      d="M14.486 3H11V1.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V3H2.514L2.5 4.25h1.031l.628 9.813a1 1 0 0 0 .997.937h6.688a1 1 0 0 0 .998-.936l.627-9.814H14.5L14.486 3ZM6 13l-.281-8H6.75l.281 8H6Zm3 0H8V5h1v8Zm.75-10h-2.5v-.875A.125.125 0 0 1 7.375 2h2.25a.125.125 0 0 1 .125.125V3ZM11 13H9.969l.281-8h1.031L11 13Z"
    />
  </svg>
)

export const SvgPlusCircleBlue = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      stroke="#583DFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.113}
      d="M9.9 18.8c4.896 0 8.9-4.004 8.9-8.9 0-4.895-4.004-8.9-8.9-8.9C5.005 1 1 5.005 1 9.9c0 4.896 4.005 8.9 8.9 8.9ZM6.34 9.9h7.12M9.9 13.46V6.34"
    />
  </svg>
)

export const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="h-6 w-6"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
)

export const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="h-6 w-6"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    />
  </svg>
)

export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <rect width={15} height={15} x={0.5} y={0.5} stroke="#8E8E8E" rx={1.5} />
    <rect width={10} height={10} x={3} y={3} fill="#9747FF" rx={0.5} />
  </svg>
)

export const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#02FFE2"
        d="M7.321.184A.624.624 0 0 0 6.44.181a.626.626 0 0 0-.14.222c-.52 1.083-1.092 1.694-1.814 2.055-.81.4-1.739.677-3.237.677a.628.628 0 0 0-.611.746.625.625 0 0 0 .17.32l2.025 2.023L0 10l3.776-2.831L5.8 9.192a.609.609 0 0 0 .203.135.62.62 0 0 0 .758-.229.622.622 0 0 0 .105-.346c0-1.498.277-2.427.676-3.224.36-.722.971-1.293 2.056-1.812A.614.614 0 0 0 10 3.133a.624.624 0 0 0-.184-.44L7.321.184Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h10v10H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const SvgMore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={5} fill="none" {...props}>
    <circle cx={2.5} cy={2.5} r={2.5} fill="#6A78F2" />
    <circle cx={10.5} cy={2.5} r={2.5} fill="#6A78F2" />
    <circle cx={18.5} cy={2.5} r={2.5} fill="#6A78F2" />
  </svg>
)

export const SvgPriority = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#FFC107"
        d="m7.066 14.933-6-6a1.328 1.328 0 0 1 0-1.9l6-6a1.328 1.328 0 0 1 1.9 0l6 6a1.328 1.328 0 0 1 0 1.9l-6 6c-.533.534-1.4.534-1.9 0Z"
      />
      <path
        fill="#37474F"
        d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM10.667 8.667a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM5.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#FDC101"
        d="m7.066 14.933-6-6a1.328 1.328 0 0 1 0-1.9l6-6a1.328 1.328 0 0 1 1.9 0l6 6a1.328 1.328 0 0 1 0 1.9l-6 6c-.533.534-1.4.534-1.9 0Z"
      />
      <path
        fill="#0A0A0A"
        d="M7.2 10.9c0-.1.034-.2.067-.3.033-.1.1-.166.167-.233A.726.726 0 0 1 7.7 10.2c.1-.033.2-.066.334-.066.133 0 .233.033.333.066.1.034.2.1.267.167.066.066.133.133.166.233.034.1.067.2.067.3 0 .1-.033.2-.067.3-.033.1-.1.167-.166.234a.726.726 0 0 1-.267.166c-.1.034-.2.067-.333.067-.134 0-.234-.034-.334-.067s-.166-.1-.266-.166c-.067-.067-.134-.134-.167-.234s-.067-.166-.067-.3Zm1.4-1.533H7.4l-.166-5.034h1.533L8.6 9.367Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
