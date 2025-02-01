
'use client';
import Image from 'next/image';
import { Product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { Skeleton } from  "@/components/ui/skeleton"

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    setLoading(false); // Set loading to false once cart items are fetched
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'You will not be able to recover this item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      confirmButtonText: 'Yes, remove it',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems()); // Re-fetch updated cart
        Swal.fire('Removed', 'Item has been removed', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems()); // Re-fetch updated cart
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  return (
    <div className="overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-6 sm:text-center my-9">Your Cart</h2>

      {/* Show Skeleton Loader While Loading Cart Items */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
              <Skeleton className="h-52 w-full bg-gray-300 rounded-md" />
              <Skeleton className="h-6 w-full bg-gray-300 mt-3 rounded-md" />
              <Skeleton className="h-4 w-3/4 bg-gray-300 mt-2 rounded-md" />
              <Skeleton className="h-8 w-1/2 bg-gray-300 mt-4 rounded-md" />
            </div>
          ))}
        </div>
      ) : cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div key={item._id} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  height={200}
                  width={200}
                  className="w-full h-52 object-cover bg-gray-20 transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              )}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <div className="flex items-center mt-4 mb-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    -
                  </button>
                  <span className="mx-4">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold">Total: ${item.price * item.inventory}</p>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="bg-red-500 h-10 w-20 text-white font-semibold py-1 px-2 rounded-xl shadow-md hover:shadow-lg hover:bg-red-700 hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-3xl text-gray-500">Your cart is empty</div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 justify-center shadow-md border-sm my-9 w-60 lg:ml-44 ml-0 bg-gray-50 h-44">
          <h3 className="text-2xl font-semibold my-9 mt-11 mx-3">Total: ${calculateTotal()}</h3>
          <Link href="/checkout">
            <button className="bg-green-700 text-white mx-6 text-lg font-semibold py-1 px-2 justify-center shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
























