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

export const SvgExit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" {...props}>
    <path
      fill="#6A78F2"
      d="M7.09 12.59 8.5 14l5-5-5-5-1.41 1.41L9.67 8H0v2h9.67l-2.58 2.59ZM16 0H2a2 2 0 0 0-2 2v4h2V2h14v14H2v-4H0v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Z"
    />
  </svg>
)

export const SvgAttachment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="none" {...props}>
    <path
      fill="#583DFF"
      fillRule="evenodd"
      d="M8.512 1.488a1.875 1.875 0 0 0-2.65 0L1.486 5.862a1.875 1.875 0 0 0 2.65 2.652l.311-.313a.469.469 0 0 1 .665.661l-.311.313-.001.001A2.812 2.812 0 1 1 .824 5.2L5.198.825a2.812 2.812 0 0 1 3.98 3.974l-2.16 2.22A1.64 1.64 0 1 1 4.7 4.702l2.156-2.157a.469.469 0 1 1 .663.662L5.362 5.363a.703.703 0 0 0 .992.997l2.159-2.22a1.875 1.875 0 0 0 0-2.651v-.001Z"
      clipRule="evenodd"
    />
  </svg>
)

export const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="none" {...props}>
    <path
      fill="#583DFF"
      d="M4.375 7.5V2.406L2.75 4.031l-.875-.906L5 0l3.125 3.125-.875.906-1.625-1.625V7.5h-1.25ZM1.25 10c-.344 0-.638-.122-.883-.367A1.206 1.206 0 0 1 0 8.75V6.875h1.25V8.75h7.5V6.875H10V8.75c0 .344-.122.638-.367.883A1.2 1.2 0 0 1 8.75 10h-7.5Z"
    />
  </svg>
)

export const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="none" {...props}>
    <path
      fill="#fff"
      d="M9.853 9.146a.5.5 0 0 1-.707.707L5 5.707.854 9.853a.5.5 0 0 1-.707-.707L4.293 5 .147.854A.5.5 0 1 1 .854.147L5 4.293 9.146.147a.5.5 0 1 1 .707.707L5.707 5l4.146 4.146Z"
    />
  </svg>
)

export const SvgWebDesign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <path
      fill="#31AFC4"
      d="M13.238 3.414C21.303 6.558 23.059.75 23.059.75s-1.535 7.284-8.59 10.26a49.58 49.58 0 0 1-2.338.936L.553 7.05l11.578-4.116s-.276-.072 1.107.48ZM10.776 24.75 0 19.686V9.234l10.776 4.764V24.75Zm2.434 0L24 19.686V9.234l-10.79 4.764V24.75Z"
    />
  </svg>
)

export const SvgGraphicDesign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <path
      fill="#31AFC4"
      d="M5.333 19.95H8V5.55H5.333v14.4Zm5.334 4.8h2.666v-24h-2.666v24ZM0 15.15h2.667v-4.8H0v4.8Zm16 4.8h2.667V5.55H16v14.4Zm5.333-9.6v4.8H24v-4.8h-2.667Z"
    />
  </svg>
)

export const SvgCMS = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <path
      fill="#31AFC4"
      d="M9.818 4.426v9.415H7.636V4.079l.046-.152c.134-.45.491-1.217 1.16-1.885C9.535 1.346 10.576.75 12 .75c1.425 0 2.464.596 3.158 1.292.669.668 1.026 1.434 1.16 1.885l.046.152v2.602h-2.182V4.426a2.715 2.715 0 0 0-.568-.843c-.35-.352-.857-.651-1.614-.651-.757 0-1.263.299-1.614.651-.241.243-.433.53-.568.843ZM3.33 8.386h2.602v2.182H3.676c-.314.135-.6.327-.843.568-.352.35-.651.857-.651 1.614 0 .757.299 1.263.651 1.614.301.302.64.483.843.568h9.415v2.182H3.329l-.152-.046c-.45-.134-1.217-.491-1.885-1.16C.596 15.216 0 14.174 0 12.75c0-1.425.596-2.464 1.292-3.158.668-.669 1.434-1.026 1.885-1.16l.152-.046Zm7.58 0h9.761l.153.046c.45.134 1.215.491 1.886 1.16.695.692 1.291 1.734 1.291 3.158 0 1.425-.596 2.464-1.29 3.158-.67.669-1.436 1.026-1.887 1.16l-.152.046H18.07v-2.182h2.254c.314-.135.6-.327.843-.568.352-.35.651-.857.651-1.614 0-.757-.299-1.263-.651-1.614a2.715 2.715 0 0 0-.843-.568h-9.415V8.386Zm5.455 3.273v9.761l-.046.153c-.134.45-.491 1.215-1.16 1.886-.692.695-1.734 1.291-3.158 1.291-1.425 0-2.464-.596-3.158-1.29-.669-.67-1.026-1.436-1.16-1.887l-.046-.152V18.82h2.182v2.254c.085.204.266.542.568.843.35.352.857.651 1.614.651.757 0 1.263-.299 1.614-.651.241-.243.433-.53.568-.843v-9.415h2.182Z"
    />
  </svg>
)

