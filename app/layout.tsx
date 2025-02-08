import "@/styles/globals.css"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "EV Charger Analysis",
  description: "Datathon project analyzing EV charger usage and distribution",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Suranna&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#181718]">{children}</body>
    </html>
  )
}



import './globals.css'