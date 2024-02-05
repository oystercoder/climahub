
import React from 'react';
import { useStateContext } from '../Context'
import { useEffect } from 'react';
import { FiUnderline } from 'react-icons/fi';
import value from '../components/header';



const DataDisplayComponent = ({ selectedOption }) => {
  const { weather } = useStateContext()
  // console.log('w', weather);
  // let i = weather.conditions
  const suggestions = [
    {
      "user_type": "Farmer",
      "conditions": {
        "clear": "☀️ Prepare for sunny days ahead by ensuring your crops receive ample watering. 🌱💧 Proper hydration is essential for their growth and health. Stay vigilant and nurture your plants to thrive under the bright sun. Happy gardening! 🌞🌿.",
        "cloud": "🌦️ Partly cloudy skies bring a pleasant mix of sun and clouds today. 🌿 Ensure your plants receive adequate sunlight and monitor soil moisture to keep them thriving. ⚖️💦 Adjust watering routines based on the changing weather conditions. 🌷 Take advantage of the mild weather to attend to your garden tasks, from pruning to fertilizing. 🌞 Embrace the beauty of a partly cloudy day and let your garden flourish under the gentle interplay of sunlight and shade. 🌳🌼",
        "rain": "🌾 Attention, farmers! Check the forecast; rain is expected. 🌧️ Ensure your crops are well-irrigated and consider postponing any fieldwork. 🚜 Monitor soil moisture levels to optimize planting conditions. ⚠️ Take precautions to protect livestock from adverse weather effects. 🌦️ Stay informed and plan your agricultural activities accordingly. 🌱 Adapt your schedule to make the most of the upcoming weather conditions for a successful harvest. 🌈 Happy farming!",
        "snow": "🌨️ Winter is here, farmers! Prepare your crops for the cold by covering sensitive plants with frost blankets. ❄️ Check heating systems for greenhouses to maintain optimal temperature. 🌱 Monitor soil moisture regularly, as winter dry spells can occur. 🌬️ Stay informed about frost predictions and take necessary precautions to safeguard your farm during chilly nights. 🚜🌨️",
        "fog": "🌬️ Winter weather brings challenges, but farmers can prepare by insulating crops and providing extra care to livestock. 🚜 Implementing frost protection measures is essential, such as covering sensitive plants and providing shelter for animals. 🧤 Stay informed about upcoming cold spells through weather forecasts to plan and mitigate potential risks. 🌾 With thoughtful planning and proactive measures, farmers can navigate the winter season successfully. 🌨️👩‍🌾",
        "thunderstorm": "⚡ Thunderstorm alert! Take precautions by securing outdoor equipment and moving livestock to sheltered areas. 🌪️ Stay indoors and away from windows, and avoid electrical appliances during the storm. 🚗 If driving, pull over safely and wait until visibility improves. 📻 Stay tuned to weather updates for real-time information and follow safety guidelines. ⛈️ Prioritize safety and be prepared for sudden weather changes during the thunderstorm.",
        "Overcast": "☁️ Overcast skies today! While no precipitation is expected, it might be a bit gloomy. 🌧️ If you're planning outdoor activities, consider bringing a light jacket or sweater. 🚶‍♂️ Adjust your plans for a cozy indoor day, perhaps with a good book or movie. 📚🎬 Keep an umbrella handy just in case, and enjoy the unique atmosphere of an overcast day. ☔️✨"
      }
    },
    {
      "user_type": "Event Planner",
      "conditions": {
        "clear": "☀️ Clear skies ahead! Perfect weather for your event. 🎉 Plan for outdoor activities and bask in the sunny ambiance. Set up vibrant decorations to complement the clear sky. 🌈 Ensure your guests have sunscreen to enjoy the day comfortably. 🧴✨",
        
        "cloud": "☁️ Partially cloudy skies today. Consider adding a tent or shelter for your event to be prepared for any sudden changes in weather. ☂️ Enhance the atmosphere with cozy lighting and enjoy the unique blend of sun and clouds. 🌦️ Keep attendees informed about the weather and provide light jackets if needed. 🧥✨",

        "rain": "🌧️ Rain in the forecast! Don't forget to have waterproof coverings and umbrellas available for your event. ☔ Consider relocating outdoor activities to covered areas or have a backup plan. 🏠 Set up tents or canopies to keep guests dry and comfortable. 🎶 Embrace the rhythm of the rain by creating a cozy ambiance with soft lighting and sheltered spaces. 🌧️💡",
        "snow": "❄️ Snowfall expected! Prepare for a winter wonderland by adding festive decorations like snowflakes and twinkling lights. ☃️ Clear pathways for safe passage and consider providing warm blankets or heaters for outdoor areas. ⛄ Create a magical atmosphere with snow-themed activities and cozy corners. 🧤❤️ Ensure guests are warmly dressed and offer hot beverages like cocoa to keep spirits high. ❄️🎄",
        "fog": "Attention event managers! 📢 The weather forecast predicts a mix of sun and clouds. Ensure a seamless event by planning for both indoor and outdoor spaces. 🌞 Set up shaded areas with cool refreshments for guests to beat the heat. In case of rain, have backup plans ready and consider tent rentals for outdoor areas. ☔ Keep attendees informed about weather updates through our app ",
        "thunderstorm": "⚠️ Be prepared for a thunderstorm at your event! Safety first – ensure all outdoor activities are temporarily halted, and guide attendees to sheltered areas. ⛈️ Implement a clear communication plan to keep everyone informed about the situation. Provide umbrellas and rain ponchos for attendees who need to move between locations. 🌂 In case of power outages, have backup generators ready.",
        "Overcast": "",
      }
    },
    {
      "user_type": "Traveler",
      "conditions": {
        "clear": "Get ready for a day of clear skies and sunshine! 🌞 Pack your sunglasses to shield your eyes from the bright sun. 🕶️ Plan outdoor activities like hiking or sightseeing to make the most of the beautiful weather. Don't forget your sunscreen to protect your skin from the sun's rays. 🧴 Whether you're exploring new destinations or relaxing on a beach, enjoy the clear sky and make unforgettable memories. Safe travels! ✈️🌍 ",
        "cloud": "Get ready for a day of clear skies and sunshine! 🌞 Pack your sunglasses to shield your eyes from the bright sun. 🕶️ Plan outdoor activities like hiking or sightseeing to make the most of the beautiful weather. Don't forget your sunscreen to protect your skin from the sun's rays. 🧴 Whether you're exploring new destinations or relaxing on a beach, enjoy the clear sky and make unforgettable memories. Safe travels! ✈️🌍 ",
        "rain": "Pack your umbrella and raincoat, traveler, as rain is in the forecast for your journey. 🌧️ Stay dry and comfortable by choosing waterproof clothing and sturdy footwear. Plan indoor activities or explore covered attractions to make the most of your trip. Embrace the cozy atmosphere of a rainy day and create memorable experiences, raindrops and all! ☔✈️",
        "snow": "Traveler, get ready for a winter wonderland on your journey! ❄️ Pack warm layers, including a cozy jacket, gloves, and a hat, to stay comfortable in the snowy conditions. Choose sturdy boots for secure footing, and consider exploring winter-themed activities like snowboarding or building snowmen. Capture the enchanting snowy landscapes and make your travel experience truly magical. Safe and joyful travels in the snow! 🌨️✨",
        "fog": "For travelers today facing foggy conditions, exercise caution and drive at reduced speeds for enhanced safety. 🌫️ Ensure your vehicle's headlights are on low beam and maintain a safe following distance. If visibility is severely impaired, consider pulling over to a safe location until conditions improve. Stay updated on weather forecasts to plan your journey wisely and enjoy a secure and serene travel experience. Safe travels! 🚗🌐",
        "thunderstorm": "In the midst of an overcast day, travelers should anticipate varied weather conditions. ☁️ Plan accordingly by bringing a light jacket or sweater to stay comfortable. 🧥 Be flexible with outdoor activities and have a backup plan for indoor options. 🌧️ Check the weather updates to ensure a seamless and enjoyable travel experience despite the changing skies. ✈️🌍",
        "OverCast":"",
      }
    },
    {
      "user_type": "Student",
      "conditions": {
        "clear":"Hello student! Enjoy the clear skies and sunshine today. 🌞 It's the perfect weather to take a break, go for a walk, or study outdoors. Grab your sunglasses to shield your eyes from the bright sun. 🕶️ Make the most of this beautiful day and recharge for your upcoming academic tasks. Happy studying! 📚✨",
            
        "cloud": "Cloudy weather ahead for students! 🌥️ It's a great time to focus on indoor activities and catch up on assignments. Create a cozy study environment with soft lighting and comfortable seating. ☁️💡 Don't forget to take short breaks and look out for the silver lining in the clouds. Stay productive and make the most of this calm weather to enhance your learning experience. 📚✨",
        "rain": "Rainy forecast for students! 🌧️ Grab your favorite umbrella ☔️ and cozy up indoors. It's the perfect time to delve into your favorite books or work on creative projects. Embrace the calming sound of raindrops as you focus on your studies. Stay dry, stay inspired, and make the most of this rainy day! 📚🌧️",
        "snow": "Snowy day for students! ❄️ Bundle up in warm layers and enjoy the magical winter wonderland. If classes are canceled, make the most of the day with some outdoor fun, like building snowmen ⛄ or having a friendly snowball fight. Don't forget to sip on a cup of hot cocoa ☕ as you tackle your assignments in the cozy indoors. Stay warm, stay safe, and embrace the snowy day vibes! 📚❄️",
        "fog": "Foggy day for students! 🌫️ Take extra precautions while commuting to and from classes, ensuring visibility and safety. Embrace the cozy atmosphere by spending some quiet time indoors, catching up on readings or enjoying a good book. Remember to dress warmly and carry any necessary gear for a comfortable journey. Stay focused, stay safe, and let the foggy weather create a serene backdrop for your academic pursuits! 📚🌫️",
        "thunderstorm": "Thunderstorm alert for students! ⚡ Ensure your safety by staying indoors during the storm. Avoid outdoor activities and unplug electronic devices to prevent any damage. Use this time to catch up on assignments, review notes, or indulge in a cozy study session. Keep updated on weather notifications and wait for the storm to pass. Prioritize your well-being and make the most of this opportunity to focus on academics amidst the thunder and lightning."
        
      }
    },
    {
      "user_type": "Generic",
      "conditions": {
        "clear": "Clear skies ahead! ☀️ Enjoy the delightful weather with outdoor activities and a positive mood. Whether it's a leisurely walk, a picnic, or simply basking in the sunshine, take advantage of the bright day. Don't forget your sunglasses to shield your eyes from the radiant sun. Embrace the clarity and warmth of the weather, making it a perfect day for relaxation and joy. 🌞🌳",
        "cloud": "Partly cloudy skies today. ⛅️ The weather offers a pleasant blend of sunshine and clouds, creating a comfortable ambiance. Consider outdoor activities with friends or family, such as a light hike or a picnic. Pack a light jacket just in case the weather shifts. Enjoy the dynamic play of sunlight and clouds, making it a great day to appreciate nature. 🌤️🚶‍♀️",
        "rain": "Rainy forecast ahead! ☔️ It's time to cozy up indoors with a good book or a movie. The soothing sound of rain against your window creates a perfect backdrop for relaxation. Grab a warm drink, stay dry, and take advantage of the rainy day to enjoy some indoor activities. 🌧️📚",
        "snow": "Snowfall on the horizon! ❄️ Get ready for a winter wonderland. Bundle up in your coziest attire and head outside for some frosty fun. Build a snowman, engage in a friendly snowball fight, and savor the magical beauty of snow-covered landscapes. Don't forget a cup of hot cocoa to keep you warm as you enjoy the serene charm of a snowy day.",
        "fog": "⚠️ When driving in foggy conditions, reduce speed and maintain a safe following distance for limited visibility.🛑 If visibility becomes extremely poor, consider pulling over to a safe location and waiting for the fog to lift before continuing.",
        "thunderstorm": "📻 Stay informed through weather forecasts and warnings.🏠 Seek shelter indoors to avoid lightning and strong winds.⚡ Avoid using electrical appliances and plumbing during a storm.🚗 If driving, pull over to a safe location away from trees and avoid flooded roads."
      }
    }
  ]

  const weatherConditions = ['shower', 'storm', 'thunder', 'fog', 'snow', 'rain', 'cloud', 'clear'];
  const filteredSuggestions = suggestions
    .filter(suggestion => suggestion.user_type === selectedOption)
    .map(suggestion => {
      const userConditions = suggestion.conditions;
      const matchingConditions = Object.keys(userConditions).filter(condition => weather.conditions.toLowerCase().includes(condition.toLowerCase()));
      // console.log(condition.toLowerCase());
      const filteredConditions = matchingConditions.reduce((acc, condition) => {
        acc[condition] = userConditions[condition];
        return acc;
      }, {});
      return { user_type: suggestion.user_type, conditions: filteredConditions };
    });

  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-4">Suggestions for you</h2> */}
      <div className="border-b border-black w-full mb-4"></div>
      <div className="bg-white p-6 rounded-lg shadow-md h-70 w-100 overflow-y-auto">
      {filteredSuggestions.map((suggestion, index) => (
        <div key={index}>
          <h2 className="text-lg text-red-500 font-bold"> For a {suggestion.user_type}:</h2>
          <ul>
            {Object.entries(suggestion.conditions).map(([condition, message]) => (
              < li  key={condition} >
                <strong className='text-green-500' > Prediction based on the data the weather is <span className='text-bold text-3xl underline text-red-900'> {condition}</span>: </strong>
                <span className='text-pink-600 text-2xl'>{message}</span>
              </li>
            ))}
          </ul>
        </div>
      ))
      }
      </div>
      
  {/* max-h-80 sets a maximum height for the container; adjust as needed */}
  <p className="text-red-700">{suggestions[selectedOption]}</p>
  </div>

)

     }

export default DataDisplayComponent;
