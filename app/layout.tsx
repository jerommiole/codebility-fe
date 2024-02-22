import "styles/tailwind.css"

import { ThemeProvider } from "../Components/theme-provider"
import { ThemeModeToggle } from "../Components/thememodetoggle"
import { Outfit } from "next/font/google"
import AuthContext from "./context/AuthContext"
import { ModalProvider } from "Components/providers/modal-provider"
import Navbar from "./(landingPage)/Navbar"
import { SessionProvider } from "next-auth/react"
import ToasterContext from "./context/ToasterContext"
export const metadata = {
  title: "Codebility",
  description: "Lorem Ipsum",
}

const outfit = Outfit({
  subsets: ["latin"],
  // variable: "--font-outfit",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // forcedTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthContext>
            <ToasterContext />
            <ModalProvider />

            {/* <ThemeModeToggle /> */}
            {children}
          </AuthContext>
        </ThemeProvider>
      </body>
    </html>
  )
}
