import React, { useState } from "react";
import aboutUss from "../images/aboutUss.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [filters, setFilters] = useState({
    Age: false,
    Price: false,
    Category: false,
    Brand: false,
    DevelopmentalBenefits: false,
    SocialEvents: false,
  });

  const toggleFilter = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  const filterOptions = {
    Age: ["0-2 years", "3-5 years", "6-8 years", "9-12 years"],
    Price: ["Under $10", "$10 - $20", "$20 - $50", "Over $50"],
    Category: ["Toys", "Books", "Games", "Electronics"],
    Brand: ["Brand A", "Brand B", "Brand C", "Brand D"],
    DevelopmentalBenefits: ["Cognitive", "Motor Skills", "Creativity"],
    SocialEvents: ["Party", "Outdoor", "Indoor", "Educational"],
  };

  const products = [
    {
      id: 1,
      name: "Product 1",
      imageUrl: aboutUss,
      price: "$20",
<<<<<<< HEAD
      rating: 4.5,
=======
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: aboutUss,
      price: "$25",
<<<<<<< HEAD
      rating: 4.3,
=======
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: aboutUss,
      price: "$15",
<<<<<<< HEAD
      rating: 4.1,
=======
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: aboutUss,
      price: "$30",
<<<<<<< HEAD
      rating: 3,
=======
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
    },
  ];

  const currentUser = {
    name: "John Doe",
    isParentUser: true, // Mock flag for the parent user
  };

  const userAccounts = [
    {
      id: 1,
      name: "Account 1",
      isParentAccount: true, // Mock flag for the parent account
    },
    {
      id: 2,
      name: "Account 2",
      isParentAccount: false,
    },
    {
      id: 3,
      name: "Account 3",
      isParentAccount: false,
    },
  ];

  return (
<<<<<<< HEAD
<div className="flex bg-gray-100 ">
      {/* Sidebar with selected menu */}
      <div className="w-1/5 bg-gray-300 p-4 h-screen">
=======
<div className="flex">
      {/* Sidebar with selected menu */}
      <div className="w-1/5 bg-gray-200 p-4 h-screen">
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
        {/* Selected Menu */}
        <div className="bg-gray-100 p-4 mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">{currentUser.name}</h2>
          </div>
          {currentUser.isParentUser && (
            <Link to="/register">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Category Filters */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Category Filters</h2>
<<<<<<< HEAD

=======
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
          <div className="space-y-2">
            {Object.keys(filters).map((filterKey) => (
              <div key={filterKey}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFilter(filterKey)}
                >
                  <h3 className="text-sm font-semibold">{filterKey}</h3>
                  <svg
                    className={`h-4 w-4 transform ${
                      filters[filterKey] ? "rotate-90" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {filters[filterKey] && (
                  <div className="ml-4">
                    {filterOptions[filterKey].map((option) => (
<<<<<<< HEAD
                      <label key={option} className="flex items-center mb-1  ">
                        <input type="checkbox" className="mr-2  accent-gray-300 focus:accent-gray-500 " />
=======
                      <label key={option} className="flex items-center mb-1">
                        <input type="checkbox" className="mr-2" />
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="products w-4/5 p-4">
        {/* Recommended for you*/}
        <section >
        <div class="title text-3xl font-bold text-gray-700 py-5 mb-5 border-b-2 border-gray-700">Recommended for you</div>
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="relative  border p-4 rounded">
                <div className="relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="mb-2 transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                {/* rating */}
                <div class=" mt-7 absolute top-0 text-white bg-gray-800 bg-opacity-45  rounded-full m-2 p-1 px-2 flex ">
                    <span>
                        <svg class="w-5 mr-1" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                          </svg>
                    </span>
                    <span>{product.rating} / 5</span>
                  </div>
                <Link to={`/product/${product.id}`}>
                  <button className="bg-blue-500 text-white py-1 px-2 rounded mt-2">
                    Show Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
        
        {/* Most popular */}
        <section >
        <div class="title text-3xl font-bold text-gray-700 py-5 mb-5 border-b-2 border-gray-700">Most popular</div>
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="relative  border p-4 rounded">
                <div className="relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="mb-2 transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                {/* rating */}
                <div class=" mt-7 absolute top-0 text-white bg-gray-800 bg-opacity-45  rounded-full m-2 p-1 px-2 flex ">
                    <span>
                        <svg class="w-5 mr-1" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                          </svg>
                    </span>
                    <span>{product.rating} / 5</span>
                  </div>
                <Link to={`/product/${product.id}`}>
                  <button className="bg-blue-500 text-white py-1 px-2 rounded mt-2">
                    Show Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
=======
      {/* Product Display */}
      <div className="w-4/5 p-4">
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <div className="relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="mb-2 transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="bg-blue-500 text-white py-1 px-2 rounded mt-2">
                  Show Details
                </button>
              </Link>
            </div>
          ))}
        </div>
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
      </div>
    </div>
  );
};

export default HomePage;
