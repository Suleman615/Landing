
import Image from 'next/image';
import iso from '../../public/assets/iso.svg'
import security  from '../../public/assets/security.svg'
import lock from '../../public/assets/lock.svg'
import { SquareCheck } from 'lucide-react';


const Security = () => {
    return (
        <div className='w-full bg-[#F9FAFB]'>
            <div dir='rtl' className="flex flex-wrap justify-around items-center gap-3 md:gap-0 py-32 mx-auto md:mx-28    bg-[#F9FAFB]">

                <div className='w-full md:w-[45%] text-center sm:text-start  sm:px-10 md:px-2   '>
                    <h5 className="text-[48px]   text-[#585F6E]">שינוי משפטי<br /> <span className='text-[#2A313F]'> מתאמן עם AI</span></h5>
                    <p className=' text-[#757C89] mb-16'>גלה ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.</p>
                    <hr />
                    <div className='my-10 flex flex-col gap-2'>
                        <section className='flex gap-2' ><SquareCheck color='blue' /> <p> יים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלק</p></section>
                        <section className='flex gap-2' ><SquareCheck color='blue' /> <p> יים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלק</p></section>
                        <section className='flex gap-2' ><SquareCheck color='blue' /> <p> יים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלק</p></section>

                    </div>
                </div>


                <div className='p-4 w-full md:w-[50%]  '>
                    <div className='flex justify-center gap-6 my-4'>
                        <div className='show-border w-36 p-1 h-fit border-2 rounded-2xl bg-[#F3F4F6] cursor-pointer hover:-mt-2  '>
                            <Image src={security} alt='' className='mx-auto h-32' />
                            <div className="tapered-border  hidden second-border  "></div>
                            <p className='bg-[#E5E7EB] py-3 text-center rounded-b-xl '>SOC2 II</p>
                        </div>


                        <div className='show-border w-36 p-1 h-fit border-2 rounded-2xl bg-[#F3F4F6] cursor-pointer hover:-mt-2  '>
                            <Image src={iso} alt='' className='mx-auto h-32' />
                            <div className="tapered-border  hidden second-border  "></div>
                            <p className='bg-[#E5E7EB] py-3 text-center rounded-b-xl '>SOC2 II</p>
                        </div>

                    </div>

                    <div className='flex justify-center gap-6 my-4'>
                        <div className='show-border w-36 p-1 h-fit border-2 rounded-2xl bg-[#F3F4F6] cursor-pointer hover:-mt-2  '>
                            <Image src={lock} alt='' className='mx-auto h-32' />
                            <div className="tapered-border  hidden second-border  "></div>
                            <p className='bg-[#E5E7EB] py-3 text-center rounded-b-xl '>SOC2 II</p>
                        </div>


                        <div className='show-border w-36 p-1 h-fit border-2 rounded-2xl bg-[#F3F4F6] cursor-pointer hover:-mt-2  '>
                            <Image src={lock} alt='' className='mx-auto h-32' />
                            <div className="tapered-border  hidden second-border  "></div>
                            <p className='bg-[#E5E7EB] py-3 text-center rounded-b-xl '>SOC2 II</p>
                        </div>


                    </div>




                </div>
            </div>
        </div>
    )
}

export default Security;