'use client';

import Hero from "@/components/hero";
import Labelsec from "@/components/labelsec";
import ProductsPage from "@/components/Product";
import { Suspense } from "react";
import Section1 from "@/components/card";


export default function Home() {
  return (
   
      <div>
        < Hero />
        < Section1 />
        < Suspense fallback={"Loading....."}>
        < ProductsPage />
        </Suspense>
    
   <Labelsec />
      </div>
  );
}
