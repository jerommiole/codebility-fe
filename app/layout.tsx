import "styles/tailwind.css"

import {ThemeProvider} from "../Components/theme-provider";
import {ThemeModeToggle} from "../Components/thememodetoggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
