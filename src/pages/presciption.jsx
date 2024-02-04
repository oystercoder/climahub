import React from 'react';
import { useStateContext } from '../context';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import k from '../assets/images/Cover.jpg';

function Prescription() {
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const backgroundStyle = {
    backgroundImage:  `url('${k}')`,
    backgroundSize: 'cover', // Use 'cover' or 'contain' based on your design preference
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
  };


  const { values } = useStateContext('');
  const m = values[0].conditions;
  const r = m.split(', ');
  const f = r[0];
  console.log(f)

  const data = [
    {
      name: 'dressing',
      
      info:
        f === 'Rain' || f === 'Cloudy'
          ? 'Gear up for today in style! 🌧️ Invest in a fashionable waterproof jacket to stay dry during unexpected showers, and don\'t forget a cute umbrella ☔ for added protection. Choose vibrant colors or fun patterns to brighten up gloomy days. Opt for waterproof footwear like rain boots or water-resistant shoes 🥾 to keep your feet comfortable and dry. Embrace light layers 🧥 with a stylish sweater or jacket for overcast conditions, and pair them with comfortable jeans or water-resistant pants 👖. Complete your look with casual shoes suitable for wet conditions 👟, such as closed-toe sneakers. Stay prepared and make a splash with your rainy-day fashion! 💦☂️'
          : f === 'Clear'
          ? 'Embrace the clear weather today with a fashion-forward outfit designed for comfort and style. ☀️ When the sun graces the sky, go for a breezy and laid-back look. A light sundress or a flowy maxi dress will keep you feeling cool and stylish, paired effortlessly with comfortable sandals or open-toe shoes. 🩰 Choose bright and cheerful colors to reflect the vibrant atmosphere, and accessorize with your favorite sunglasses to shield your eyes from the sun\'s rays. 🕶️ Don\'t forget a wide-brimmed hat for added flair and sun protection. Whether you\'re strolling in the park or enjoying a brunch outdoors, let your outfit radiate the carefree and joyful vibes of a clear and sunny day. 🌞👗'
          : f === 'Sunny'
          ? 'Embrace the clear weather today with a fashion-forward outfit designed for comfort and style. ☀️ When the sun graces the sky, go for a breezy and laid-back look. A light T-shirt 👕 or a trendy blouse 👚 paired with a flowy skirt 👗 will keep you feeling cool and stylish, complemented effortlessly with comfortable sandals 👡 or open-toe shoes. Apply some sunscreen 🧴 to protect your skin from the sun\'s rays. Choose bright and cheerful colors to reflect the vibrant atmosphere, and accessorize with your favorite sunglasses 🕶️ to shield your eyes. Don\'t forget a wide-brimmed hat for added flair and sun protection. Whether you\'re strolling on the beach or enjoying a brunch outdoors, let your outfit radiate the carefree and joyful vibes of a clear and sunny day. 🌞'
          : f==='Partially cloudy'
          ?'Get ready for the today with a versatile ensemble suitable for partially cloudy weather. 🌥️ Opt for layers to adapt to changing temperatures. A stylish jacket or sweater 🧥 can provide warmth when needed, paired with a comfortable T-shirt or blouse 👕👚 underneath. Choose bottoms like jeans 👖 or casual pants that offer both comfort and style. Don\'t forget to grab a trendy umbrella ☂️, just in case the clouds decide to release a light drizzle. Complete your look with versatile footwear like sneakers or ankle boots 👟👢. This way, you\'ll be prepared for various weather scenarios while maintaining a fashionable and adaptable style. Enjoy the day, no matter the clouds in the sky!'
          :f==='Snow'
          ?"Embrace the serene winter wonderland in style! 🧥❄️ Opt for a cozy, insulated jacket to ward off the chilly winds. Layer up with thermal or moisture-wicking base clothing for a snug barrier against the frost. Slide into waterproof snow pants to keep your legs shielded. Top off your look with a snug beanie or thermal hat for toasty ears. 🎩 Keep your hands warm with touchscreen-friendly gloves or mittens. Step into the season with insulated, waterproof boots for snowy adventures. 🥾 Wrap your feet in thick, moisture-wicking socks for optimal insulation. Don't forget stylish goggles for protection against winter elements.Now, you're ready to explore the enchanting winter landscape! ❄️🧤👢🌨️"
          :f==='Overcast'
          ?"Embrace the cozy and versatile style of overcast weather with a thoughtfully curated outfit. 🌥️ Opt for layers to accommodate potential changes in temperature throughout the day. A stylish and comfortable sweater or a light jacket 🧥 can provide warmth when needed, paired with a neutral-colored T-shirt or blouse 👕👚. Choose bottoms like jeans 👖 or casual pants that offer both comfort and style. Don't forget to carry a chic umbrella ☂️ for added protection in case of unexpected drizzles. Complete your look with versatile footwear like ankle boots or stylish sneakers 👢👟. This way, you'll be prepared for the subdued atmosphere while maintaining a fashionable and adaptable style. Enjoy the day, no matter the cloud cover! ☁️✨"
    : ' update your wardrobe with a burst of fresh and vibrant styles! 🌸 Embrace the season with light and airy outfits that capture the essence of blooming flowers and clear skies. Opt for flowy dresses or skirts paired with a colorful blouse or a light T-shirt. 🌼 Pastel colors and floral patterns are perfect choices to reflect the beauty of spring. Don\'t forget to add a stylish denim jacket or a light cardigan for those breezy moments. Slip into comfortable sneakers or flats for casual strolls, and accessorize with sunglasses 😎 and a wide-brimmed hat for a touch of chic flair. Let your fashion bloom as you step into the warmth! 🌷🌞'},
    {
      name: 'diet',
      
      info:
      f === 'Rain' || f === 'Cloudy'
        ? 'When the weather turns rainy or cloudy ☔🌧️, it\'s the perfect time to indulge in comforting and warm delights. Picture yourself savoring a steaming bowl of chicken soup 🍲, its aromatic vapors rising with each spoonful, providing both warmth and nourishment. Alternatively, opt for a classic plate of pasta with a rich, hearty sauce 🍝, bringing a burst of flavors to your palate. For a sweet touch, enjoy a cup of hot chocolate ☕, topped with fluffy marshmallows, providing a cozy treat for the rainy or overcast day. Don\'t forget to relish the crispiness of freshly baked cookies 🍪, pairing wonderfully with a cup of tea. Embrace the comforting culinary experience that complements the soothing ambiance of rain or cloudy skies. 🌧️'




        
        : f === 'Clear'
        ? 'Indulge in delightful culinary experiences when the weather is clear. 🌞 Opt for refreshing salads 🥗 with a mix of crisp greens, juicy tomatoes, and vibrant veggies. Enjoy grilled dishes such as BBQ chicken 🍗 or vegetables for that smoky flavor. Treat yourself to a refreshing fruit salad 🍉🍍 as a sweet and hydrating option. Don\'t forget to savor a scoop of your favorite ice cream 🍦 or frozen yogurt for a cool and satisfying treat. Pair your meal with a refreshing iced tea 🥤 or a fruity mocktail 🍹 to complete the sunny dining experience. Embrace the clear skies and indulge in a feast that complements the bright and joyful weather!'
        : f === 'Sunny'
        ? 'Savor the sunny weather with a delightful selection of refreshing and light foods. 🌞 Opt for a colorful salad 🥗 packed with crisp greens, vibrant vegetables, and your favorite protein. Enjoy a refreshing fruit salad 🍍🍓 as a sweet and hydrating treat. Grilled chicken or seafood 🍤🍗 can add a delicious and healthy protein element to your sunny day feast. Stay cool with a refreshing smoothie 🍹 or indulge in some frozen yogurt 🍦 for a sweet and satisfying dessert. Don\'t forget to stay hydrated by sipping on ice-cold beverages like iced tea 🥤 or infused water with slices of citrus fruits. Embrace the sunny vibes and treat yourself to a culinary experience that complements the bright and cheerful weather! 🌞🍴'
        : f==='Partially cloudy'
        
        ?'Prepare for partially cloudy weather with a mix of comforting and versatile foods. 🌥️ Start your day with a warm bowl of oatmeal topped with fresh berries and a drizzle of honey 🍓🍯. For lunch, consider a hearty soup 🍲 that combines seasonal vegetables and protein-rich legumes. Enjoy a balanced dinner with grilled chicken or roasted vegetables 🍗🥦, paired with a side of quinoa or couscous for a wholesome meal. Snack on a mix of nuts and dried fruits 🥜🍇 to keep your energy up throughout the day. Indulge in a cup of herbal tea ☕ to relax and embrace the changing weather. With this diverse and nourishing menu, you\'ll be ready to savor the moments, whether the sky is clear or partially cloudy. 🌥️🍽️'
        :f==='Snow'
        ?'Embrace the snowy weather with cozy and comforting food options. ❄️ Start your day with a warm bowl of oatmeal topped with cinnamon and sliced apples for a delightful winter twist 🍎🥣. For lunch, enjoy a hearty bowl of soup, such as classic chicken noodle or creamy tomato basil 🍲. Indulge in the winter charm with a cozy dinner featuring slow-cooked stews or a comforting plate of pasta with rich, hearty sauces 🍝. Treat yourself to sweet delights like hot chocolate with marshmallows or freshly baked cookies for a perfect ending to a snowy day ☕🍪. With these delicious choices, you\'ll create a culinary experience that complements the beauty of the snowy landscape. ❄️🍽️'
        :f==='Overcast'
        ?'During overcast days, it\'s essential to embrace the cozy vibes and stay comfortable. 🌥️ Opt for layers to adapt to the slightly cooler temperatures. A stylish jacket or sweater can provide warmth, paired with a comfortable T-shirt or blouse underneath. 🧥 Choose bottoms like jeans or casual pants that offer both comfort and style. Don\'t forget to grab a trendy umbrella ☂️, just in case the clouds decide to release a light drizzle. Complete your look with versatile footwear like sneakers or ankle boots 👟👢. This way, you\'ll be prepared for various weather scenarios while maintaining a fashionable and adaptable style. Enjoy the day, no matter the clouds in the sky! ☁️🌈'




        
  : 'When the weather is clear and sunny, opt for refreshing and light food options to complement the bright atmosphere. Start your day with a nutritious fruit salad 🍓🍍 and a yogurt parfait for a burst of freshness. For lunch, enjoy a crisp and vibrant salad with a variety of colorful vegetables 🥗. Consider grilled chicken or fish as a protein option for a satisfying and healthy meal. Keep hydrated with refreshing drinks like iced tea or infused water 🥤. In the evening, savor grilled vegetables 🌽🍆 and lean proteins for a balanced dinner. End your day with a sweet treat, perhaps a fruity sorbet or a slice of watermelon 🍉, to complete the sunny and delightful culinary experience. ☀️🍽️'
    },
    {
      name: 'workout',
      
      info:
      f === 'Rain' || f === 'Cloudy'
        ? 'Embrace the change in weather with a versatile indoor workout routine designed to keep you active and energized. 🌧️❄️ Incorporate a mix of cardio, strength training, and flexibility exercises into your daily regimen. Engage in activities like jumping jacks, high knees, bodyweight exercises, and yoga for a well-rounded fitness experience. 💪🧘‍♀️ If you prefer guided sessions, explore online workout videos or fitness apps that cater to your fitness level. Consider indoor sports like badminton or table tennis for a fun and engaging workout. 🏸🏓 Don\'t forget the option of water workouts if you have access to a pool, such as swimming or water aerobics. 🏊‍♀️ Mix and match  to create a personalized indoor workout routine, ensuring you stay active. 🏋️‍♂️💃'
        : f === 'Clear'
        ? 'Take advantage of the clear weather to enjoy outdoor workouts. 🏃‍♂️🌞 Incorporate activities like running, cycling 🚴‍♀️, or a refreshing morning walk into your fitness routine. The sunny skies provide the perfect backdrop for yoga or outdoor fitness classes, allowing you to soak up the sun while staying active. Don\'t forget to stay hydrated 💧 and apply sunscreen 🧴 to protect your skin from the sun\'s rays. Whether it\'s a peaceful jog in the park or an exhilarating outdoor workout, make the most of the clear weather to boost your fitness and well-being. ☀️🏋️‍♀️'
        : f === 'Sunny'
        ? 'Embrace the sunny weather with invigorating outdoor workouts to elevate your fitness routine. 🌞🏋️‍♀️ Engage in activities like running or jogging, taking advantage of the warmth and natural light. Opt for high-energy exercises such as skipping rope or outdoor aerobics to make the most of the sunshine. Don\'t forget to stay hydrated 💧 throughout your workout and apply sunscreen 🧴 to shield your skin from the sun\'s rays. Whether it\'s a solo workout or a group fitness session, let the sunny weather inspire you to stay active and healthy. ☀️💪'
        : f==='Partially cloudy'
        
        ?'Make the most of partially cloudy today by incorporating a versatile workout routine that adapts to changing weather conditions. 🌥️🏋️‍♂️ Start with a brisk walk or jog, enjoying the fresh air and occasional cloud coverage. Include bodyweight exercises like lunges, squats, and push-ups to enhance strength and flexibility. If the clouds bring a light drizzle, consider activities like dancing or an outdoor yoga session under the partly cloudy sky. 🕺🧘‍♀️ Always be prepared for changing weather by wearing appropriate clothing and staying hydrated throughout your workout. Embrace the dynamic atmosphere, and let your fitness routine shine, even amidst the clouds. ☁️💪'
        :f==='Snow'
        ?'Embrace the winter wonderland with a snowy workout routine that combines fitness and fun. ❄️🏋️‍♀️ Engage in winter sports like cross-country skiing, snowshoeing, or even a playful snowball fight to elevate your heart rate while enjoying the snowy landscape. Build a snowman or try sledding for a full-body workout that adds joy to your exercise routine. Dress warmly in layers, including a waterproof outer layer, to stay comfortable and protected from the chilly temperatures. Remember to stay hydrated and take breaks as needed. Embracing the snow can turn your workout into a magical and invigorating experience. ⛄💪'
        :f==='Overcast'
        ?'Staying active during overcast weather is a great way to boost your mood and energy levels. 🌥️ Consider indoor exercises like a home workout routine that includes bodyweight exercises, yoga, or pilates. Alternatively, if you prefer outdoor activities, a brisk walk or jog can be invigorating even when the sky is cloudy. 🏋️‍♀️🚶‍♂️ Don\'t let the overcast weather be a hindrance; use it as an opportunity to explore different workout options and keep yourself fit and healthy. Remember to stay hydrated and enjoy the refreshing feel of staying active, rain or shine! ☁️💪'
  : 'In the midst of everyday activities and routines, it\'s important to find moments of tranquility and self-reflection. 🌟 Taking a few minutes each day to pause, breathe, and appreciate the present can have a profound impact on your overall well-being. 🧘‍♀️ Whether it\'s enjoying a quiet cup of tea, going for a leisurely walk, or simply sitting in contemplation, these small moments contribute to a sense of balance and mindfulness. 🍵 Embrace the simplicity of the present moment, allowing yourself to recharge and find peace in the midst of life\'s busyness. 🌈✨'
    },
    {
      name: 'body care',
      
      info:
      f === 'Rain' || f === 'Cloudy'
        ? 'During rainy or cloudy weather, it\'s essential to give your skin and hair some extra care. 💦 Moisturize your skin with a hydrating lotion or cream to combat the dampness in the air. 🌧️ Consider using a gentle cleanser to remove any impurities without stripping your skin of its natural oils. For your hair, use a nourishing conditioner to prevent frizz and maintain moisture. 🌿 Shield your skin from harmful UV rays with a light sunscreen, even on cloudy days. Don\'t forget to stay hydrated by drinking plenty of water and incorporating antioxidant-rich foods into your diet. ☔🧴💆‍♀️💧'
        : f === 'Clear'
        ? 'In clear weather, your skincare routine can be simplified while focusing on protection and freshness. ☀️ Start with a lightweight and non-greasy sunscreen to shield your skin from the sun\'s rays. 🌞 Cleanse your face with a gentle facial wash to maintain a fresh and radiant complexion. Hydrate your skin with a moisturizer that suits your skin type, keeping it nourished throughout the day. 💦 For your hair, consider using a UV-protectant spray to shield it from the sun. Stay hydrated by drinking water and indulge in fruits rich in vitamins to promote a healthy glow. 🍉🍇 Embrace the clear weather with a radiant and protected skin appearance! 😊🌸'
        : f === 'Sunny'
        ? 'In sunny weather, prioritize skincare to protect your skin from the sun\'s rays and stay fresh. ☀️ Begin with a high SPF sunscreen to shield your skin, and reapply throughout the day. Cleanse your face with a refreshing cleanser to remove impurities and sweat. Hydrate with a lightweight moisturizer to keep your skin nourished. 💦 Consider wearing a wide-brimmed hat and sunglasses for additional protection. For your hair, use UV-protective products to prevent damage. Stay cool by drinking plenty of water and enjoying hydrating foods like watermelon and cucumber. 🍉🥒 Embrace the sunny day with radiant and well-protected skin! 😎🌞'
        : f==='Partially cloudy'
        
        ?'Maintaining a consistent skincare routine is key for healthy and radiant skin. 🌟 Start with a gentle cleanser to remove impurities, followed by a hydrating moisturizer for nourishment. During rainy or cloudy weather, apply broad-spectrum sunscreen for UV protection. 💧 Stay hydrated with water for overall skin health. In clear, sunny weather, prioritize sun protection and hydration. 🌞 Exfoliate regularly for a healthy glow. For hair care, use a nourishing shampoo and conditioner to prevent frizz. Adapt your routine to partially cloudy days. Consistent skincare will help you embrace each day confidently. ✨🌦️💆‍♀️'
        :f==='Snow'
        ?'Embracing the beauty of snowy weather requires extra care for your skin and hair. ❄️ Start with a gentle cleanser to remove impurities without stripping moisture. Use a rich moisturizer to combat the dryness caused by cold temperatures. Don\'t forget sunscreen, as the snow reflects UV rays. ❄️ For your hair, switch to a hydrating shampoo and conditioner to prevent brittleness. Consider wearing protective hats and scarves to shield your skin from cold winds. Keep your body and hair hydrated by drinking water and using leave-in conditioners. 🧤❄️ Take care of your skin and hair to enjoy the enchanting snowy days while looking and feeling your best! 💙✨'
        :f==='Overcast'
        ?'In overcast weather, when the sky is draped in clouds, it\'s essential to pay attention to your skin and hair. ☁️ Start your routine with a gentle cleanser to remove impurities, followed by a nourishing moisturizer to combat any dryness. Since UV rays can penetrate clouds, applying sunscreen is still crucial. For your hair, opt for hydrating products to prevent frizz and maintain moisture. Consider using a wide-brimmed hat or a stylish scarf to protect your face from any unpredictable drizzles. Don\'t forget to stay hydrated and embrace the cozy, overcast atmosphere with a radiant and well-nurtured appearance! ✨💆‍♀️'
  : 'In any weather, maintaining overall well-being is key. 🌦️ Eat a balanced diet rich in nutrients, stay hydrated, and get regular exercise to keep your body healthy. Practice good skincare habits, including cleansing and moisturizing, to promote clear and radiant skin. For your hair, use products suitable for your hair type and consider protective styles during extreme weather conditions. Prioritize a good night\'s sleep to support your overall health and boost your immune system. 🌈 Taking care of your body holistically will contribute to your overall wellness and help you feel your best, no matter the weather! 🌟💪'
    },

  ];

  return (
    <div style={backgroundStyle}>
    <div className='w-3/4 h-full m-auto'>
      <div className='mt-5'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-transparent h-[450px] text-black rounded-xl flex'>
              <div className='rounded-l-xl bg-indigo-500 flex justify-center items-center'>
                
              </div>
              <p className='font-bold uppercase text-red-600 text-3xl'>
  {d.name}
</p>


              <div className='p-6 flex flex-direction:column'>
                
               
                <p className='text-bold text-3xl text-white'>{d.info}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}

export default Prescription;

