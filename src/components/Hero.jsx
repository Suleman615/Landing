

const Hero = () => {
    return (
        <>
        <div className="bg-[#F3F4F6]">
            <div dir="rtl" className="flex flex-col  gap-4 md:gap-10 justify-center items-center pb-32 pt-28  px-2  bg-[#F3F4F6]  max-w-[1280px] mx-auto">
                <h5  className="text-[48px] text-center text-[#2A313F]">מערכת AI לשכנוע בעולם המשפט</h5>
                <p  className='text-center px-2 text-[#757C89] max-w-[50%] m'>גלה חולשות וחוזקות בכתבי טענות והסכמים, נתח וסכם רעיונות כהרף עין וכתוב מחדש בעברית מעולה טיעונים משפטיים מנצחים לבתי המשפט.</p>
                <div dir='rtl' className="flex   gap-4  font-semibold">

                    <button type="button" className=" bg-[#2E3747] text-white rounded-lg px-4 py-0.5 hover:bg-[#1d2129]">נסה ללא תשלום</button>
                    <button type="button" className="bg-white text-[#2E3747] rounded-lg px-4 py-0.5 border-2 shadow-md border-[#eeeff1] hover:border-[#b2b5b8] hover:shadow-lg">התחבר</button>
                </div>
                <p className='text-center px-2 text-[#757C89]'>חמורבי עובד עם ארגוני המשפט והמשרדים הטובים בישראל</p>

            </div>
            </div>
        </>
    )
}

export default Hero;