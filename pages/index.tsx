import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/Components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* This is a comment inside a JSX element */}
      {/*head is good ! it gives a name to the tab when you hover over it ! */}
      <Head>
        <title>Home - UWatch</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

    {/* Header */}
    <Header />

    <main>
      {/* Banner */}
      <section> 
        {/* Row */}
        {/* Row */}
        {/* Row */}
        {/* Row */}
      </section>
    </main>

    {/* The modal is to make the website responsive */}
    {/* Modal */}

    </div>
    
  )
}
