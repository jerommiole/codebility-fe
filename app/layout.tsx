import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Remove dark to run normal mode
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
