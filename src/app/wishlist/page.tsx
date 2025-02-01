'use client';
import { useState, useEffect } from 'react';
import { Product } from '@/types/products'; // Assuming Product type is available
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Skeleton } from '@/components/ui/skeleton'; // Import ShadCN Skeleton component

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state to manage skeleton loader

  // Fetch wishlist from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
    setLoading(false); // Set loading to false after fetching data
  }, []);

  // Handle item removal from wishlist
  const handleRemove = (id: string) => {
    const updatedWishlist = wishlist.filter(item => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-9">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {/* Show Skeleton Loader if Loading */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
              <Skeleton className="w-48 h-48 bg-gray-300 rounded-md" />
              <Skeleton className="w-3/4 h-6 bg-gray-300 mt-4" />
              <Skeleton className="w-1/2 h-6 bg-gray-300 mt-2" />
              <Skeleton className="w-2/3 h-10 bg-red-500 mt-4 rounded-lg" />
            </div>
          ))}
        </div>
      ) : wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white"
            >
              <div className="w-full h-40 sm:w-48 sm:h-48 mb-4 flex items-center justify-center">
                {product.productImage ? (
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    height={160}
                    width={160}
                    className="object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700 text-center">{product.title}</h2>
              <p className="text-gray-500 text-center">${product.price}</p>
              <button
                onClick={() => handleRemove(product._id)}
                className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

