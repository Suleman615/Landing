'use client'
import dynamic from 'next/dynamic';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image_1 from '../../public/assets/logo-1.svg'
import image_2 from '../../public/assets/logo-2.svg'
import image_3 from '../../public/assets/logo-3.svg'
import Image from 'next/image';


const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });



function LogoSlider() {
  var settings = {
    className:'center bg-[#F3F4F6] w-[100%] overflow-hidden',
    centerMode: true,
    infinite: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <SlickSlider {...settings}>
        <div>
        <Image className='my-2 mx-auto bg-[#F3F4F6]' src={image_1} alt="img"  />
         
        </div>
        <div>
        <Image className='my-2 mx-auto bg-[#F3F4F6]' src={image_2} alt="img"  />
         
        </div>
        <div>
        <Image className='my-2 mx-auto bg-[#F3F4F6]' src={image_3} alt="img"  />
         
        </div>
        <div>
        <Image className='my-2 mx-auto bg-[#F3F4F6]' src={image_1} alt="img"  />
         
        </div>
        <div>
        <Image className='my-2 mx-auto bg-[#F3F4F6]' src={image_2} alt="img"  />
         
        </div>
        <div>
        <Image className='my-2 mx-auto bg-[#F3F4F6]' src={image_3} alt="img"  />
         
        </div>
        <div>
        <Image className='my-2 mx-auto bg-[#F3F4F6]' src={image_1} alt="img"  />
         
        </div>
        <div>
        <Image className='my-2 mx-auto bg-[#F3F4F6]' src={image_2} alt="img"  />
         
        </div>
      </SlickSlider>
    </div>
  );
}

export default LogoSlider;
