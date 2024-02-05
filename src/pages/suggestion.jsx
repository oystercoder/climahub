// import React, { useState } from 'react';
// import { Suspense, lazy } from 'react';
// import { HiSearch } from 'react-icons/hi';
//  import DropdownComponent from './DropdownComponent';
// import DataDisplayComponent from './DataDisplayComponent';
// import { useStateContext } from '../context';
// import m from '../assets/bg1/stars.avif'


// import '../pages/suggestion.css'


// const Suggestions = () => {
  
//   const { weather, thisLocation, values, place, setPlace } = useStateContext('');
//   console.log(values); // Replace with your actual image URL

//   const backgroundStyle = {
//     backgroundImage: `url('${m}')`,
    
//     backgroundSize: 'cover', // Use 'cover' or 'contain' based on your design preference
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'left',
//     alignItems: 'center',
//     color: 'white',
//     position: 'relative',
//   };

//   const [selectedOption, setSelectedOption] = useState('Option 1');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleDropdownSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const options = ['Farmer', 'Event Planner', 'Traveler', 'Student', 'Generic'];
//   const filteredOptions = options.filter((option) =>
//     option.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={backgroundStyle}>
//       <div className="container mx-auto p-8">
//         <div className="flex flex-col items-center">
//           <div className=" mb-4">
//             <HiSearch className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" />

//           </div>
//           <div className="">
//             <div className="drop-down">
            
       
//               <DropdownComponent
//                 options={filteredOptions}
//                 onSelect={handleDropdownSelect}
//               />
             
             
//             </div>
//             <div className="data-display">
            
        
//               <DataDisplayComponent selectedOption={selectedOption} />
            
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Suggestions;
import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import DropdownComponent from './DropdownComponent';
import DataDisplayComponent from './DataDisplayComponent';
import { useStateContext } from '../context';
import m from '../assets/bg1/stars.avif';

import '../pages/suggestion.css';

const Suggestions = () => {
  const { weather, thisLocation, values, place, setPlace } = useStateContext('');

  const backgroundStyle = {
    backgroundImage: `url('${m}')`,
    backgroundSize: 'fill',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
    padding:'0 16px'
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
    <div style={backgroundStyle} className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4 md:p-8 w-full max-w-screen-md">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <HiSearch className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" />
          </div>
          <div className="">
            <div className="drop-down mt-[-200px]">
              <DropdownComponent options={filteredOptions} onSelect={handleDropdownSelect} />
            </div>
            <div className="data-display mt-4">
              <DataDisplayComponent selectedOption={selectedOption} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;

      
