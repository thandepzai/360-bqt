import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteConfig } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "động từ bất quy tắc",
    "irregular verbs",
    "360 động từ",
    "tiếng anh",
    "MapStudy",
    "học tiếng anh",
  ],
  authors: [{ name: "MapStudy" }],
  creator: "MapStudy",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
