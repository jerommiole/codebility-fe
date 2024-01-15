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
