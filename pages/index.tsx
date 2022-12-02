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

      <div className="flex justify-between items-center
      bg-yellow-400 border-y border-slate-800 py-24 lg:py-24">
        <div className="lg:ml-32 mr-24 space-y-8">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
            Abogados
            </span>{" "}
            Profesionales al alcance...ejemplo...
          </h1>
          <h2 className="lg:mr-80 font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia eaque numquam accusantium! Cumque odio quis officiis eius inventore nesciunt numquam, reiciendis quod, deserunt assumenda ipsam, dolore architecto distinctio nam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia eaque numquam accusantium! Cumque odio quis officiis eius inventore nesciunt numquam, reiciendis quod, deserunt assumenda ipsam, dolore architecto distinctio nam!
            amet consectetur adipisicing elit. Quas quia eaque numquam accusantium! Cumque odio quis officiis eius inventore nesciunt numquam, reiciendis quod, deserunt assumenda ipsam, dolore architecto distinctio nam!
            amet consectetur adipisicing elit. Quas quia eaque numquam accusantium! Cumque odio quis officiis eius inventore nesciunt numquam, reiciendis quod, deserunt assumenda ipsam, dolore architecto distinctio nam!

          </h2>
        </div>

        <img
        className="hidden md:inline-flex h-32 lg:h-64 mr-28"
        src="https://4.bp.blogspot.com/-yEauQZMppGg/V456udMzCvI/AAAAAAAAAUU/UU6OdR_byrEQEmGKMocjKvWS_dAkOqOygCLcB/s1600/justicia%2Blogo.jpg"
        alt=""
        />  
      </div>
    </div>
  )
}
