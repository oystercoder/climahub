// import React, { useState, useEffect } from 'react'
// import search from '../assets/icons/search (1).svg';
// import { useStateContext } from '../context';
// import { FiSun, FiCloud } from 'react-icons/fi';
// import { Link } from 'react-router-dom';



// function Header() {
//   console.log("kfn")
//   const [input, setInput] = useState('');
//   console.log("hi")
//   const { weather, thisLocation, values, place, setPlace } = useStateContext('');
//   console.log(weather.values);
//   const submitCity = () => {
//     setPlace(input);
//     setInput('');
//   }


//   useEffect(() => {
//     console.log(values);
//   }, [weather]);
//   return (
//     <header className="bg-pink-900 text-white p-4 flex items-center justify-between">
    
        
//     <Link to='/'>
//       <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap items-center">
//       <FiSun className="text-yellow-400 text-2xl" />
//         <span className="text-blue-500">ClimaHub</span>
//         <FiCloud className="text-blue-300 text-2xl" />
//         {/* <span className="mx-2">|</span> */}
//         {/* <span className="text-green-500">Your Weather Companion</span> */}
//       </h1>
//       </Link>
          
//       <input
//   onKeyUp={(e) => {
//     if (e.key === 'Enter') {
//        console.log(input)
//        alert("place entered is: " + input);
//       submitCity();
//     }
//   }}
//   type="text"
//   placeholder='Search city'
//   className='focus:outline-none w-96 text-[#212121] text-lg justify-between'
//   value={input}
  
//   onChange={e => setInput(e.target.value)}
// />

//           <ul className='flex gap-4 justify-content:flex-end'>
//         <Link to='/'>
//         <li className='hidden sm:inline text-pink-700 hover:underline'>Home</li>
//         </Link>
//         <Link to='/overview'>
//         <li className=' text-yellow-400 hover:underline'>Forecast</li>
//         </Link>
//         <Link to='/suggestion'>
//         <li className='text-white-800 hover:underline'>Insights</li>
//         </Link>
//       </ul>
       
      
     
        
    
//     </header>
//   )
// }

// export default Header
// import React, { useState, useEffect } from 'react';
// import searchIcon from '../assets/icons/search (1).svg';
// // Replace with the actual path to your image
// import { useStateContext } from '../context';
// import { FiSun, FiCloud } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [input, setInput] = useState('');
//   const { setPlace } = useStateContext('');

//   const submitCity = () => {
//     setPlace(input);
//     setInput('');
//   }

//   return (
//     <header className="bg-pink-900 text-white p-4 flex items-center justify-between">
//       <Link to='/'>
//         <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap items-center">
//           <FiSun className="text-yellow-400 text-2xl" />
//           <span className="text-blue-500">ClimaHub</span>
//           <FiCloud className="text-blue-300 text-2xl" />
//         </h1>
//       </Link>

//       <input
//         onKeyUp={(e) => {
//           if (e.key === 'Enter') {
//             submitCity();
//           }
//         }}
//         type="text"
//         placeholder='Search city'
//         className='focus:outline-none w-96 text-[#212121] text-lg justify-between m-0'
//         value={input}
//         onChange={e => setInput(e.target.value)}
//       />
//       <button>

//       <img src="src\assets\bg1\Moon cloud fast wind.png" alt="Header Image" className="w-20 h-13 object-cover " />
//       </button>

//       <ul className='flex gap-4 justify-content:flex-end'>
//         <Link to='/'>
//           <li className='hidden sm:inline text-pink-700 hover:underline'>Home</li>
//         </Link>
//         <Link to='/overview'>
//           <li className=' text-yellow-400 hover:underline'>Forecast</li>
//         </Link>
//         <Link to='/suggestion'>
//           <li className='text-white-800 hover:underline'>Insights</li>
//         </Link>
//       </ul>
//     </header>
//   )
// }

// export default Header;

// import React, { useState } from 'react';
// import searchIcon from '../assets/icons/search (1).svg';
// import { useStateContext } from '../context';
// import { FiSun, FiCloud } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [input, setInput] = useState('');
//   const { setPlace } = useStateContext('');

//   const submitCity = () => {
//     setPlace(input);
//     setInput('');
//   }

//   return (
//     <header className="bg-pink-900 text-white p-4 flex items-center justify-between">
//       <Link to='/'>
//         <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap items-center">
//           <FiSun className="text-yellow-400 text-2xl" />
//           <span className="text-blue-500">ClimaHub</span>
//           <FiCloud className="text-blue-300 text-2xl" />
//         </h1>
//       </Link>

