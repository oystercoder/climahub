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


const DataDisplayComponent = ({ selectedOption }) => {
    const { weather } = useStateContext()
    let i = weather.conditions
    const suggestions = [
        {
          
          "conditions": {
            "clear": "Sunny weather ahead, make sure to water your crops adequately.",
            "cloud": "Partly cloudy today, check soil moisture levels.",
            "rain": "Rainy forecast, consider delaying outdoor activities.",
            "snow": "Snow expected, protect sensitive crops from freezing temperatures.",
            "fog": "Foggy conditions, be cautious while working in the fields.",
            "thunderstorm": "Thunderstorm approaching, secure loose objects and take shelter."
          }
        },
        {
          "user_type": "Event Planner",
          "conditions": {
            "clear": "Clear skies are perfect for outdoor events, plan accordingly.",
            "cloud": "Partly cloudy weather, have a backup indoor venue just in case.",
            "rain": "Rainy forecast, ensure you have tents or coverings for outdoor events.",
            "snow": "Snowfall expected, consider rescheduling or relocating indoor events.",
            "fog": "Foggy conditions, use additional lighting for evening events.",
            "thunderstorm": "Thunderstorm approaching, implement safety protocols for outdoor events."
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
            "clear": "Clear skies, perfect weather for outdoor study sessions.",
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

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Suggestions for you</h2>
      <div className="border-b border-black w-full mb-4"></div>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-80">
        {/* max-h-80 sets a maximum height for the container; adjust as needed */}
        <p className="text-gray-700">{suggestions[selectedOption]}</p>
      </div>
    </div>
  );
};

export default DataDisplayComponent;

