// app/layout.tsx
import { AppKit } from '../context/web3modal'

export const metadata = {
  title: 'appkittest',
  description: 'null'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppKit>{children}</AppKit>
      </body>
    </html>
  )
}

