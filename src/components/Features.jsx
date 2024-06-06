
import Image from 'next/image';
import img1 from '../../public/assets/hero.png'
import { Search,Sparkles, BookOpen } from 'lucide-react';

const Features = () => {
    return (
        <>
            <div className="flex flex-col gap-3 bg-[#F7F8F9] py-20 border-b">
                <h2 className="text-center text-[60px]  text-[#484F5E]">מאפיינים</h2>
                <p className="text-center text-[16px] text-[#828894] ">אלו הן רק כמה תכונות שתקבלו באמצעות הכל עורך דין AI</p>
                <div className="flex flex-wrap gap-10 justify-center items-center my-10 px-8">

                    <div className="w-80 bg-[#F3F4F6] text-[#374151  ] rounded-lg border flex flex-col px-2 items-center gap-1 py-2">
                        <div dir='rtl' className='flex w-full px-2 justify-between items-center text-[#495261]'>
                            <p className='font-semibold '>Workflows</p>
                            <Search  />
                        </div>
                        <section className='p-2 border  rounded-lg'>
                            <Image src={img1} alt=''  />
                        </section>
                        <p className="text-center text-[#828894] font-semibold px-6">צור קשר עם הצ'אטבוט המופעל על ידי AI שלנו כדי לחפש מידע משפטי, לסכם מסמכים ולקבל תשובות מדויקות לשאלות המשפטיות שלך.</p>
                    </div>


                    <div className="w-80 bg-[#F3F4F6] text-[#374151] rounded-lg border flex flex-col px-2 items-center gap-1 py-2">
                        <div dir='rtl' className='flex w-full px-2 justify-between items-center text-[#495261]'>
                            <p className='font-semibold'>Workflows</p>
                            <Sparkles  className=""/>        
                                            </div>
                        <section className='p-2 border  rounded-lg'>
                            <Image src={img1} alt=''  />
                        </section>
                        <p className="text-center text-[#828894] font-semibold px-6">צור קשר עם הצ'אטבוט המופעל על ידי AI שלנו כדי לחפש מידע משפטי, לסכם מסמכים ולקבל תשובות מדויקות לשאלות המשפטיות שלך.</p>
                    </div>



                    <div className="w-80 bg-[#F3F4F6] text-[#374151] rounded-lg border flex flex-col px-2 items-center gap-1 py-2">
                        <div dir='rtl' className='flex w-full px-2 justify-between items-center text-[#495261]'>
                            <p className='font-semibold'>Workflows</p>
                            <BookOpen />                        </div>
                        <section className='p-2 border  rounded-lg'>
                            <Image src={img1} alt=''  />
                        </section>
                        <p className="text-center text-[#828894] font-semibold px-6">צור קשר עם הצ'אטבוט המופעל על ידי AI שלנו כדי לחפש מידע משפטי, לסכם מסמכים ולקבל תשובות מדויקות לשאלות המשפטיות שלך.</p>
                    </div>

              


                </div>
            </div>
        </>
    )
}

export default Features;