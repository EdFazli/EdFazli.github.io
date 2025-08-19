import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: {
    default: 'Ed Fazli - Technical Blog',
    template: '%s | Ed Fazli'
  },
  description: 'Professional technical blog covering software development, cloud computing, and technology insights.',
  keywords: ['blog', 'technology', 'software development', 'cloud computing', 'programming'],
  authors: [{ name: 'Ed Fazli' }],
  creator: 'Ed Fazli',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edfazli.github.io',
    title: 'Ed Fazli - Technical Blog',
    description: 'Professional technical blog covering software development, cloud computing, and technology insights.',
    siteName: 'Ed Fazli Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ed Fazli - Technical Blog',
    description: 'Professional technical blog covering software development, cloud computing, and technology insights.',
    creator: '@edfazli',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
