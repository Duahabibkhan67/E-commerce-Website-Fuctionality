'use client';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug] [0] {
      _id,
      title,
      description,
      price,
      isNew,
      "productImage":image->asset.url
    }`, { slug }
  );
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const { slug } = await params;
      const fetchedProduct = await getProduct(slug);
      setProduct(fetchedProduct);

      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(storedWishlist);

      const isAlreadyInWishlist = storedWishlist.some((item: Product) => item._id === fetchedProduct._id);
      setIsInWishlist(isAlreadyInWishlist);
    }

    fetchData();
  }, [params]);

  const handleWishlistToggle = (product: Product) => {
    let updatedWishlist = [...wishlist];

    if (isInWishlist) {
      updatedWishlist = updatedWishlist.filter((item: Product) => item._id !== product._id);  // Remove
    } else {
      updatedWishlist.push(product);  // Add
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));  // Save to localStorage
    setIsInWishlist(!isInWishlist);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-9">
      <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              height={400}
              width={400}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700">
            {product.title}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold">${product.price}</p>
          <p className="text-gray-600 flex">
            <b className="text-black">Quantity:</b> Available
          </p>

          {/* Add to Wishlist Button */}
          <button
            onClick={() => handleWishlistToggle(product)}
            className="px-2 py-3 h-10 rounded-sm w-52 bg-yellow-500 text-white font-bold  shadow-md hover:bg-yellow-600 transition-all duration-300"
          >
            {isInWishlist ? 'Remove From wishlist' : 'Add to Wishlist'}
          </button>

          {/* Product Description */}
          <p className="text-sm sm:text-base text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
}










// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { Product } from "@/types/products";
// import { groq } from "next-sanity";
// import Image from "next/image";

// interface ProductPageProps {
//  params : Promise<{slug:string}>
// }
// async function getProduct(slug:string): Promise<Product>{
//  return client.fetch(
//  groq`*[_type == "product" && slug.current == $slug] [0] {
//    _id,
//    title,
//    description,
//    price,
//    isNew,
//    "productImage":image->asset.url
//   }`, {slug}
//  )
// }

// export default async function ProductPage({params}: ProductPageProps){
//  const {slug} = await params;
//  const product = await getProduct(slug);
//  if (!product) {
//   return <div>Loading...</div>;
// }

// // Check if the image URL is correctly generated
// const imageUrl = product.image ? urlFor(product.image).url() : '';

//  return(
//   <div  className="max-w-7xl mx-auto px-4 my-9">
//    <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 gap-12">
//     <div className="aspect-square ">
//     {product.productImage && (
//                   <Image
//                     src={urlFor(product.productImage).url()}
//                     alt={product.title}
//                     height={200}
//                     width={200}
//                     className="w-full h-52 object-cover bg-gray-20 transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                   />
//                 )}
//     </div>
//     <div className="flex flex-col gap-8">
//      <h1 className="sm:text-3xl font-bold text-yellow-700  ">
//           {product.title}
//      </h1>
//      <p className="text-2xl font-bold ">
//   ${product.price}
//      </p>
//      <p className="text-gray flex"> <b className="text-black">Quantity:</b>Available</p>
   
//      <Image 
//      src="/star.jpg"
//      alt="star"
//      height={80}
//      width={90}
//      />


   
//      <p className="text-xs  sm:mr-14 text-gray-700">
//       {product.description}
//      </p>
     
     
//     </div>

//    </div>

//   </div>
//  )
// }