import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useStateContext } from '../context'; // Import icons as needed

const Suggestions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const {weather,thisLocation,values,place,setPlace}=useStateContext('');
  console.log(weather);


  const [options, setOptions] = useState([
    'Farmer',
    'Event Planner',
    'Traveler',
    'Student',
    'Generic'
  ]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <label htmlFor='dropdown' className='block text-lg font-semibold mb-4'>
          <FaRegCheckCircle className='inline-block text-green-500 mr-2' />
          Select an option:
        </label>
        <select
          id='dropdown'
          onChange={handleSelectChange}
          value={selectedOption}
          className='p-3 border rounded-md w-full'
        >
          {/* default option */}
          <option disabled value=''>
            Select an option
          </option>
          {/* dynamic render options from the state */}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
       

        {selectedOption && (
          <div className='mt-6'>
            <p className='text-xl font-bold text-green-500'>
              <FaRegCheckCircle className='inline-block text-lg mb-1 mr-2' />
              Selected Option: {selectedOption}
              
            </p>
            {/* You can add additional icons, images, or characters here */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Suggestions;
