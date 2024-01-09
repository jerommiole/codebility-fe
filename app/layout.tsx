import "styles/tailwind.css"

import { ThemeProvider } from "../Components/theme-provider"
import { ThemeModeToggle } from "../Components/thememodetoggle"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  // variable: "--font-outfit",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
