
import Image from 'next/image';
import image from '../../public/assets/hero.png'
import { Slash } from 'lucide-react';


const About = () => {
    return (
        <div className='w-full bg-[#F9FAFB]'>
        <div dir='rtl' className="flex flex-wrap justify-around items-center gap-3 md:gap-0 py-32 mx-auto md:mx-28  border-b  border-dashed bg-[#F9FAFB]">

            <div className='w-full md:w-[45%] text-center sm:text-start  sm:px-10 md:px-2   '>
                <h5 className="text-[48px]   text-[#585F6E]">שינוי משפטי<br /> <span className='text-[#2A313F]'> מתאמן עם AI</span></h5>
                <p className=' text-[#757C89]'>גלה ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.</p>
            </div>
            <div className='p-4 w-full md:w-[50%]  '>
                <div className='border p-1 rounded-lg'>
                    <div dir='rtl' className='border p-1 rounded-lg font-bold '>
                        <h1 className='text-2xl text-[#3A4859] my-4'>Prompt: What is the claim of disloyality?</h1>
                        <div dir='rtl' className='flex flex-wrap gap-2'>

                            <div className=' w-full sm:w-[48%] bg-[#F3F4F6] rounded-md p-2'>
                                <div dir='rtl' className='flex justify-between border-b text-[#171717] '>
                                    <p className='font-semibold'>GPT-4</p>
                                    <Slash />
                                </div>
                                <marquee className='font-medium text-[#757C89]' width='100%' direction="up" height="300px">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </marquee>
                            </div>


                            <div className='w-full sm:w-[48%]  bg-[#F3F4F6] rounded-md p-2'>
                                <div dir='rtl' className='flex border-b justify-between '>
                                    <p className='font-semibold'>GPT-4</p>
                                    <Slash />

                                </div>
                                <marquee className='font-medium text-[#757C89]' width='100%' direction="up" height="300px">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </marquee>
                            </div>

                        </div>
                        <p className='text-[#757C89] my-2'>Custom Trained Models are<b className='text-black'> preferred 97% of the time</b></p>
                    </div>
                </div>



            </div>
        </div>
        </div>
    )
}

export default About;