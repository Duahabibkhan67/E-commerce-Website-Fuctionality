import Link from "next/link";
import Image from "next/image";

import React from 'react'

const Labelsec = () => {
  return (
    <div>
       <section className="sm:flex my-11 bg-[#FCF8F3]  overflow-hidden">
    <div className="mt-24  my-9">
      <h1 className="lg:text-6xl  sm:text-3xl ml-6 text-2xl font-bold  my-6 ">50+  Beautiful rooms <br /> For Inspiration</h1>
      <p className="text-gray-700 text-left ml-6">Our designer already made a lot <br /> of beautiful prototipe <br /> of rooms that inspire you</p>
      <Link href="/shop"><button className="bg-[#B88E2F] w-[200px] ml-6 h-[74px] hover:scale-105 sm:mx-4 sm:my-9 text-white">Explore More</button></Link>
    </div>
    <div className="sm:flex sm:mx-9 sm:my-11 ml-14 gap-8">
    <Image  width={100} height={200} src="/hthimg1.png" className="sm:w-[285px] sm:h-[301px] my-4 " alt="shop1"></Image>
    <Image width={100} height={200} src="/htimg2.png" className="sm:w-[285px] sm:h-[301px]  my-4 " alt="shop1"></Image>
    </div>
   </section>
    </div>
  )
}

export default Labelsec
