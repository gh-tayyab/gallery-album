import React from 'react'
import cloudinary from 'cloudinary'
import FavList from './FavList'

export interface MyImage{
  public_id:string,
  tags:string[]
}

const Gallery = async () => {
 let res= (await  cloudinary.v2.search
  .expression( "resource_type:image AND tags=favourite ")
    .sort_by("public_id","desc")
    .with_field("tags")
    // .max_results(5)
    .execute()) as {resources:MyImage[]}
    
  return (
    <div>
    <div className='py-5 px-6 flex items-center justify-between'>
         <h2 className=' text-3xl font-semibold tracking-tight'>Favourite</h2>
       
    </div>
    <FavList resources={res.resources} />
    </div>
  )
}

export default Gallery