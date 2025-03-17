import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Nicholas Terek - Researcher & Engineer",
  description: "Personal academic website of Nicholas Terek, featuring research, projects, teaching, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light" // Force light theme to prevent hydration mismatch
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

