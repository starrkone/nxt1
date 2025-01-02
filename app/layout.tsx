import "./globals.css";

//Titillium Web
//Oswald
//Inter

import { Poppins } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const font1 = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font1.className}>
      <body>{children}</body>
    </html>
  )
}
