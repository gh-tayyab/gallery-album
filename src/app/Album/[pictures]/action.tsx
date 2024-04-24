"use server"
import cloudinary from "cloudinary"

import { revalidatePath } from "next/cache"
export async function Addtags(publicID:string,fav:boolean){
    if(fav) {
        await cloudinary.v2.uploader.remove_tag("favourite",[publicID])
    } else {
        await cloudinary.v2.uploader.add_tag("favourite",[publicID])
    }
    await new Promise((resolve)=>{
        setTimeout(resolve),1000
    })
    revalidatePath('/gallery')
    }
   export async function FolderCreate (folder:string,image:string) {
    await cloudinary.v2.api.create_folder(folder)
    await cloudinary.v2.uploader.rename(image,`${folder}/${image}`)
   }