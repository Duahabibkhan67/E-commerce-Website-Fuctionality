// components/searchui.tsx
import React, { useState } from 'react';
import { Product } from '@/types/products';

interface SearchAndFilterProps {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000); // you can set a reasonable max price

  // Handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on search, category, and price range
  const filterProducts = () => {
    const filtered = products.filter((product) => {
      const matchesTitle = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory
        ? product.title.toLowerCase() === selectedCategory.toLowerCase()
        : true;
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return matchesTitle && matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  // Handle category and price range changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

 

  // Call filter when any of the filters change
  React.useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory, minPrice, maxPrice]);

  return (
    <div className="flex flex-col items-center mb-8">
      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search products"
        className="p-2 border border-gray-300 rounded-md"
      />
      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 mt-4 border border-gray-300 rounded-md"
      >
        <option value="">All Categories</option>
        {/* You can dynamically generate categories here */}
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
      </select>
      {/* Price Range Filter */}
      <div className="mt-4">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          placeholder="Min Price"
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          placeholder="Max Price"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default SearchAndFilter;

