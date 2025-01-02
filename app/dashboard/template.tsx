'use client'
import Link from "next/link";
import { useState } from "react";

export default function DashboardTemplate({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   const [count, setCount] = useState(0);
   return (
     
      <div className="border-2 border-dashed p-5 w-1/2 " >
      
         <h2>from dashboard template cnt : { count }</h2>
         <button className="bg-black text-white p-2 mb-2 rounded-md" onClick={() => setCount(count+1)} >Increment</button>
         {children}
     </div>
   );
 }