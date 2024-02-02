import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url('src/assets/bg1/bg.jpg')`, // Adjust the path based on your file structure
    backgroundSize: 'fit',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the container takes at least the full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
  };

  const sliderContainerStyle = {
    position: 'relative',
    width: '80%', // Adjust the width of the slider container as needed
    margin: 'auto',
    height: '50vh', // Set the height to half of the viewport height
    marginBottom: '20px',
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    position: 'absolute',
    bottom: '0',
    width: '100%',
  };

  const schoolDayImages = [
   'src/assets/bg1/bg.jpg',
   'src/assets/bg1/bg.jpg',
   'src/assets/bg1/bg.jpg'
    // Add more image paths as needed
  ];

  return (
    <div style={backgroundStyle}>
      <h2 className='text-black font-bold text-4xl text-left mt-0'>Welcome to ClimaHub!</h2>
      <p className='text-black bold'>Explore weather forecasts and insights tailored just for you.</p>

      <div style={sliderContainerStyle}>
        <Slider {...sliderSettings}>
          {schoolDayImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`School Day ${index + 1}`}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Home = () => {
//   const backgroundStyle = {
//     backgroundImage: `url('src/assets/bg1/bg.jpg')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//     position: 'relative',
//   };

//   const sliderContainerStyle = {
//     position: 'relative',
//     width: '80%',
//     maxWidth: '800px', // Set a maximum width for the slider container
//     margin: 'auto',
//     height: '50vh',
//     marginBottom: '20px',
//     overflow: 'hidden',
//   };

//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   const schoolDayImages = [
//     'src/assets/bg1/bg.jpg',
//     'src/assets/bg1/bg.jpg',
//     'src/assets/bg1/bg.jpg',
//     // Add more image paths as needed
//   ];

//   const CustomPrevArrow = ({ onClick }) => (
//     <div className="slick-arrow custom-prev-arrow" onClick={onClick}>
//       {'<'}
//     </div>
//   );

//   const CustomNextArrow = ({ onClick }) => (
//     <div className="slick-arrow custom-next-arrow" onClick={onClick}>
//       {'>'}
//     </div>
//   );

//   return (
//     <div style={backgroundStyle}>
//       <h2 className='text-red-700 font-bold text-7xl text-left mt-0'>Welcome to ClimaHub!</h2>
//       <p className='text-black bold'>Explore weather forecasts and insights tailored just for you.</p>

//       <div style={sliderContainerStyle}>
//         <Slider {...sliderSettings}>
//           {schoolDayImages.map((image, index) => (
//             <div key={index}>
//               <img
//                 src={image}
//                 alt={`School Day ${index + 1}`}
//                 style={{ objectFit: 'contain', width: '100%', height: '100%' }}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Home;

