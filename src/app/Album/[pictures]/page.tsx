import React from 'react'
import cloudinary from 'cloudinary'

import View from './view'
interface MyImage{
  public_id:string,
  tags:string[]
}

const Gallery = async ({params}:{params:{pictures:string}}) => {
 let res= (await  cloudinary.v2.search
  .expression( `resource_type:image AND folder=${params.pictures}`)
    .sort_by("public_id","desc")
    .with_field("tags")
    .max_results(5)
    .execute()) as {resources:MyImage[]}
    
  return (
    <div>
    <div className='py-5 px-6'>
         <h2 className=' text-3xl font-semibold tracking-tight'>{`Album Name:${params.pictures}`}</h2>
        
    </div>
    <div className='columns-4 gap-4 space-y-4 mx-auto p-5'>
      {res.resources.map(((item,i)=>{
        return <div key={i} className='break-inside-avoid'>
          <View src={item.public_id} tag={item.tags}/>
        </div>
      }))}
    </div>
    </div>
  )
}

export default Gallery