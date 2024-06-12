import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <header className='px-9 py-6 absolute z-10 w-full bg-black'>
            <nav className='flex justify-between items-center max-container'>
                <Link to='/'>
                    <h2 className='font-spartan bg-gradient-to-b from-red-600 to-red-900 bg-clip-text text-transparent text-3xl font-bold'>NIHARIKA</h2>
                </Link>
                <ul className='flex-1 flex justify-center mx-2 items-center gap-10 max-lg:hidden'>
                    <li className='font-spartan text-white-logo text-xl'>Projects</li>
                    <li className='font-spartan text-white-logo text-xl'>Tools and Technologies</li>
                    <li className='font-spartan text-white-logo text-xl'>Get in Touch</li>
                </ul>
                <ul className='flex-1 flex justify-center mx-2 items-center gap-10 max-lg:hidden'>
                    
                    <li className='font-spartan text-white-logo text-xl'>Projects</li>
                    <li className='font-spartan text-white-logo text-xl'>Tools and Technologies</li>
                    <li className='font-spartan text-white-logo text-xl'>Get in Touch</li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header