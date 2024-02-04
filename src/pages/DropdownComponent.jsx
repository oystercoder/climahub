// // DropdownComponent.jsx
// import React, { useState } from 'react';

// const DropdownComponent = ({ onSelect }) => {
//   const options = ['Farmer',
//        'Event Planner',
//       'Traveler',
//       'Student',
//       'Generic'];
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleDropdownChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOption(selectedValue);
//     onSelect(selectedValue);
//   };

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-semibold text-gray-600">Choose an option:</label>
//       <select
//         value={selectedOption}
//         onChange={handleDropdownChange}
//         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default DropdownComponent;
// DropdownComponent.jsx
// import React, { useState } from 'react';
// import { FiCheck } from 'react-icons/fi'; // Import check icon from react-icons library

// const DropdownComponent = ({ onSelect }) => {
//   const options = ['Farmer', 'Event Planner', 'Traveler', 'Student', 'Generic'];
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleDropdownChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOption(selectedValue);
//     onSelect(selectedValue);
//   };

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-semibold text-red-600">Choose an option:</label>
//       <div className="relative">
//         <select
//           value={selectedOption}
//           onChange={handleDropdownChange}
//           className="mt-1 block w-full pl-3 pr-10 py-2 text-base border rounded-md shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         >
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//           <FiCheck className="text-green-500" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropdownComponent;
// DropdownComponent.jsx
import React, { useState } from 'react';
import { HiCheck } from 'react-icons/hi'; // Import check icon from Heroicons library

const DropdownComponent = ({ onSelect }) => {
  const options = ['Farmer', 'Event Planner', 'Traveler', 'Student', 'Generic'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="w-1000px bg-pink-500">
      <label className="block text-sm font-semibold text-red-600 w-1000px">Choose an option:</label>
      <select
        value={selectedOption}
        onChange={handleDropdownChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-red-500 border rounded-md shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
            
          </option>
        ))}
      </select>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <HiCheck className="text-green-500 h-5 w-5" />
      </div>
    </div>
  );
};

export default DropdownComponent;
