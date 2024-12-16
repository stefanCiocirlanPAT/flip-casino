import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CommonProvider } from '@/state/commonContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommonProvider>
      <Component {...pageProps} />
    </CommonProvider>
  )
}
