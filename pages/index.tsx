import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import TopHeader from '../components/TopHeader'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ARATA & MONTAÑO - ABOGADOS</title>
        <link rel="icon" href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.pngocean.com%2Ffiles%2F989%2F111%2F782%2Fadvocate-symbol-justice-lawyer-symbol.jpg&f=1&nofb=1&ipt=2b520193c0243242500ea47c6b0b993cca3e9d96c8dcabcd2439185f8fede16e&ipo=images" />
      </Head>

      {/* Contenido TOP HEADER () */}

      <TopHeader/>
      
      <Header />

      

    </div>
  )
}
