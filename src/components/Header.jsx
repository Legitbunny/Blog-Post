import React from 'react'
import DarkMode from '../Theme/DarkMode'
import "../index.css"

const Header = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center border border-[--secondary-color] shadow-md py-2 fixed top-0 bg-[--bg-color]'>
        <header className='text-center' >
            <h1 className='text-2xl font-bold uppercase text-[--secondary-color] '>LegitBunny Blogs</h1>
        </header>
        <DarkMode />
    </div>
  )
}

export default Header