import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/Components/Header'
import Banner from '@/Components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
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
      <Banner />
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
