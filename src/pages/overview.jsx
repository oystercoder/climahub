
// import React, { useState, useEffect } from 'react'
// import { Suspense, lazy } from 'react';

// import { useStateContext } from '../context';
 import { BackgroundLayout } from '../components';
// import { WeatherCard } from '../components'
// import { MiniCard } from '../components'
// import ErrorFallback from '../components/ErrorFallback';
// import  {ErrorBoundary}  from 'react-error-boundary';
 import BarGraphComponent from '../components/BarGraphComponent';


// const  BarGraphComponent= lazy(() => import('../components/BarGraphComponent'));
// const  { BackgroundLayout }  =lazy(() => import('../components'));

// function Overview() {
 
//   const [input, setInput] = useState('');
 
//   const { weather, thisLocation, values, place, setPlace } = useStateContext('');
  
//   const submitCity = () => {
//     setPlace(input);
//     setInput('');
//   }


//   useEffect(() => {
//     console.log(values);
//   }, [weather]);
//   return (
//     <div className='w-full h-screen text-white px-8'>
//       <nav className='w-full p-3 flex justify-between items-center'>

//         <h1 className='font-bold text-red-500 tracking-wide text-2xl'>Shall we see what Mother Nature has in store for us </h1>
       
//       </nav>
//       <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
//         <Suspense fallback={<p><i>Loading...</i></p>}>
//       <BackgroundLayout></BackgroundLayout>
//       </Suspense>
//       </ErrorBoundary>

//       <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
//         <WeatherCard
//           place={thisLocation}
//           windspeed={weather.wspd}
//           humidity={weather.humidity}
//           temperature={weather.temp}
//           heatIndex={weather.heatIndex}
//           iconString={weather.conditions}
//           conditions={weather.conditions}
//         />
//         <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
//           {values?.slice(1, 7).map(curr => {
//             return (
//               <MiniCard
//                 key={curr.datetime}
//                 time={curr.datetime}
//                 temp={curr.temp}
//                 iconString={curr.conditions}
//               />
//             )
//           })
//           }
//         </div>
//         <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
//         <Suspense fallback={<p><i>Loading...</i></p>}>
//         <BarGraphComponent data={values} />
//         </Suspense>
//         </ErrorBoundary>
//       </main>
//     </div>
//   )
// }
// export default Overview
import React, { useState, useEffect, lazy, Suspense } from 'react';

import { useStateContext } from '../context';
import { WeatherCard, MiniCard } from '../components';


// const BarGraphComponent = lazy(() => import('../components/BarGraphComponent'));
// const BackgroundLayout = lazy(() => import('../components/BackgroundLayout'));


function Overview() {
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, setPlace } = useStateContext('');

  const submitCity = () => {
    setPlace(input);
    setInput('');
  }

  useEffect(() => {
    console.log(values);
  }, [weather]);

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold text-red-500 tracking-wide text-2xl'>Shall we see what Mother Nature has in store for us </h1>
      </nav>

     
        
      <BackgroundLayout/> <BackgroundLayout/>
        
      

      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatIndex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {values?.slice(1, 7).map(curr => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>

       
          
            <BarGraphComponent data={values} />
         
        
      </main>
    </div>
  );
}

export default Overview;
