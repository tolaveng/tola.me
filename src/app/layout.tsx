/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../../public/textillate/animate.css';
import Script from 'next/script';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tola Veng',
  description: 'Tola Veng portfolio - Project demonstration',
  keywords: 'Tola Veng, Portfolio, Project Demo, Full-stack Developer, Software Engineer'
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

      <head>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
      </head>
      
      {/* <Script type="text/javascript" src="/js/jquery-3.7.1.slim.min.js" async={false} /> */}
      <Script type="text/javascript" src="/textillate/jquery.fittext.js" async={false} />
      <Script type="text/javascript" src="/textillate/jquery.lettering.js" async={false} />
      <Script type="text/javascript" src="/textillate/jquery.textillate.js" async={false} />
      <Script type="text/javascript" src="/js/script.js" />

      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
