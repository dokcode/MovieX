import React from 'react'
import MenuItem from './MenuItem'
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineInfo } from "react-icons/ai";
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
           <MenuItem title="home" address="/" Icon={AiTwotoneHome}/> 
           <MenuItem title="about" address="/about" Icon={AiOutlineInfo}/> 
        </div>
        <Link href={'/'} className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>MovieX</span>
        <span className='text-xl hidden sm:inline'>Premier Movies</span>
        </Link>
    </div>
  )
}
