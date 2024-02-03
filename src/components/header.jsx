import React, { useState, useEffect } from 'react'
import search from '../assets/icons/search (1).svg';
import { useStateContext } from '../context';
import { FiSun, FiCloud } from 'react-icons/fi';
import { Link } from 'react-router-dom';



function Header() {
  console.log("kfn")
  const [input, setInput] = useState('');
  console.log("hi")
  const { weather, thisLocation, values, place, setPlace } = useStateContext('');
  console.log(weather.values);
  const submitCity = () => {
    setPlace(input);
    setInput('');
  }


  useEffect(() => {
    console.log(values);
  }, [weather]);
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
    
        
    <Link to='/'>
      <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap items-center">
      <FiSun className="text-yellow-400 text-2xl" />
        <span className="text-blue-500">ClimaHub</span>
        <FiCloud className="text-blue-300 text-2xl" />
        {/* <span className="mx-2">|</span> */}
        {/* <span className="text-green-500">Your Weather Companion</span> */}
      </h1>
      </Link>
          
      <input
  onKeyUp={(e) => {
    if (e.key === 'Enter') {
      submitCity();
    }
  }}
  type="text"
  placeholder='Search city'
  className='focus:outline-none w-96 text-[#212121] text-lg justify-between'
  value={input}
  onChange={e => setInput(e.target.value)}
/>

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
       
      
     
        
    
    </header>
  )
}
export default Header

 

 

  