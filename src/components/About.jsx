
import Image from 'next/image';
import image from '../../public/assets/hero.png'
import { Slash } from 'lucide-react';


const About = () => {
    return (
        <div className='w-full h-[600px]  md:h-auto pb-20  bg-[#022359]'>
            <div dir='rtl' className="  pt-20 pb-0  mx-auto max-w-[1280px]     bg-[#022359]">

                <div dir='rtl' className='w-full  text-center sm:text-start  sm:px-10 md:px-2   '>
                    <h5 className="text-[40px] text-center  text-white">איך להשתמש בחמורבי.</h5>
                    <p className=' text-white px-2 text-lg text-center'>סרטון לימודי המבהיר כיצד להשתמש בחמורבי על מנת לשפר את ביצועיך כמשפטן ועורך דין.</p>
                </div>
                <div className=' w-full mt-20 h-[60vh]  md:h-[500px] 2xl:h-[50vh] my-24  xl:mb-2   '>
                    <div className='border-4 shadow-lg border-[#FEFEFE] rounded-lg w-[80%] md:w-3/4  2xl:w-[100%] h-full  mx-auto'>
                        <iframe className='w-full h-full  rounded-lg ' src="https://www.youtube.com/embed/RwU7YY6emYc" title="How To Use" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;