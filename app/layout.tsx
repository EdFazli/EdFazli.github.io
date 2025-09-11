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
    default: 'Syed Fazli - Technical Blog',
    template: '%s | Syed Fazli'
  },
  description: 'Professional technical blog covering software development, cloud computing, and technology insights.',
  keywords: ['blog', 'technology', 'software development', 'cloud computing', 'programming'],
  authors: [{ name: 'Syed Fazli' }],
  creator: 'Syed Fazli',
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
    apple: '/images/logo-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edfazli.github.io',
    title: 'Syed Fazli - Technical Blog',
    description: 'Professional technical blog covering software development, cloud computing, and technology insights.',
    siteName: 'Sued Fazli Blog',
    images: [
      {
        url: '/images/logo.svg',
        width: 200,
        height: 60,
        alt: 'Syed Fazli Technical Blog Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Fazli - Technical Blog',
    description: 'Professional technical blog covering software development, cloud computing, and technology insights.',
    creator: '@edfazli',
    images: ['/images/logo.svg'],
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
      <head>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo-icon.svg" />
      </head>
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
