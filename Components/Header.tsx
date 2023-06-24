import React, { useEffect, useState } from 'react'
import {SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        {/* "flex" is used kind of like to adapt the screen depending on teh size of the tab */}
        <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">Series</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">My Watchlist</li>
        </ul>
    </div>
        
    <div className="flex items-center space-x-4 font-normal">
    <SearchIcon className='hidden h-6 w-6 sm:inline'/>
        <Link href="/account">
            <img src="https://rb.gy/g1pwyx" alt="" className='cursor-pointer rounded'/>
        </Link>
    </div>
    </header>
    
  )
}

export default Header