//       <input
//         onKeyUp={(e) => {
//           if (e.key === 'Enter') {
//             submitCity();
//           }
//         }}
//         type="text"
//         placeholder='Search city'
//         className='focus:outline-none w-96 text-[#212121] text-lg justify-between m-0 p-0' // Set margin and padding to 0
//         value={input}
//         onChange={e => setInput(e.target.value)}
//       />

//       <button className="m-0 p-0">
//         <img src="src\assets\bg1\Moon cloud fast wind.png" alt="Header Image" className="w-20 h-13 object-cover" />
//       </button>

//       <ul className='flex gap-4 justify-content:flex-end'>
//         <Link to='/'>
//           <li className='hidden sm:inline text-pink-700 hover:underline'>Home</li>
//         </Link>
//         <Link to='/overview'>
//           <li className=' text-yellow-400 hover:underline'>Forecast</li>
//         </Link>
//         <Link to='/suggestion'>
//           <li className='text-white-800 hover:underline'>Insights</li>
//         </Link>
//       </ul>
//     </header>
//   )
// }

// export default Header;
// import React, { useState } from 'react';
// import searchIcon from '../assets/icons/search (1).svg';
// import { useStateContext } from '../context';
// import { FiSun, FiCloud } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [input, setInput] = useState('');
//   const { setPlace } = useStateContext('');

//   const submitCity = () => {
//     setPlace(input);
//     setInput('');
//   }

//   return (
//     <header className="bg-pink-900 text-white p-4 flex items-center justify-between">
//       <div className="flex items-center space-x-4"> {/* Container for logo, search, and icon */}
//         <Link to='/'>
//           <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl flex items-center">
//             <FiSun className="text-yellow-400 text-2xl" />
//             <span className="text-blue-500">ClimaHub</span>
//             <FiCloud className="text-blue-300 text-2xl" />
//           </h1>
//         </Link>

//         <div className="flex items-center"> {/* Container for search and icon */}
//           <input
//             onKeyUp={(e) => {
//               if (e.key === 'Enter') {
//                 submitCity();
//               }
//             }}
//             type="text"
//             placeholder='Search city'
//             className='focus:outline-none text-[#212121] text-lg' // Removed unnecessary styles
//             value={input}
//             onChange={e => setInput(e.target.value)}
//           />

//           <button className="ml-2 p-0" onClick={submitCity}>
//             <img src="src\assets\bg1\Moon cloud fast wind.png" alt="Header Image" className="w-20 h-13 object-cover" />
//           </button>
//         </div>
//       </div>

//       <ul className='flex gap-4 justify-content:flex-end'>
//         <Link to='/'>
//           <li className='hidden sm:inline text-pink-700 hover:underline'>Home</li>
//         </Link>
//         <Link to='/overview'>
//           <li className='text-yellow-400 hover:underline'>Forecast</li>
//         </Link>
//         <Link to='/suggestion'>
//           <li className='text-white-800 hover:underline'>Insights</li>
//         </Link>
//       </ul>
//     </header>
//   )
// }

// export default Header;
import React, { useState } from 'react';
import searchIcon from '../assets/icons/search (1).svg';
import { useStateContext } from '../context';
import { FiSun, FiCloud } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header() {
  const [input, setInput] = useState('');
  const { setPlace } = useStateContext('');

  const submitCity = () => {
    setPlace(input);
    setInput('');
  }

  return (
    <header className="bg-black text-white p-2 md:p-4 lg:p-5 flex flex-col md:flex-row items-center justify-between">
      <Link to='/'>
        <h1 className="font-bold text-lg md:text-2xl lg:text-3xl flex items-center">
          <FiSun className="text-yellow-400 text-2xl" />
          <span className="text-blue-500">ClimaHub</span>
          <FiCloud className="text-blue-300 text-2xl" />
        </h1>
      </Link>

      <div className="flex items-center justify-center mt-3 md:mt-0"> {/* Centered container for search */}
        <input
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitCity();
            }
          }}
          type="text"
          placeholder='Search city'
          className='focus:outline-none text-[#212121] text-3xl md:w-64 lg:w-96 px-2 py-1'
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <button className="ml-2 p-0" onClick={submitCity}>
          <img src="src/assets/bg1/Cloud 3 zap.png" alt="Header Image" className="w-20 h-13 object-cover" />
        </button>
      </div>

      <ul className='flex gap-4 justify-content:flex-end mt-3 md:mt-0'>
        <Link to='/'>
          <li className='hidden md:inline text-2xl text-pink-300 hover:underline'>Home</li>
        </Link>
        <Link to='/overview'>
          <li className='text-yellow-400 text-2xl hover:underline'>Forecast</li>
        </Link>
        <Link to='/suggestion'>
          <li className='text-white-800 text-2xl hover:underline'>Insights</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header;
