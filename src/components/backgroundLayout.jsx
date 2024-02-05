import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import { Suspense, lazy } from 'react';

//images
import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'
// const  Clear= lazy(() => import('../assets/images/Clear.jpg'));
// const  Fog= lazy(() => import('../assets/images/fog.png'));
// const  Cloudy= lazy(() => import('../assets/images/Cloudy.jpg'));
// const  Rainy= lazy(() => import('../assets/images/Rainy.jpg'));
// const  Snow= lazy(() => import('../assets/images/snow.jpg'));
// const  Stormy= lazy(() => import('../assets/images/Clear.jpg'));
// const  Sunny= lazy(() => import('../assets/images/Sunny.jpg'));


const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if (weather.conditions) {
     
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        

        setImage(Clear)
        
       
      } else if (imageString.toLowerCase().includes('cloud')) {
        
        
        setImage(Cloudy)
        
        
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        
        
        setImage(Rainy)
        
        
      } else if (imageString.toLowerCase().includes('snow')) {
        
        
        setImage(Snow)
        
        

      } else if (imageString.toLowerCase().includes('fog')) {
        
       
        setImage(Fog)
        
        
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        
        
        setImage(Stormy)
       
       
      }
      
    }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-full w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout