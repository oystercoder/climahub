import React from 'react';
import { FiSun, FiCloud } from 'react-icons/fi';
import { Link } from 'react-router-dom';// Assuming you have the icons installed

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
      {/* <div className="mr-2">
        <FiSun className="text-yellow-400 text-2xl" />
      </div> */}
      <Link to='/'>
      <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap items-center">
      <FiSun className="text-yellow-400 text-2xl" />
        <span className="text-blue-500">ClimaHub</span>
        <FiCloud className="text-blue-300 text-2xl" />
        {/* <span className="mx-2">|</span> */}
        {/* <span className="text-green-500">Your Weather Companion</span> */}
      </h1>
      </Link>
      <ul className='flex gap-4 justify-content:flex-end'>
        <Link to='/'>
        <li className='hidden sm:inline text-pink-700 hover:underline'>Home</li>
        </Link>
        <Link to='/overview'>
        <li className=' text-yellow-400 hover:underline'>Forecast</li>
        </Link>
        <Link to='/suggestion'>
        <li className='text-white-800 hover:underline'>Insights</li>
        </Link>
      </ul>
      {/* <div className="ml-auto">
        <FiCloud className="text-blue-300 text-2xl" />
      </div> */}
    </header>
  );
}


