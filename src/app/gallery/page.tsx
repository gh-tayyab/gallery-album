import React from 'react'
import cloudinary from 'cloudinary'
import Upload from './upload'
import View from './view'
import Link from 'next/link'
interface MyImage {
  public_id: string,
  tags: string[]
}

const Gallery = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("public_id", "desc")
    .with_field("tags")
    // .max_results(5)
    .execute()) as { resources: MyImage[] }

  return (
    <div>
      <div className='py-5 px-6 flex items-center justify-between '>
        <h2 className=' text-3xl font-semibold tracking-tight'>Gallery</h2>
        <Upload />
      </div>
      <div className=' columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-auto p-5'>
        {res.resources.map(((item, i) => {
          return <div key={i} className='break-inside-avoid'>
            <View src={item.public_id} tag={item.tags} />
          </div>
        }))}
      </div>
    </div>
  )
}

export default Gallery