import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  // enableSystem={false}
  return (
    <ThemeProvider storageKey='theme' >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
