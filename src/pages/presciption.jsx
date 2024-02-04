import React from 'react';
import { useStateContext } from '../context';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Prescription() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { values } = useStateContext('');
  const m = values[0].conditions;
  const r = m.split(', ');
  const f = r[0];

  const data = [
    {
      name: 'dressing',
      img: 'src/assets/image10.jpeg',
      info:
        f === 'Rain' || f === 'Overcast'
          ? 'sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.sedfghujkdrfgh ertgyhuj While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.'
          : f === 'Clear'
          ? 'clear'
          : f === 'sunny'
          ? 'sunny'
          : '',
    },
    {
      name: 'diet',
      img: 'src/assets/image10.jpeg',
      info:
        'Cows Have Best Friends:Cows can form close bonds and friendships with other cows. They often choose to spend time with specific companions and can become stressed when separated from their "best friends."Space is Silent:Unlike many depictions in movies, space is a vacuum, and therefore, there is no air or medium to carry sound waves. In space, no one can hear you scream.Lobsters are Immortal:While not truly immortal, lobsters do not exhibit typical aging. They show no signs of decreased fertility, loss of appetite, or physical decline as they age, leading to the myth of their potential immortality.',
    },
  ];

  return (
    <div className='w-3/4 h-full m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white h-[450px] text-black rounded-xl flex'>
              <div className='rounded-l-xl bg-indigo-500 flex justify-center items-center'>
                
              </div>

              <div className='p-6 flex flex-direction:column'>
                {/* <p className='text-xl font-semibold'>{d.name}</p> */}
                <img className='h-44 w-44' src='src\assets\image12.jpeg' alt=""/>
                <p>{d.info}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Prescription;
