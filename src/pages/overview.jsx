import React, { useState,useEffect } from 'react'
import search from '../assets/icons/search (1).svg';
import { useStateContext } from '../context';
import { BackgroundLayout } from '../components';
import {WeatherCard} from '../components'
import {MiniCard} from '../components'

function Overview() {
    console.log("kfn")
    const [input,setInput]=useState('');
    console.log("hi")
    const {weather,thisLocation,values,place,setPlace}=useStateContext('');
    console.log(weather.values);
const submitCity=()=>{
    setPlace(input);
    setInput('');
}
    
    
    // useEffect(() => {
    //     console.log("hellooo");
    // }, [weather]);
  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>

        <h1 className='font-bold text-red-500 tracking-wide text-2xl'>Shall we see what Mother Nature has in store for us </h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
      
        
    
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              
              submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
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
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}
export default Overview
