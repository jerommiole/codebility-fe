import * as React from "react"
const SvgFooterCodebility = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={10} fill="none" {...props}>
    <g
      filter="url(#a)"
      style={{
        mixBlendMode: "darken",
      }}
    >
      <path fill="#6A78F2" d="M25.316.646H70V9.75H25.316z" />
    </g>
    <g
      filter="url(#b)"
      style={{
        mixBlendMode: "darken",
      }}
    >
      <path fill="#6A78F2" d="M0 0h16.654v9.104H0z" />
    </g>
    <defs>
      <filter
        id="a"
        width={244.684}
        height={209.104}
        x={-74.684}
        y={-99.354}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1334_3079" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1334_3079" result="shape" />
      </filter>
      <filter
        id="b"
        width={216.654}
        height={209.104}
        x={-100}
        y={-100}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1334_3079" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1334_3079" result="shape" />
      </filter>
    </defs>
  </svg>
)
export default SvgFooterCodebility
