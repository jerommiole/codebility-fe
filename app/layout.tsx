import "styles/tailwind.css"
<<<<<<< HEAD
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeModeToggle } from "@/components/ui/thememodetoggle"
import Hero from "./CoDevs/Hero/Hero"
=======

>>>>>>> 4fc66f3dddd074db67a4076a653f60fcf186e2f0

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeModeToggle />
          {children}
        </ThemeProvider>
      </body>
=======
      <body>{children}</body>
>>>>>>> 4fc66f3dddd074db67a4076a653f60fcf186e2f0
    </html>
  )
}

