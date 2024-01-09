"use client"

import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import SvgClipboardDocument from "../../Components/logos/clipboardDocument"

interface ICopyToClipboardButton {
  value: string
  successMessage?: string
}
const CopyToClipboardButton = ({ value, successMessage }: ICopyToClipboardButton) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setIsCopied(true)
    // @ts-ignore
    toast.success(value + " " + `Copied!` || successMessage)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="relative">
      <Toaster position="top-center" reverseOrder={false} />
      {/*{isCopied && <p className="absolute top-0">Copied!</p>}*/}
      <button onClick={copyToClipboard}>
        <SvgClipboardDocument className="transtion duration h-4 w-4 cursor-pointer text-secondaryColor hover:-translate-y-0.5" />
      </button>
    </div>
  )
}

export default CopyToClipboardButton
