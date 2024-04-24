import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
   <div className=' flex-col md:flex'>
    <div className='border-b border-neutral-700'>
        <div className='flex h-16 items-center px-4'>
            <Link href={'/'} className='cursor-pointer'><h1 className='text-3xl font-bold tracking-tight'><span className='bg-gradient-to-r
            from-purple-500 to-pink-600 text-transparent bg-clip-text'>P</span>
            hoto <span className='bg-gradient-to-r
            from-purple-500 to-pink-600 text-transparent bg-clip-text'>A</span>lbum</h1></Link>
            <div className='ml-auto flex items-center space-x-4 mr-3'>
        <Image src={'/avatar.png'} alt='logo' width={60} height={60}/>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Navbar

   