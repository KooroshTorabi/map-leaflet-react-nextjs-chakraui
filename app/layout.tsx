import '../styles/globals.css'
import type { Metadata } from 'next'
import { Provider } from "@/components/ui/provider"

export const metadata: Metadata = {
  title: 'Leaflet Map App',
  description: 'Interactive map application using Leaflet, React, and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body style={{ margin: 0, padding: 0, height: "100vh", overflow: "hidden" }}>
         <Provider>{children}</Provider>
        </body>
    </html>
  )
}
