
import Image from 'next/image';
import image from '../../public/assets/hero.png'


const Governance = () => {
    return (
        <div className='w-full bg-[#F9FAFB]'>
        


        <div  className="flex flex-wrap justify-around items-center gap-3 md:gap-0 py-32 mx-2 md:mx-28  border-b  border-dashed bg-[#F9FAFB]">

            <div dir='rtl' className='w-full md:w-[45%] text-center sm:text-start  sm:px-10 md:px-2   '>
                <h5 className="text-[48px]   text-[#585F6E]">שינוי משפטי<br /> <span className='text-[#2A313F]'> מתאמן עם AI</span></h5>
                <p className=' text-[#757C89]'>גלה ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.  ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.</p>
            </div>
            <div className='p-4 w-full md:w-[50%]  '>
                <div className='border p-1 rounded-lg'>
                    <div dir='rtl' className='border p-1 rounded-lg font-bold '>
                        <div dir='rtl' className='flex flex-wrap gap-2'>

                        <Image src={image} alt='' className='rounded-lg' />


                        </div>
                    </div>
                </div>



            </div>
        </div>
        </div>
    )
}

export default Governance;