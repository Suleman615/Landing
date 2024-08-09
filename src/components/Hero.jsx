

const Hero = () => {
    return (
        <>
            <div className="bg-[#F3F4F6] w-full">
                <div dir="rtl" className="flex flex-col  gap-4  justify-center items-center  py-28  px-2  bg-[#F3F4F6]  max-w-[1280px] mx-auto">
                    <h5 className="text-[40px] text-center w-full m-0 p-0 md:max-w-[50vw] text-[#2A313F]">מערכת AI להשגת ביצועי מומחה משפטי במהירות שיא</h5>
                    <p className='text-center text-lg px-2 m-0 p-0 text-[#757C89] w-[90%] md:max-w-[50%] '>שלש את התפוקה שלך: נתח במהירות שיא כתבי טענות, סכם פסקי דין ומאמרים וכתוב טיעונים משפטיים מנצחים לבתי משפט.</p>
                    <div dir='rtl' className="flex   gap-4 my-6  font-semibold">

                        <button type="button" className=" bg-primary text-white border rounded-lg px-4 py-0.5 hover:bg-transparent hover:border-primary hover:text-primary">נסה ללא תשלום</button>
                        <button type="button" className="bg-white text-primary rounded-lg px-4 py-0.5 border border-primary shadow-md  hover:text-white hover:bg-primary">התחבר</button>
                    </div>
                    <span className="-order-1 md:order-1"><div className="  mx-auto tapered-border" style={{width:'70% '}}></div><p className='text-center text-lg px-2 py-2 text-[#757C89]'>חמורבי עובד עם ארגוני המשפט והמשרדים הטובים בישראל</p><div className="tapered-border mx-auto  " style={{width:'70% '}}></div></span>


                </div>
                
            </div>
        </>
    )
}

export default Hero;