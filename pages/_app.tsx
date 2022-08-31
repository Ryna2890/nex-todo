import '../styles/globals.css'
import '../styles/todo.css'
import '../components/input/input.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
