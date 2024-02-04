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
        "clear": "Sunny weather ahead, make sure to water your crops adequately.",
        "cloud": "Partly cloudy today, check soil moisture levels.",
        "rain": "Rainy forecast, consider delaying outdoor activities.",
        "snow": "Snow expected, protect sensitive crops from freezing temperatures.",
        "fog": "Foggy conditions, be cautious while working in the fields.",
        "thunderstorm": "Thunderstorm approaching, secure loose objects and take shelter.",
        "Overcast": "overcast"
      }
    },
    {
      "user_type": "Event Planner",
      "conditions": {
        "clear": "Clear skies are perfect for outdoor events, plan accordingly.The absence of rain or wind provides a stable environment for installing stages, decorations, and other event infrastructure.Event planners can take advantage of clear skies to incorporate weather-dependent decorations, such as open-air displays, light installations, or aerial elements.",
        
        "cloud": "Partly cloudy weather, have a backup indoor venue just in case.If weather conditions become less favorable, guests can seamlessly transition to the indoor venue, avoiding discomfort and enhancing their overall experience.",
        "rain": "Rainy forecast, ensure you have tents or coverings for outdoor events.Tents and coverings help preserve the aesthetic and mood of the event by preventing rain from affecting decorations and maintaining the planned ambiance.",
        "snow": "Snowfall expected, consider rescheduling or relocating indoor events.In the case of snowfall, event planners may explore incorporating winter-themed activities into the event or adjusting planned themes.",
        "fog": "Foggy conditions, use additional lighting for evening events.Event planners can leverage additional lighting to enhance the mystical and enchanting atmosphere created by fog, adding a distinctive touch to the overall experience.",
        "thunderstorm": "Thunderstorm approaching, implement safety protocols for outdoor events.Ensure that attendees, staff, and relevant authorities are well-informed about safety measures and any changes to the event schedule due to the approaching thunderstorm."
      }
    },
    {
      "user_type": "Traveler",
      "conditions": {
        "clear": "Clear skies, great weather for sightseeing and outdoor activities.",
        "cloud": "Cloudy weather, pack an umbrella just in case of rain.",
        "rain": "Rain expected, bring waterproof clothing and plan indoor activities.",
        "snow": "Snowfall forecasted, check road conditions and drive safely.",
        "fog": "Foggy conditions, drive carefully and use headlights.",
        "thunderstorm": "Thunderstorm approaching, delay travel plans if possible."
      }
    },
    {
      "user_type": "Student",
      "conditions": {
        "clear":"hello",
            
        "cloud": "Cloudy weather, cozy up indoors and focus on assignments.",
        "rain": "Rainy forecast, use the day to catch up on indoor studying.",
        "snow": "Snowfall expected, enjoy a snow day and study from home.",
        "fog": "Foggy conditions, be cautious while commuting to school.",
        "thunderstorm": "Thunderstorm approaching, stay indoors and study safely."
      }
    },
    {
      "user_type": "Generic",
      "conditions": {
        "clear": "Clear skies, enjoy the pleasant weather!",
        "cloud": "Partly cloudy weather, have a good day!",
        "rain": "Rainy forecast, stay dry and cozy indoors.",
        "snow": "Snowfall expected, embrace the winter wonderland.",
        "fog": "Foggy conditions, drive safely and take your time.",
        "thunderstorm": "Thunderstorm approaching, stay safe and indoors."
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
          <h2 className="text-lg text-red-500 font-bold"> For a {suggestion.user_type} who is currently located at {value}</h2>
          <ul>
            {Object.entries(suggestion.conditions).map(([condition, message]) => (
              < li  key={condition} >
                <strong className='text-green-500' > Prediction based on the data it is<span className='text-bold text-3xl underline text-red-900'> {condition+"y"}</span>: </strong>
                <span className='text-pink-600'>{message}</span>
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
