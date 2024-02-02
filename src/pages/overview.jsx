import React, { useState,useEffect } from 'react'
import search from '../assets/icons/search (1).svg';
import { useStateContext } from '../context';

function Overview() {
    console.log("kfn")
    const [input,setInput]=useState('');
    console.log("hi")
    const weather=useStateContext('');
    
    
    // useEffect(() => {
    //     console.log("hellooo");
    // }, [weather]);
  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
{console.log("logged something!!") &&  
        <h1 className='font-bold text-black tracking-wide text-3xl'>Weather App</h1>}
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
      
        
    
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sumit the form
             // submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      </div>
      )
        }

export default Overview