export const SvgSkillMastery = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" {...props}>
    <path
      fill="#C108FE"
      d="m.25 12.874 5.204-6.447L6.94 8.268l-3.717 4.606L6.94 17.48l-1.486 1.842L.25 12.874Zm8.622 11.37L13.588.874l2.04.632-4.716 23.368-2.04-.632Zm8.686-6.764 3.718-4.606-3.718-4.606 1.488-1.841 5.204 6.447-5.204 6.448-1.488-1.842Z"
    />
  </svg>
)

export const SvgInnovation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" {...props}>
    <path
      fill="#02FFE2"
      d="m19.417 18.208-5.334-5.333v-4.24c1.547-.56 2.667-2.027 2.667-3.76 0-2.213-1.787-4-4-4s-4 1.787-4 4c0 1.733 1.12 3.2 2.667 3.76v4.24l-5.334 5.333H.75v6.667h6.667v-4.067l5.333-5.6 5.333 5.6v4.067h6.667v-6.667h-5.333Z"
    />
  </svg>
)

export const SvgCommunity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={18} fill="none" {...props}>
    <path
      stroke="#6A78F2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 16.625v-1.25A6.25 6.25 0 0 1 15 9.125m0 0a6.25 6.25 0 0 1 6.25 6.25v1.25M15 9.125a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm-13.75 7.5v-1.25A3.75 3.75 0 0 1 5 11.625m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm23.75 5v-1.25a3.75 3.75 0 0 0-3.75-3.75m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </svg>
)

export const SvgRealWorld = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={28} fill="none" {...props}>
    <path
      fill="#fff"
      d="M5.824 24.425h7.852v2.7H5.824v-2.7Zm10.346-8.489c1.348-1.628 2.74-3.311 2.74-6.361 0-5.21-4.11-9.45-9.16-9.45S.59 4.365.59 9.575c0 3.085 1.396 4.763 2.749 6.386.468.564.954 1.148 1.418 1.82.189.279.498 1.345.774 2.594H4.515v2.7h10.47v-2.7h-1.013c.279-1.251.589-2.32.776-2.599.46-.679.95-1.269 1.422-1.84Zm-3.564.288c-.568.833-1.042 2.801-1.317 4.151H8.212c-.273-1.353-.748-3.325-1.323-4.158a27.552 27.552 0 0 0-1.565-2.014c-1.275-1.531-2.117-2.544-2.117-4.628 0-3.722 2.935-6.75 6.543-6.75s6.543 3.028 6.543 6.75c0 2.053-.841 3.07-2.113 4.608-.488.59-1.042 1.26-1.574 2.04Z"
    />
  </svg>
)

export const SvgMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} fill="none" {...props}>
    <path
      fill="#9747FF"
      d="M9 .5A8.26 8.26 0 0 0 .75 8.75a8.167 8.167 0 0 0 1.662 4.95s.225.296.262.339L9 21.5l6.33-7.465.258-.335v-.002A8.164 8.164 0 0 0 17.25 8.75 8.26 8.26 0 0 0 9 .5Zm0 11.25a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
    />
  </svg>
)

