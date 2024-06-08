
import Image from 'next/image';
import image from '../../public/assets/hero.png'
import { Slash } from 'lucide-react';


const About = () => {
    return (
        <div className='w-full bg-[#F9FAFB]'>
        <div dir='rtl' className="  py-32 mx-auto max-w-[1280px]  border-b  border-dashed bg-[#F9FAFB]">

            <div dir='rtl' className='w-full  text-center sm:text-start  sm:px-10 md:px-2   '>
                <h5 className="text-[48px] text-center  text-[#585F6E]">איך להשתמש בחמורבי.</h5>
                <p className=' text-[#757C89] text-center'>סרטון לימודי המבהיר כיצד להשתמש בחמורבי על מנת לשפר את ביצועיך כמשפטן ועורך דין.</p>
            </div>
            <div className='p-4 w-full my-20 h-[100vh]  '>
                <div className='border p-1 rounded-lg w-[80%] md:w-3/4 h-[90%] mx-auto'>
                    <iframe className='w-full h-full rounded-lg' src="https://www.youtube.com/embed/RwU7YY6emYc" title="Placeholder video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>



            </div>
        </div>
        </div>
    )
}

export default About;