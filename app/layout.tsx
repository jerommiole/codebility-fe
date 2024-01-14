import "styles/tailwind.css"

import { ThemeProvider } from "../Components/theme-provider"
import { ThemeModeToggle } from "../Components/thememodetoggle"
import { Outfit } from "next/font/google"
import AuthContext from "./context/AuthContext"
import { ModalProvider } from "Components/providers/modal-provider"

export const metadata = {
  title: "Codebility",
  desciption: "Lorem Ipsum",
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
          <ModalProvider />
          {/* <ThemeModeToggle /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
