import Image from 'next/image';
import img1 from '../../public/assets/brand.png'

const Hero = () => {
    return (
        <>
            <div className="bg-[#F3F4F6] w-full">
                <div dir="rtl" className="flex flex-col  gap-4  justify-center items-center  py-28  px-2  bg-[#F3F4F6]  max-w-[1280px] mx-auto">
                    <h5 className="text-[40px] text-center w-full m-0 p-0 md:max-w-[50vw] text-[#2A313F]">מערכת AI להשגת ביצועי מומחה משפטי במהירות שיא</h5>
                    <p className='text-center text-lg px-2 m-0 p-0 text-[#757C89] max-w-[50%] '>שלש את התפוקה שלך: נתח במהירות שיא כתבי טענות, סכם פסקי דין ומאמרים וכתוב טיעונים משפטיים מנצחים לבתי משפט.</p>
                    <div dir='rtl' className="flex   gap-4 my-6  font-semibold">

                        <button type="button" className=" bg-[#2E3747] text-white rounded-lg px-4 py-0.5 hover:bg-[#1d2129]">נסה ללא תשלום</button>
                        <button type="button" className="bg-white text-[#2E3747] rounded-lg px-4 py-0.5 border-2 shadow-md border-[#eeeff1] hover:border-[#b2b5b8] hover:shadow-lg">התחבר</button>
                    </div>
                    <p className='text-center text-lg px-2 text-[#757C89]'>חמורבי עובד עם ארגוני המשפט והמשרדים הטובים בישראל</p>


                </div>
                
            </div>
        </>
    )
}

export default Hero;