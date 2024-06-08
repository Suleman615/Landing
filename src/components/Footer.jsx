
import { Linkedin } from 'lucide-react';



const Footer = () => {
    return (
        <>
            <div dir='rtl' className='w-full bg-[rgb(249,250,251)]'>

                <div className="flex flex-wrap justify-around items-center gap-3 md:gap-0 py-10 mx-auto md:mx-28   bg-[#F9FAFB]">

                    <div className='w-full md:w-[45%] text-center sm:text-start  sm:px-10 md:px-2   '>
                        <h5 className="text-[48px]   text-[#2A313F]">חמורבי.</h5>
                    </div>
                    <div dir='rtl' className='p-4 w-full md:w-[50%]  '>
                        <h3 className="text-md font-semibold   text-[#2A313F]">מערכת AI לשכנוע בעולם המשפט</h3>
                        <p className='text-center md:text-start max-w-[80%] text-[#757C89]'>גלה חולשות וחוזקות בכתבי טענות והסכמים, נתח וסכם רעיונות כהרף עין וכתוב מחדש בעברית מעולה טיעונים משפטיים מנצחים לבתי המשפט</p>

                    </div>
                </div>

                <div className="flex flex-wrap justify-around  gap-3 md:gap-0 py-10 mx-auto md:mx-28 pb-28   bg-[#F9FAFB]">

                    <div dir='rtl' className='w-full md:w-[45%] text-center sm:text-start  sm:px-10 md:px-2   '>
                        <p  className='text-center md:text-start text-[#757C89] my-3 px-4 md:px-0'>@ כל הזכויות שמורות 2024</p>
                        {/* <section dir='rtl' className='flex gap-4 items-center justify-center md:justify-start'>
                            <p>Follow Us on: </p>
                            <a className=' px-2 hover:text-blue-700 border-r' href=""><svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14" fill=''><g clip-path="url(#a-:R57qula:)"><path d="M11.0256.672119h2.1466L8.48225 6.03295 14 13.3264H9.67983L6.2965 8.90237 2.42433 13.3264H.2765l5.01667-5.7342L0 .672703h4.42983L7.48825 4.71637 11.0256.672119ZM10.2725 12.0419h1.1894L3.7835 1.88954H2.50717L10.2725 12.0419Z" fill="currentColor"></path></g><defs><clipPath id="a-:R57qula:"><path fill="currentColor" d="M0 0h14v14H0z"></path></clipPath></defs></svg>
                            </a>
                            <a className=' hover:text-blue-700' href=""> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a-:R77qula:)"><path d="M11.9274 11.9303H9.85425V8.68175c0-.77467-.01575-1.77158-1.08033-1.77158-1.08092 0-1.246.84291-1.246 1.71441v3.30572H5.45475V5.25h1.9915v.91058h.02683c.27825-.525.95492-1.07916 1.96584-1.07916 2.10058 0 2.48908 1.3825 2.48908 3.18208l-.0006 3.6668ZM3.11325 4.33592c-.66733 0-1.20342-.54017-1.20342-1.20459 0-.66383.53667-1.20341 1.20342-1.20341.665 0 1.204.53958 1.204 1.20341 0 .66442-.53958 1.20459-1.204 1.20459Zm1.0395 7.59438h-2.079V5.25h2.079v6.6803ZM12.9646 0H1.03308C.462 0 0 .4515 0 1.00858V12.9914C0 13.5491.462 14 1.03308 14H12.9628C13.5333 14 14 13.5491 14 12.9914V1.00858C14 .4515 13.5333 0 12.9628 0h.0018Z" fill="currentColor"></path></g><defs><clipPath id="a-:R77qula:"><path fill="currentColor" d="M0 0h14v14H0z"></path></clipPath></defs></svg>
                            </a>
                        </section> */}
                    </div>
                    <div dir='rtl' className=' w-full md:w-[50%] flex flex-wrap justify-center md:justify-between  gap-10 px-4 pl-2 md:pl-56  '>
                        <ul className="text-[#757C89] flex flex-col gap-4 ">
                            <li className="font-semibold text-[#2A313F]">חמורבי.</li>
                            <li>יישומים</li>
                            <li>שאלות ותשובות</li>
                            <li>תוכניות</li>
                            <li>בלוג </li>
                            <li>מי אנחנו</li>
                            <li>תמיכה</li>
                            <li>תקנון </li>

                        </ul>
                        {/* <ul className="text-[#757C89] flex flex-col gap-4 ">
                            <li className="font-semibold text-[#2A313F]">Resources</li>
                            <li>Legal</li>
                            <li>Press</li>

                        </ul> */}


                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;