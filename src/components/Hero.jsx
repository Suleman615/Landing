

const Hero = () => {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center pb-10 pt-28  px-2  bg-[#F3F4F6]">
                <h5 className="text-[48px] text-center text-[#585F6E]">שינוי משפטי<br /> <span className='text-[#2A313F]'> מתאמן עם AI</span></h5>
                <p className='text-center text-[#757C89]'>גלה ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.</p>
                <div dir='rtl' className="flex  gap-4  font-semibold">

                    <button type="button" className=" bg-[#2E3747] text-white rounded-lg px-4 py-0.5 hover:bg-[#1d2129]">להתחבר</button>
                    <button type="button" className="bg-white text-[#2E3747] rounded-lg px-4 py-0.5 border-2 shadow-md border-[#eeeff1] hover:border-[#b2b5b8] hover:shadow-lg">להתחבר</button>
                </div>
                <p className='text-center text-[#757C89]'>גלה ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.</p>

            </div>
        </>
    )
}

export default Hero;