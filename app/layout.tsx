import { cn } from "@/lib/utils"
import { DM_Sans } from 'next/font/google'
import "./globals.css"


const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        dmSans.variable,
        "font-sans antialiased"
      )}>
        {children}
      </body>
    </html>
  )
}

