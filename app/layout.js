import './globals.css'
/* IMPORT ROUTER / LINKS */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Figure out dynamic title tag */}
      <body>
        {/* HEADER GOES HERE */}
        {/* SIDEBAR GOES HERE */}
        {children}
        {/* FOOTER GOES HERE */}
      </body>
    </html>
  )
}
