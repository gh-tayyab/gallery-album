import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className=' flex-col md:flex'>
            <div className='border-b border-neutral-700'>
                <div className='flex h-16 items-center px-4'>
                    <h1 className='text-3xl font-bold tracking-tight'>Yessy <span className='text-[#e81f10]'>Album</span></h1>
                    <div className='ml-auto flex items-center space-x-4 mr-3'>
                        <Image src={'/logo2.png'} alt='logo' width={60} height={60} className='hover:opacity-30'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

