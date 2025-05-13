// pages/_app.tsx
import type { AppProps } from 'next/app'
import '../globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="max-w-5xl mx-auto p-4 pt-20">
      <Component {...pageProps} />
    </main>
  )
}
