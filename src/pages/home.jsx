// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// const ImageSlider = ({ images }) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const goToNextImage = () => {
//     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//   };

//   const goToPrevImage = () => {
//     setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="image-slider">
//       <button onClick={goToPrevImage}>Previous</button>
//       <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
//       <button onClick={goToNextImage}>Next</button>
//     </div>
//   );
// };



// const Home = () => {
//   const images = [
//     'https://example1.com/image1.jpg',
//     'https://example1.com/image2.jpg',
//     'https://example1.com/image3.jpg',
//   ];
 
  
//   const backgroundImageUrl = 'src/assets/bg1/bg.jpg'; // Replace with your actual image URL

//   const backgroundStyle = {
//     backgroundImage: `url('${backgroundImageUrl}')`,
//     backgroundSize: 'fill',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'left',
//     alignItems: 'center',
//     color: 'white',
//     position: 'relative',
//   };

//   return (
//     <div style={backgroundStyle}>
//       <h1 className='text-red-500 font-bold text-3xl lg:text-6xl'>
     
//         Welcome to <span className='text-black'>ClimaHub</span>
//       </h1>
//       <div className='text-purple-600 text-2xl '>
//         Explore weather forecasts and insights tailored just for you.
//       </div>

//       <Link to="/prescription" className='text-pink-800 font-bold hover:underline'>
//         <button className='bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 hover:text-white flex items-start'>
//           <h2 className='text-blue-800'>
//             Want to safeguard your health
//           </h2>
//         </button>
//       </Link>
//       <div>
//       <h1>React Image Slider</h1>
//       <ImageSlider images={images} />
//     </div>
    
//       )

      
      
     


// // export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';

// const Home = () => {
//   const backgroundImageUrl = 'src/assets/bg1/Home Screen.png'; // Replace with your actual image URL

//   const backgroundStyle = {
//     backgroundImage: `url('${backgroundImageUrl}')`,
//     backgroundSize: 'fit', // Use 'cover' or 'contain' based on your design preference
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'left',
//     alignItems: 'flex-start', // Align items to the left
//     color: 'white',
//     padding: '20px', // Add padding for better readability
//     position: 'relative',
//   };

//   return (
//     <div style={backgroundStyle}>
//       <h1 className='text-red-500 font-bold text-3xl lg:text-6xl mb-4'>
//         Welcome to <span className='text-black'>ClimaHub</span>
//       </h1>
//       <div className='text-purple-600 text-2xl mb-8'>
//         Explore weather forecasts and insights tailored just for you.
//       </div>

//       <Link to="/prescription" className='text-pink-800 font-bold hover:underline'>
//         <img src="src/assets/bg1/Moon cloud fast wind.png" alt="Description of the image" className='mb-4' />

//         <button className='bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 hover:text-white'>
//           <h2 className='text-blue-800'>
//             Want to safeguard your health
//           </h2>
// //         </button>
// //       </Link>
// //     </div>
// //   );
// // };

// //  export default Home;
// // import React from 'react'
// // import React from 'react';

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiSun, FiCloud } from 'react-icons/fi';
// import backgroundImageUrl from '../assets/images/Home.png';

// const Home = () => {
  
//  // Replace with your pink background image URL
//  // Replace with your snow image URL

//   const headingStyle = {
//     fontFamily: 'cursive', // Choose a beautiful font
//     color: 'white',
//     textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-start">
//       <div
//         className="absolute cover inset-0  z-0"
//         style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
//       ></div>
      

//       <div className="text-white text-center z-20 mt-16">
//         <div className='flex items-center justify-center mb-4'>
//           <h1 className="text-3xl lg:text-6xl" style={headingStyle}>
//             <span className="text-pink-500">
              
//               Welcome to
//             </span>{' '}
            
//             <span className="text-black">ClimaHub</span>
//           </h1>
//         </div>

//         <div className="text-2xl mb-8">
//           Explore weather forecasts and insights tailored just for you.
//           <p className="text-lg text-gray-700 leading-7">
   
//           <div className="flex flex-col items-center justify-center p-8">
//   <ul className='text-3xl text-black font-bold text-center mb-8'>
//     <li>🌦️ Step into a day of well-being guided by ClimaHub</li>
//     <li>Beyond mere weather predictions, we provide bespoke suggestions aligned with the day's forecast.</li>
//     <li>Discover personalized recommendations.</li>
//     <li>Let our insights enhance your day, tailored to the specific weather conditions.</li>
//     <li className='text-yellow-500'>Go to forecast for the report and insights to get personalized opinions</li>
//     <li className="text-white mt-4">
//       To explore and embrace a healthier and happier you, guided by the current weather forecast ☀️🌧️❄️.
//     </li>
//     <Link
//           to="/prescription"
//           className="text-pink-800 font-bold hover:underline mb-4">
//             <button className="bg-pink-500 text-white font-bold py-4 px-4 rounded-full hover:bg-pink-700 hover:text-white mt-4">
//   <h2 className="text-blue-800">Want to safeguard your health? Click here</h2>
// </button>
// </Link>

//   </ul>
// </div>

// </p>

//         </div>

//         <Link
//           to="/prescription"
//           className="text-pink-800 font-bold hover:underline mb-4"
//         >
          

         
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiCloud } from 'react-icons/fi';
import backgroundImageUrl from '../assets/images/Home.png';

const Home = () => {
  const headingStyle = {
    fontFamily: 'cursive',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start">
      <div
        className="absolute cover inset-0 z-0"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      ></div>

      <div className="text-white text-center z-20 mt-16">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-3xl lg:text-6xl" style={headingStyle}>
            <span className="text-pink-500">Welcome to</span>{' '}
            <span className="text-black">ClimaHub</span>
          </h1>
        </div>

        <div className="text-2xl mb-8">
          Explore weather forecasts and insights tailored just for you.
          <p className="text-lg text-gray-700 leading-7">
            <div className="flex flex-col items-center justify-center p-4 lg:p-8">
              <ul className="text-xl lg:text-3xl text-black font-bold text-center mb-8">
                 <li>🌦️ Step into a day of well-being guided by ClimaHub</li>
                <li>
                  Beyond mere weather predictions, we provide bespoke suggestions aligned with the day's forecast.
                 </li>
                 <li>Discover personalized recommendations.</li>
                <li>Let our insights enhance your day, tailored to the specific weather conditions.</li>
                <li className="text-yellow-500">
                   Go to forecast for the report and insights to get personalized opinions
                </li>
                <li className="text-white mt-4">
                  To explore and embrace a healthier and happier you, guided by the current weather forecast ☀️🌧️❄️.
                </li>
              </ul>
              <Link
                to="/prescription"
                className="text-pink-800 font-bold hover:underline mb-4">
                <button className="bg-pink-500 text-white font-bold py-2 px-4 lg:py-4 lg:px-8 rounded-full hover:bg-pink-700 hover:text-white mt-4">
                  <h2 className="text-blue-800">Want to safeguard your health? Click here</h2>
                </button>
              </Link>
            </div>
          </p>
        </div>

        <Link
          to="/prescription"
          className="text-pink-800 font-bold hover:underline mb-4"
        ></Link>
      </div>
    </div>
  );
};


export default Home; 

    


