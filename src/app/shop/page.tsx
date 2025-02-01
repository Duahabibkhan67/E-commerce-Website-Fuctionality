'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '@/types/products';
import { addToCart } from '@/app/actions/actions';
import Link from 'next/link';
import Swal from 'sweetalert2';
import SearchAndFilter from '@/components/searchui'; // Import SearchAndFilter component
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton component

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = '*[_type == "product"]'; // Query to fetch all products
        const data = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data); // Set initial filtered products to all products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="mx-9 overflow-x-hidden">
      <h1 className="text-3xl font-extrabold text-gray-800 sm:mb-8 mt-16 text-center">Shop</h1>

      {/* Add Search and Filter Component here */}
      <SearchAndFilter setFilteredProducts={setFilteredProducts} products={products} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mr-5 max-sm:gap-8 ml-6 my-6">
        {loading ? (
          // Display skeletons while loading
          Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <Skeleton className="h-52 w-full bg-gray-300 rounded-md" />
              <Skeleton className="h-6 w-full bg-gray-300 mt-3 rounded-md" />
              <Skeleton className="h-4 w-3/4 bg-gray-300 mt-2 rounded-md" />
              <Skeleton className="h-8 w-1/2 bg-gray-300 mt-4 rounded-md" />
            </li>
          ))
        ) : (
         
          filteredProducts.map((product) => (
            <li key={product._id} className="shadow-md p-4 rounded-lg">
              <Link href={`/product/${product.slug.current}`}>
                {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    height={200}
                    width={200}
                    className="w-full h-52 object-cover bg-gray-20 transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                )}
                <h2 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-900 hover:underline transition-colors duration-200">
                  {product.title}
                </h2>
                <p className="text-gray-700 text-lg my-3 font-bold hover:text-blue-700 hover:underline transition-colors duration-200">
                  Price: ${product.price}
                </p>
                {product.discountPercentage && (
                  <p className="text-gray-500 text-sm hover:text-blue-700 hover:underline transition-colors duration-200">
                    Discount: {product.discountPercentage}%
                  </p>
                )}
                <button
                  className="bg-yellow-600 hover:bg-orange-500 text-white font-semibold py-1 px-2 rounded-sm shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add To Cart
                </button>
              </Link>
              {product.isNew && <span className="text-green-500 mx-4 font-semibold">New!</span>}
            </li>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;















