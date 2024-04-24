'use client'
import { CldImage } from "next-cloudinary"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Addtags } from "./action";
import { useState } from "react";
import Album from "./Album";



const View = ({ src, tag }: { src: string, tag: string[] }) => {
  const [fav, setfav] = useState(tag.includes("favourite"))
  return (
    <div className="relative">
      <CldImage
        className="rounded-md"
        width="460"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      {/* heart icon */}
      <div className="absolute top-1 right-1" onClick={() => {
        setfav(!fav)
        Addtags(src,fav)
      }}>
        {fav ? <AiFillHeart className="w-8 h-8 cursor-pointer text-red-500" /> :
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
        }
      </div>
      {/* edit */}
      <div className="absolute top-1 right-1 mr-8">
       <Album imageData={src} />
      </div>
    
    </div>
  )
}

export default View