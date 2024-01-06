import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Remove dark for light mode
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
