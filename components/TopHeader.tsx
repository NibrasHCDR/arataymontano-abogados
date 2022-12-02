import Link from 'next/link'
import React from 'react'

import { SocialIcon } from 'react-social-icons'
import { BsFillCursorFill } from 'react-icons/bs'

type Props = {}

export default function TopHeader({}: Props) {
  return (
    <header className="bg-slate-800 sticky flex items-start p-2 lg:pl-28 md:pl-28">
    <div className="flex flex-row items-center lg:mx-4 px-2 hover:bg-yellow-400 rounded-full">
        <SocialIcon
        className="rounded-full"
        url="https://api.whatsapp.com/message/ZW4NRMSDIHASO1?autoload=1&app_absent=0"
        fgColor="white"
        bgColor="transparent"
        label="+569 7450 4797"
        />

        <a className="text-white hidden md:inline-flex cursor-pointer" href="https://api.whatsapp.com/message/ZW4NRMSDIHASO1?autoload=1&app_absent=0">
            +569 7450 4797
        </a>

        </div>

        <div className="flex flex-row items-center px-2 hover:bg-yellow-400 rounded-full">

        <SocialIcon
        className="rounded-full pl-6"
        url="https://instagram.com/a_m.abogados"
        fgColor="white"
        bgColor="transparent"
        />

        <a className="text-white hidden md:inline-flex cursor-pointer" href="https://www.instagram.com/a_m.abogados/">
            a_m.abogados
        </a>

        </div>
        

       <div className="flex flex-row items-center ml-auto text-white cursor-pointer px-9 lg:mr-24 hover:bg-yellow-400 rounded-full">
       <SocialIcon
        className="rounded-full cursor-pointer"
        network="email"
        fgColor="white"
        bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm">
            Contáctanos
        </p>
       </div>
 </header>
  )
}