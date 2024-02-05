import React, { useState } from 'react';

import { useStateContext } from '../context';
import { FiSun, FiCloud } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import searchyy from '../assets/icons/search-normal.png';

function Header() {
  const [input, setInput] = useState('');
  const { setPlace } = useStateContext('');
  const [currentCity,setCurrentCity] = useState("")

  const submitCity = () => {
    setPlace(input);
    setCurrentCity(input)
    setInput('');
  }

  return (
    <header className="bg-black text-white p-1 md:p-4 lg:p-5 flex flex-col md:flex-row items-center justify-between">
      <Link to='/'>
        <h1 className="font-bold text-lg md:text-2xl lg:text-3xl flex items-center">
          <FiSun className="text-yellow-400 text-2xl" />
          <span className="text-blue-500">ClimaHub</span>
          <FiCloud className="text-blue-300 text-2xl" />
        </h1>
      </Link>

      <div className="flex items-center justify-center w-13  mt-3 md:mt-0"> {/* Centered container for search */}
        <input
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitCity();
            }
          }}
          type="text"
          placeholder='Search city'
          className='focus:outline-none text-[#212121] text-3xl md:w-64 lg:w-96 px-2 py-1 rounded'
          value={input}
          onChange={e => setInput(e.target.value)}
        />

<button className="p-0 h-13" onClick={submitCity}>
  <img width="60px" src={searchyy} alt="Header Image" />
</button>






<label> {currentCity} </label>


      </div>

      <ul className='flex gap-4 justify-content:flex-end mt-3 md:mt-0'>
        <Link to='/'>
        <li className='font-bold hidden md:inline text-3xl text-pink-300 hover:underline'>Home</li>

        </Link>
        <Link to='/overview'>
          <li className='font-bold  text-yellow-400 text-3xl hover:underline'>Forecast</li>
        </Link>
        <Link to='/suggestion'>
          <li className='font-bold text-white-800 text-3xl hover:underline'>Insights</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header;


