
import Image from 'next/image';
import img1 from '../../public/assets/hero.png'
import { Search, NotebookPen, PencilLine, Split, FileStack } from 'lucide-react';

const Features = () => {
    return (
        <>
        <div className='bg-[#F7F8F9] w-full'>
            <div className="flex flex-col gap-3  bg-[#F7F8F9] py-20 border-b px-2 md:px-5 max-w-[1280px] mx-auto">
                <h2 className="text-center text-[40px]  text-[#484F5E]">יישומים</h2>
                <p dir='rtl' className="text-center text-lg text-[16px] text-[#828894] ">אלו הן רק כמה מהתכונות שתיישמו באמצעות חמורבי.</p>
                <div className="flex flex-wrap gap-4  lg:gap-10 justify-center items-center my-10 ">




                    {/* 1 */}
                    <div dir='rtl' className="w-[24rem] h-96 bg-[#F3F4F6] shadow-md text-[#374151] rounded-lg border flex flex-col px-2 items-center gap-1 py-2">
                        <div dir='rtl' className='flex w-full px-2 justify-between items-center text-[#495261]'>
                            <p className='font-semibold'>הסבירו במהירות החלטות, פסקי דין ומאמרים</p>
                            <Split />               
                                     </div>
                        <section className='p-1 border h-80  rounded-lg'>
                            <Image src={img1} alt=''  className='h-full rounded-lg'/>
                        </section>
                        <p className="text-center text-[#828894] font-semibold px-6">זהו כהרף עין נקודות מפתח, טיעונים עיקריים, פרטים חיוניים, ונימוקים במסמכים משפטיים, החלטות ופסקי דין.</p>
                    </div>


                    {/* 2 */}
                    <div dir='rtl' className="w-[24rem] h-96 bg-[#F3F4F6] shadow-lg text-[#374151] rounded-lg border flex flex-col px-2 items-center gap-1 py-2">
                        <div dir='rtl' className='flex w-full px-2 justify-between items-center text-[#495261]'>
                            <p className='font-semibold'>ערכו כתבי טענות משכנעים לבימ"ש</p>
                            <PencilLine />                        </div>
                        <section className='p-2 border h-80  rounded-lg'>
                            <Image src={img1} alt=''  className='h-full rounded-lg'/>
                        </section>
                        <p className="text-center text-[#828894] font-semibold px-6">ערכו טענות משפטיות בהתאם לחוזקות וחולשות של הצד שכנגד, ונסחו אותן ללא מאמץ בהתאם לדפוסים התואמים את פסיקות בית המשפט.</p>
                    </div>

                    {/* 3 */}
                    <div dir='rtl' className="w-[24rem] h-96 bg-[#F3F4F6] shadow-lg text-[#374151  ] rounded-lg border flex flex-col px-2 items-center gap-1 py-2">
                        <div dir='rtl' className='flex w-full px-2 justify-between items-center text-[#495261]'>
                            <p className='font-semibold '>סיעור מוחות עם ישות בעלת יכולות על אנושיות</p>
                            <Search />
                        </div>
                        <section className='p-2 border h-80  rounded-lg'>
                            <Image src={img1} alt=''  className='h-full rounded-lg'/>
                        </section>
                        <p className=" text-[#828894] text-justify font-semibold px-6">מחקר משפטי וחידוד הטענות המשפטיות שלך מעולם לא היו קלים יותר. שוחח עם חמורבי בזמן אמת כדי לקבל תובנות, הסברים ורעיונות יצירתיים ומפתיעים להשגת יתרון על יריביך.</p>
                    </div>

                    {/* 4 */}
                    <div dir='rtl' className="w-[24rem] h-96 bg-[#F3F4F6] shadow-lg text-[#374151] rounded-lg border flex flex-col px-2 items-center gap-1 py-2">
                        <div dir='rtl' className='flex w-full px-2 justify-between items-center text-[#495261]'>
                            <p className='font-semibold'>סכמו ללא מאמץ מסמכים ארוכים וסבוכים</p>
                            <NotebookPen />                        </div>
                        <section className='p-2 border h-80  rounded-lg'>
                            <Image src={img1} alt=''  className='h-full rounded-lg'/>
                        </section>
                        <p className="text-center text-[#828894] font-semibold px-6">חסכו זמן קריאה יקר. תמצתו מסמכים סבוכים והציגו את עיקרי הטיעונים והרעיונות במאמר קצר ערוך בעברית מעולה.</p>
                    </div>

                    {/* 5 */}
                    <div dir='rtl' className="w-[24rem] h-96 bg-[#F3F4F6] shadow-lg text-[#374151] rounded-lg border flex flex-col px-2 items-center gap-1 py-2">
                        <div dir='rtl' className='flex w-full px-2 justify-between items-center text-[#495261]'>
                            <p className='font-semibold'>השוו בזריזות בין מסמכים משפטיים</p>
                            <FileStack />             
                                       </div>
                        <section className='p-2 border h-80  rounded-lg'>
                            <Image src={img1} alt=''  className='h-full rounded-lg'/>
                        </section>
                        <p className="text-center text-[#828894] font-semibold px-6">בצעו השוואה מפורטת בין שני מסמכים או יותר בתוך הדגשת ההבדלים והדמיון ביניהם מבחינה רעיונית ומבחינה מילולית.</p>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Features;