export const SvgGithub = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={17} fill="none" {...props}>
    <path
      fill="#D9D9D9"
      d="M9 .667A8.333 8.333 0 0 0 .667 9c0 3.683 2.391 6.808 5.7 7.917.416.066.55-.192.55-.417v-1.408c-2.309.5-2.8-1.117-2.8-1.117-.384-.967-.925-1.225-.925-1.225-.759-.517.058-.5.058-.5.833.058 1.275.858 1.275.858.725 1.267 1.95.892 2.425.692.075-.542.292-.908.525-1.117-1.85-.208-3.792-.925-3.792-4.1 0-.925.317-1.666.859-2.258-.084-.208-.375-1.075.083-2.2 0 0 .7-.225 2.292.85A7.852 7.852 0 0 1 9 4.7c.708 0 1.425.092 2.083.275 1.592-1.075 2.292-.85 2.292-.85.458 1.125.167 1.992.083 2.2.542.592.859 1.333.859 2.258 0 3.184-1.95 3.884-3.809 4.092.3.258.575.767.575 1.542V16.5c0 .225.134.492.559.417C14.95 15.8 17.333 12.683 17.333 9A8.333 8.333 0 0 0 9 .667Z"
    />
  </svg>
)

export const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#D9D9D9"
      d="M13.833.5A1.666 1.666 0 0 1 15.5 2.167v11.666a1.666 1.666 0 0 1-1.667 1.667H2.167A1.667 1.667 0 0 1 .5 13.833V2.167A1.667 1.667 0 0 1 2.167.5h11.666Zm-.416 12.917V9A2.717 2.717 0 0 0 10.7 6.283c-.708 0-1.533.434-1.933 1.084v-.925H6.442v6.975h2.325V9.308a1.163 1.163 0 1 1 2.325 0v4.109h2.325ZM3.733 5.133a1.4 1.4 0 0 0 1.4-1.4 1.405 1.405 0 1 0-1.4 1.4Zm1.159 8.284V6.442H2.583v6.975h2.309Z"
    />
  </svg>
)

export const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={16} fill="none" {...props}>
    <path
      fill="#D9D9D9"
      d="M20.709.987c.16.312.257.661.284 1.022l.007.2v11.385c0 .607-.2 1.192-.56 1.637-.36.445-.854.717-1.383.763L18.9 16H2.1c-.53 0-1.04-.229-1.429-.642a2.557 2.557 0 0 1-.666-1.583L0 13.595V2.208c0-.362.071-.72.209-1.046C.659.096 2.1 0 2.1 0h16.8s1.299-.003 1.809.987ZM10.5 8.424 2.1.94C1.242.941.875 2.077.875 2.21l9.625 8.614 9.625-8.614S19.638 1.087 18.9.94l-8.4 7.483Z"
    />
  </svg>
)

export const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#D9D9D9"
      d="m14.757 7.25-3.004 3.002a4.245 4.245 0 0 1-6.005 0 4.227 4.227 0 0 1-.645-.857L6.5 8c.066-.067.148-.105.226-.15.097.33.265.641.524.9a2.125 2.125 0 0 0 3.003 0l3.002-3.002a2.125 2.125 0 0 0 0-3.003 2.125 2.125 0 0 0-3.002 0L9.184 3.814a5.325 5.325 0 0 0-2.709-.295l2.276-2.275a4.247 4.247 0 0 1 6.006 6.005Zm-7.94 4.937-1.069 1.068a2.127 2.127 0 0 1-3.003 0 2.127 2.127 0 0 1 0-3.003l3.003-3.003a2.124 2.124 0 0 1 3.003 0c.258.259.427.571.524.9.079-.045.16-.083.226-.149l1.396-1.395a4.179 4.179 0 0 0-.645-.857 4.247 4.247 0 0 0-6.006 0L1.244 8.751a4.247 4.247 0 0 0 6.005 6.006l2.276-2.276a5.325 5.325 0 0 1-2.709-.294Z"
    />
  </svg>
)

export const SvgCodebilityIconBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={203} height={326} fill="none" {...props}>
    <path
      fill="#1C1C1C"
      d="M16.63 0 203 187.629l-77.505 80.605c9.856-25.077 17.024-47.02-20.16-88.218-37.185-41.197-68.097-65.379-86.018-87.769C1.397 69.857-12.043 41.197 16.63 0Z"
    />
    <path
      fill="#1C1C1C"
      d="M94.582 191.659s-17.024 17.465-43.904 43.885c-26.88 26.42-23.744 67.618-2.688 90.456 68.539-58.921 80.034-87.795 46.592-134.341Z"
    />
  </svg>
)

export const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#31AFC4"
      fillOpacity={0.96}
      d="M8 12 3 7l1.4-1.45L7 8.15V0h2v8.15l2.6-2.6L13 7l-5 5Zm-6 4c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 0 14v-3h2v3h12v-3h2v3c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 14 16H2Z"
    />
  </svg>
)

// to be delete
