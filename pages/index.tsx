import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Dorime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-yellow min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {/* widgets */}
        
        {/* modal */}
      </main>
    </div>
  )
}

export default Home
