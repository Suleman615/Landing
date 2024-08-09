
import { Linkedin } from 'lucide-react';



const Footer = () => {
    return (
        <>
        <div className='w-full bg-[#fbfaf9]'>
            <div dir='rtl' className='max-w-[1280px] mx-auto md:px-28 bg-[#fbfaf9] pt-10 '>

                <div  className="flex flex-col-reverse md:flex-row relative flex-wrap justify-around items-start   gap-3 md:gap-0 py-10 mx-auto   bg-[#fbfaf9]">

                    <div className='w-full md:w-[45%]  sm:text-start  sm:px-10 md:px-2   '>
                        <ul className="text-[#757C89] flex flex-col gap-4 px-4 ">
                            <li className="font-semibold text-[#2A313F]">חמורבי.</li>
                            <li>יישומים</li>
                            <li>שאלות ותשובות</li>
                            <li>תוכניות</li>
                            <li>בלוג </li>
                            <li>מי אנחנו</li>
                            <li>תמיכה</li>
                            <li>תקנון </li>

                        </ul>
                    </div>
                    <div dir='rtl' className='px-4 flex   flex-col justify-between  max-h-full w-full md:w-[50%]  '>
                        <div>
                        <h3 className="text-lg  md:text-start font-semibold   text-[#2A313F]">מערכת AI להשגת ביצועי מומחה משפטי במהירות שיא</h3>
                        <p className=' md:text-justify  w-full md:max-w-[80%] text-[#757C89]'>שלש את התפוקה שלך: נתח במהירות שיא כתבי טענות, סכם פסקי דין ומאמרים וכתוב טיעונים משפטיים מנצחים לבתי משפט.</p>
                        </div>
                        <p  className=' absolute mb-0  md:mb-9 bottom-0 md:text-start text-[#757C89]   md:px-0'>@ כל הזכויות שמורות 2024</p>

                    </div>
                </div>

                
            </div>
            </div>

        </>
    )
}

export default Footer;