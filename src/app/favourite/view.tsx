'use client'
import { CldImage } from "next-cloudinary"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Addtags } from "../gallery/action";
import { useState } from "react";

const View = ({ src, tag ,fun}: { src: string, tag: string[],fun:any }) => {
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
      <div className="absolute top-1 right-1" onClick={() => {
        fun(src)
        setfav(!fav)
        Addtags(src,fav)
      }}>
        {fav ? <AiFillHeart className="w-8 h-8 cursor-pointer text-red-500" /> :
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
        }


      </div>
    </div>
  )
}

export default View