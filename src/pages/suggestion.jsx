import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import DropdownComponent from './DropdownComponent';
import DataDisplayComponent from './DataDisplayComponent';
import { useStateContext } from '../context';

import '../pages/suggestion.css'

const Suggestions = () => {
  const backgroundImageUrl = 'src/assets/bg1/stars.avif';
  const { weather, thisLocation, values, place, setPlace } = useStateContext('');
  console.log(values); // Replace with your actual image URL

  const backgroundStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: 'fit', // Use 'cover' or 'contain' based on your design preference
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
  };

  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [searchTerm, setSearchTerm] = useState('');

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
  };

  const options = ['Farmer', 'Event Planner', 'Traveler', 'Student', 'Generic'];
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={backgroundStyle}>
      <div className="container mx-auto p-8">
        <div className="flex flex-col items-center">
          <div className=" mb-4">
            <HiSearch className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" />

          </div>
          <div className="">
            <div className="drop-down">
              <DropdownComponent
                options={filteredOptions}
                onSelect={handleDropdownSelect}
              />
            </div>
            <div className="data-display">
              <DataDisplayComponent selectedOption={selectedOption} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
      
