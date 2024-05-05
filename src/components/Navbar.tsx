import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdMenu } from 'react-icons/io'


const Navbar = () => {
    return (
        <div className='flex-col md:flex'>
            <div className='border-b border-neutral-700'>
                <div className='h-16 flex justify-between items-center  px-4'>
                    <h1 className='text-3xl font-bold tracking-tight'><Link href={"/"}>Yessy <span className='text-[#e81f10]'>Album</span></Link></h1>
                    <ul className='hidden md:flex space-x-14 text-xl'>
                        <li className='hover:text-[#e81f10]'><Link href={"/gallery"}>Gallery</Link></li>
                        <li className='hover:text-[#e81f10]'><Link href={"/Album"}>Photo Albums</Link></li>
                        <li className='hover:text-[#e81f10]'><Link href={"/favourite"}>Favourites</Link></li>
                    </ul>
                    <Image src={'/logo2.png'} alt='logo' width={60} height={60} className='hidden md:block hover:opacity-30' />




                    {/* mobile nav */}
                    <div className='md:hidden'>
                        <Sheet>
                            <SheetTrigger asChild>
                            <IoMdMenu size={30}/>                            
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetDescription className='mt-8'>
                                        <Link href={"/"}>
                                            <Button variant='ghost' className="w-full justify-start text-lg hover:bg-neutral-700  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                </svg>

                                                Gallery
                                            </Button></Link>
                                        {/* 2nd button */}
                                        <Link href={"/Album"}>
                                            <Button variant='ghost' className="w-full justify-start text-lg hover:bg-neutral-700  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                                </svg>


                                                Picture Album
                                            </Button></Link>
                                        {/* button3 */}
                                        <Link href={"/favourite"}>
                                            <Button variant='ghost' className="w-full justify-start text-lg hover:bg-neutral-700  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                                Favourites
                                            </Button></Link>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

