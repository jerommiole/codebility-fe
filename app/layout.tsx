<<<<<<< HEAD
import "./globals.css"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          {children}
      </body>
=======
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Remove dark to run normal mode
    <html lang="en" className="dark">
      <body>{children}</body>
>>>>>>> 71746f6a42068808a18b490938001100e1d5f2a5
    </html>
  )
}
