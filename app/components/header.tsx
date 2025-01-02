"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const linkdata = [
  {   
     path: "/performance",
     label: "Performance"
  },
  {
     path: "/reliability",
     label: "Reliability"
  },
  {
     path: "/scale",
     label: "Scale"
  }
];

const showHeaderList = [
"/","/performance","/reliability","/scale"
]

export default function header() {

   const pathname = usePathname();
   console.log(pathname);

  return (
    
   <div className="absolute w-full text-white z-20">
   <div className="flex justify-between container mx-auto p-8">
   <Link className="text-3xl font-bold" href="/">Home</Link>
  <div className="flex gap-4 text-2xl  items-center">
      {
      linkdata.map((link) => (
      <Link key={link.label} className={pathname === link.path? "text-purple-500" : ""} href={link.path} >{link.label}  </Link>
      ))   
      }
   </div>
 </div>
 </div>
   
  )
}
