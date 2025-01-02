'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const linkdata = [

   {
      path: "/dashboard/about",
      label: "About"
   },
   {
      path: "/dashboard/settings",
      label: "Settings"
   }
];

export default function DashboardLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   const [count, setCount] = useState(0);
   const pathname = usePathname()
   console.log(pathname)

   return (
     
      <div className="border-2 border-dashed p-5 w-1/2 " >
         <div className="flex gap-4 font-bold mb-4 text-purple-900">
            {
               linkdata.map((link) => (
               <Link key={link.label} className={pathname === link.path? "text-purple-600" : ""} href={link.path} >{link.label}  </Link>
                ))
            }
         </div>
         <h2>from dashboard layout cnt : { count }</h2>
         <button className="bg-black text-white p-2 mb-2 rounded-md" onClick={() => setCount(count+1)} >Increment</button>
         {children}
     </div>
   );
 }