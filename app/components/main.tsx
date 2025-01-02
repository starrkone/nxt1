import React from 'react'
import Image from 'next/image'

interface Props {
   imgUrl: string;
   altTxt: string;
   content: string;
}

export default function mainPage(props: Props) {
  return (
   <div className="bg-green-300 h-screen w-full relative ">
   <div className='absoulte inset-0 -z-10'>
   <Image className='absolute' src={props.imgUrl} style={{objectFit: 'cover'}} fill alt={props.altTxt} />
     <div className='absolute inset-0 bg-gradient-to-r from-gray-800 '></div> 
   </div>
   <div className='relative flex justify-center items-center h-full z-10'>
     <h1 className='text-white text-6xl'>{props.content}</h1>
   </div>
 </div>
  )
}
