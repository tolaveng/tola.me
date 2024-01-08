/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import '../../public/textillate/animate.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tola Veng',
  description: 'Tola Veng portfolio - Project demonstration',
  keywords: 'Tola Veng, Portfolio, Project Demo, Developer, Software Engineer'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*Use import above <Head>
        <link rel="stylesheet" href="/textillate/styles.css" />
      </Head> */}
      
      <Script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" />
      <Script src="/textillate/jquery.fittext.js" />
      <Script src="/textillate/jquery.lettering.js" />
      <Script src="/textillate/jquery.textillate.js" />
      <Script src="/script.js" />

      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
