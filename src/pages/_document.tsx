import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" />
      </Head>
      <body className="relative font-sans h-full bg-gray-100 overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
