import "./globals.css"

import { ThemeProvider } from "@/context/ThemeProvider"
import { ModalProvider } from "Components/providers/modal-provider"
import { Outfit } from "next/font/google"
import ToasterContext from "./context/ToasterContext"
export const metadata = {
  title: "Codebility",
  description:
    "Unlock the world of coding with Codebility - where passion meets innovation. Dive into immersive programs covering Web Development, Mobile Development, UI/UX Design, and Digital Marketing. Transform your skills with real-world standards. Join us in crafting a brighter future as tomorrow's digital architect.",
}

const outfit = Outfit({
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <ThemeProvider>
          <ToasterContext />
          <ModalProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
