import Head from 'next/head'
import Terminal from '../components/Terminal'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Terminal Hacker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Terminal />
      </main>
    </div>
  )
}