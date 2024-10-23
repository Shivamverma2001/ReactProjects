import React from 'react'

const Card = () => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card