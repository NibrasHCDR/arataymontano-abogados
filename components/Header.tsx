import Link from 'next/link'
import React from 'react'

function Header() {
  return (
 <header className="bg-slate-800 flex justify-between lg:pl-28 md:pl-20">
    <div className="items-center space-x-5 max-w-7xl mx-4 mt-4 hidden md:inline-flex">
     <Link href="/">
            <img
               className="w-32 object-contain cursor-pointer ml-2"
               src="https://4.bp.blogspot.com/-yEauQZMppGg/V456udMzCvI/AAAAAAAAAUU/UU6OdR_byrEQEmGKMocjKvWS_dAkOqOygCLcB/s1600/justicia%2Blogo.jpg"
               alt=""
            />
     </Link>
     <h3 className="text-white cursor-pointer hover:text-slate-800 hover:bg-yellow-400 px-4 py-1 
         rounded-full text-xl sm:ml-24 hidden md:inline-flex text-center">
        ARATA & MONTAÑO<br></br>ABOGADOS
     </h3>

    </div>

    <div className="flex items-center space-x-5
    text-white lg:mt-20 lg:mx-32 sm:ml-24">
        <h3 className="cursor-pointer hover:text-slate-800 hover:bg-yellow-400 px-4 py-1 
         rounded-full text-lg ">Nosotros</h3>
         <h3 className="cursor-pointer hover:text-slate-800 hover:bg-yellow-400 px-4 py-1 
         rounded-full text-lg">Servicios</h3>
         <h3 className="cursor-pointer hover:text-slate-800 hover:bg-yellow-400 px-4 py-1 
         rounded-full text-lg">Actualidad</h3>
         <h3 className="cursor-pointer hover:text-slate-800 hover:bg-yellow-400 px-4 py-1 
         rounded-full text-lg">Ejemplo</h3>
         <h3 className="cursor-pointer hover:text-slate-800 hover:bg-yellow-400 px-4 py-1 
         rounded-full text-lg">Ejemplo</h3>
         <h3 className="cursor-pointer hover:text-slate-800 hover:bg-yellow-400 px-4 py-1 
         rounded-full text-lg">Ejemplo</h3>
        
    </div>
 </header>
  )
}

export default Header