import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import {
 Sheet,
 SheetContent,


 SheetTrigger,
} from "@/components/ui/sheet";


export default function Navbar() {
  return (
    <div className="w-full h-[100px]  flex shadow-md">
      <div className="flex items-center sm:w-[1286px] sm:mx-auto">
        {/* Logo */}
        <Image
          src="/Frame 168.png"
          alt="Logo"
          width={200}
          height={80}
          className="sm:mr-6 ml-6 sm:h-auto sm:w-auto"
        />

        {/* Navigation Links */}
        <div className=" gap-[56px] sm:pl-[20px] sm:ml-[100px] text-lg hidden md:flex">
          <Link href="/"><h2 className="cursor-pointer font-bold hover:scale-105">Home</h2></Link>
          <Link href="/shop"><h2 className="cursor-pointer font-bold hover:scale-105">Shop</h2></Link>
          <Link href="/blog"><h2 className="cursor-pointer font-bold hover:scale-105">Blog</h2></Link>
         <Link href="/contact"><h2 className="cursor-pointer font-bold hover:scale-105">Contact</h2></Link> 
        </div>

        {/* Vector Icons */}
        <div className="lg:flex-row md:flex-row flex sm:ml-auto sm:gap-10  ">
          <div className="gap-6 hover:scale-105">
          
          </div> 
          <div>
            
          
          </div>
          <div className="w-[28px] h-[28px] hover:scale-105 ">
          <Link href="/"><p className="h-28 w-28 font-bold"><IoIosSearch /></p></Link> 
          </div>  
          <div className="w-[28px] h-[28px] hover:scale-105 ">
          <Link href="/wishlist"><p className="h-28 w-28 font-bold"><FaRegHeart /></p></Link> 
          </div> 
          <div className="w-[28px] h-[28px] hover:scale-105 mx-6">
           <Link href="/cart"><p className="font-bold"><FaCartShopping/></p></Link> 
          </div> 
        </div>
  </div>
      <Sheet>
  <SheetTrigger className="md:hidden text-3xl ml-8 ">
  <TiThMenu />
   </SheetTrigger>
  <SheetContent  className="bg-black text-white p-6">
  
  <div className="flex-col  flex gap-4 px-6 py-4   ">
<Link href="/"><button className="text-xl  hover:scale-110 hover:underline-offset-1"><b>Home</b></button></Link>
<Link href="/shop"><button className="text-xl    hover:scale-110  hover:underline"><b>Shop</b></button></Link>
<Link href="/blog"><button  className="text-xl hover:scale-110"><b>Blog</b></button></Link>
<Link href="/contact"><button className="text-xl   hover:scale-110"> <b>Contact</b></button></Link>


     
    

</div>

  </SheetContent>
</Sheet>
    </div>
  );
}