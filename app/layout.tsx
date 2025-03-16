import type React from "react"
import { robotoMono } from "./fonts"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '39Coding',
  description: 'モダンなデザインで美しく、機能的Webサイトを制作!39Codingは高品質ながらにリーズナブルなWeb制作を提供します。ホームページ制作からWebアプリ制作まで対応可能!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.variable}>
        {/* Background Image */}
        <div
          className="fixed inset-0 z-[-1]"
          style={{
            backgroundImage:
              'url("/marble-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.25,
          }}
        />

        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}

