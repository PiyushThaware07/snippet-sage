import React, { useState } from 'react';
// ICONS
import { CgMenuGridO } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className='h-16  sticky top-0 left-0 z-[99]'>
      <div className="h-full w-full md:flex flex-nowrap items-center gap-10 justify-between bg-black/50 backdrop-blur-md border-b-[1.3px] border-white/15 px-5 relative">
        <section className='flex h-full flex-nowrap items-center justify-between gap-5'>
          <a href="">
            <h1 className='flex flex-nowrap gap-1 items-center text-white'>
              <span className='text-indigo-600 text-xl font-medium'>#</span>
              <span className='text-md tracking-wider'>SnippetSage</span>
            </h1>
          </a>
          <button className='md:hidden' onClick={() => setOpen(!open)}>
            <CgMenuGridO className='text-2xl text-white' />
          </button>
        </section>
        <section className={`${open ? 'block' : 'hidden'} md:flex flex-nowrap items-center justify-between gap-5 w-full bg-black md:bg-transparent md:static relative left-0 top-5 border-[1.3px] border-white/15 rounded-xl md:border-0 p-5 md:p-0`}>
          <ul className='md:flex flex-nowrap items-center gap-6'>
            <li className='py-2 ps-5 md:p-0'>
              <a href="" className='text-sm text-white/30 hover:text-white tracking-wider'>Showcase</a>
            </li>
            <li className='py-2 ps-5 md:p-0'>
              <a href="" className='text-sm text-white/30 hover:text-white tracking-wider'>Doc</a>
            </li>
          </ul>
          <div className="flex flex-nowrap items-center gap-5">
            <button className='h-10 w-10 rounded-full border-[1.3px] border-white/15 flex flex-nowrap items-center justify-center bg-white/5 text-white/30'><MdDarkMode className='text-xl text-white/15' /></button>
          </div>
        </section>
      </div>
    </nav>
  )
}
