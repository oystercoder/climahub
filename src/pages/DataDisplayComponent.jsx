// DataDisplayComponent.jsx
// import React from 'react';

// const DataDisplayComponent = ({ selectedOption }) => {
//   const data = {
//     'Farmer': 'Data for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'Student': 'Data for Option 2 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
//     'Option 3': 'Data for Option 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Data Display Component</h2>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <p className="text-gray-700">{data[selectedOption]}</p>
//       </div>
//     </div>
//   );
// };

// export default DataDisplayComponent;
// DataDisplayComponent.jsx
import React from 'react';

const DataDisplayComponent = ({ selectedOption }) => {
  const data = {
    'Farmer': 'Data for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Data for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elitData for Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Student': 'Data for Option 2 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Option 3': 'Data for Option 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Suggestions for you</h2>
      <div className="border-b border-black w-full mb-4"></div>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-80">
        {/* max-h-80 sets a maximum height for the container; adjust as needed */}
        <p className="text-gray-700">{data[selectedOption]}</p>
      </div>
    </div>
  );
};

export default DataDisplayComponent;

