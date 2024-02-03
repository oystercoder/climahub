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

      
      
     


// export default Home;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';




const Home = () => {


  const backgroundImageUrl = 'src/assets/bg1/bg.jpg'; // Replace with your actual image URL

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

  return (
    <div style={backgroundStyle}>
      {/* <h1 className='text-red-500 font-bold text-3xl lg:text-6xl'>
        Welcome to <span className='text-black'>ClimaHub</span>
      </h1>
      <div className='text-purple-600 text-2xl '>
        Explore weather forecasts and insights tailored just for you.
      </div> */}

      <Link to="/prescription" className='text-pink-800 font-bold hover:underline'>
        <button className='bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 hover:text-white flex items-start'>
          <h2 className='text-blue-800'>
            Want to safeguard your health
          </h2>
        </button>
        </Link>
      
      </div>

      
  )
  
};


export default Home;

