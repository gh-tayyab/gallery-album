'use client'
import React, { useEffect, useState } from 'react'
import View from './view'
import { MyImage } from './page'


const FavList = ({resources}:{resources:MyImage[]}) => {
  const [initail,setInitial]=useState(resources)
  useEffect(()=>{
    setInitial(resources)
  },[resources])
  return (
    <div className='columns-4 gap-4 space-y-4 mx-auto p-5'>
    {initail.map(((item,i)=>{
      return <div key={i} className='break-inside-avoid'>
        <View src={item.public_id} tag={item.tags} fun={(publicID:string)=>{
          setInitial((current)=>current.filter((val)=>val.public_id !== publicID))
        }} />
      </div>
    }))}
  </div>
  )
}

export default FavList