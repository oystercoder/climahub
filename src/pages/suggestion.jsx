 import React, { useState } from 'react';
// import { FaRegCheckCircle } from 'react-icons/fa';
// import { useStateContext } from '../context';
// import DropdownComponent from './DropdownComponent';
// import DataDisplayComponent from './DataDisplayComponent';

//  const Suggestions = () => {
//   const [selectedOption, setSelectedOption] = useState('Option 1');

//   const handleDropdownSelect = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-2xl text-black font-bold mb-8">React Dropdown & Data Display</h1>
//       <div className="flex">
//         <div className="w-1/2 pr-4">
//           <DropdownComponent onSelect={handleDropdownSelect} />
//         </div>
//         <div className="w-1/2 pl-4">
//           <DataDisplayComponent selectedOption={selectedOption} />
//         </div>
//       </div>
//     </div>
//   );
// //   const [selectedOption, setSelectedOption] = useState('');
// //   const {weather,thisLocation,values,place,setPlace}=useStateContext('');
// //   console.log(weather);


// //   const [options, setOptions] = useState([
// //     'Farmer',
// //     'Event Planner',
// //     'Traveler',
// //     'Student',
// //     'Generic'
// //   ]);

// //   const handleSelectChange = (event) => {
// //     setSelectedOption(event.target.value);
// //   };

// //   return (
// //     <section className='flex items-center justify-center min-h-screen bg-gray-100'>
// //       <div className='bg-white p-8 rounded-lg shadow-md'>
// //         <label htmlFor='dropdown' className='block text-lg font-semibold mb-4'>
// //           <FaRegCheckCircle className='inline-block text-green-500 mr-2' />
// //           Select an option:
// //         </label>
// //         <select
// //           id='dropdown'
// //           onChange={handleSelectChange}
// //           value={selectedOption}
// //           className='p-3 border rounded-md w-full'
// //         >
// //           {/* default option */}
// //           <option disabled value=''>
// //             Select an option
// //           </option>
// //           {/* dynamic render options from the state */}
// //           {options.map((option, index) => (
// //             <option key={index} value={option}>
// //               {option}
// //             </option>
// //           ))}
// //         </select>
       

// //         {selectedOption && (
// //           <div className='mt-6'>
// //             <p className='text-xl font-bold text-green-500'>
// //               <FaRegCheckCircle className='inline-block text-lg mb-1 mr-2' />
// //               Selected Option: {selectedOption}
              
// //             </p>
// //             {/* You can add additional icons, images, or characters here */}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
//  };

//  export default Suggestions;

// import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import DropdownComponent from './DropdownComponent';
import DataDisplayComponent from './DataDisplayComponent';

const Suggestions = () => {
  const backgroundImageUrl = 'src/assets/bg1/stars.avif'; // Replace with your actual image URL

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
        <div className="relative mb-4">
          
          <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
            
          </div>
        </div>
        <div className="flex flex-between">
          <div className="w-1/2 pr-4">
            <DropdownComponent options={filteredOptions} onSelect={handleDropdownSelect} />
          </div>
          <div className="w-1/2 pl-4">
            <DataDisplayComponent selectedOption={selectedOption} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Suggestions;
