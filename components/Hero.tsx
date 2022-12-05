import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    
    <div className="flex justify-between items-center
    border-y border-slate-800 h-screen w-screen bg-fixed bg-center bg-cover custom-img-hero2">
     <div className="lg:ml-32 lg:mr-36 space-y-8">
       <h1 className="text-7xl max-w-xl text-white custom-text-border-hero">
         <span className="underline decoration-yellow-300 decoration-4">
         Abogados
         </span>{" "}
         Profesionales al alcance...ejemplo...
       </h1>
       <h2 className="text-xl text-white custom-text-border-hero2">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia eaque numquam accusantium! Cumque odio quis officiis eius inventore nesciunt numquam, reiciendis quod, deserunt assumenda ipsam, dolore architecto distinctio nam!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia eaque numquam accusantium! Cumque odio quis officiis eius inventore nesciunt numquam, reiciendis quod, deserunt assumenda ipsam, dolore architecto distinctio nam!
         amet consectetur adipisicing elit. Quas quia eaque numquam accusantium! Cumque odio quis officiis eius inventore nesciunt numquam, reiciendis quod, deserunt assumenda ipsam, dolore architecto distinctio nam!
         amet consectetur adipisicing elit. Quas quia eaque numquam accusantium! Cumque odio quis officiis eius inventore nesciunt numquam, reiciendis quod, deserunt assumenda ipsam, dolore architecto distinctio nam!

       </h2>
     </div>

     <motion.img
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     className="hidden md:inline-flex lg:h-64 mr-28"
     src="https://i.postimg.cc/GtxwyZjH/arataymontano-logo-transparent.png"
     alt=""
     />  
   </div>


  )
}

export default Hero