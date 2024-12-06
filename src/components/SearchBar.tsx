import React, { useState, useEffect } from 'react';

const SearchBar: React.FC<{ setProductList: () => void; searchbyName: (name: string) => void }> = ({
  setProductList,
  searchbyName
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        setDebouncedTerm(searchTerm); // Update debounced term after delay
      } else {
        setProductList();
      }
    }, 500); // Delay in milliseconds (500ms here)

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      searchbyName(debouncedTerm);
    }
  }, [debouncedTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a product..."
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
