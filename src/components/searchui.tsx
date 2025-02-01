
import { useState, useEffect, } from 'react';

// Define the type for a product
interface Product {
  title: string;
  price: number;
}

interface SearchAndFilterProps {
  setFilteredProducts: (filtered: Product[]) => void;
  products: Product[];
}

const SearchAndFilter = ({ setFilteredProducts, products }: SearchAndFilterProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriceRange(e.target.value);
  };

  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map((price) => (price === '500+' ? Infinity : Number(price)));
      filtered = filtered.filter((product) => product.price >= min && product.price <= max);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedPriceRange, products, setFilteredProducts]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
      {/* Search Bar */}
      <div className="flex flex-col sm:w-60 sm:ml-0 lg:ml-10 w-full">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
          className="border p-2 rounded-md w-full"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-4 sm:w-1/2 w-full">
        <select
          value={selectedPriceRange}
          onChange={handlePriceChange}
          className="border p-2 rounded-md w-64"
        >
          <option value="">All Prices</option>
          <option value="0-50">Under $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500+">Above $500</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
