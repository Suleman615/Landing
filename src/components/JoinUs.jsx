

const JoinUs = () => {
    return (
        <>
            <div className='relative w-full bg-transparent py-10   border-b-2 ' >

                <div className="flex flex-col gap-4 justify-center items-center   md:mx-28     ">
                    <h5 className="text-[48px] text-center text-[#585F6E]">שינוי משפטי<br /> <span className='text-[#2A313F]'> מתאמן עם AI</span></h5>
                    <p className='text-center px-2 text-[#757C89]'>גלה ניהול, ניתוח וסיוע של מסמכים משפטיים חלקים.</p>
                    
                    <div dir='rtl' className="flex  gap-4  font-semibold">

                        <button type="button" className=" bg-primary text-white border  rounded-lg px-4 py-0.5 hover:bg-transparent hover:border-primary hover:text-primary">להתחבר</button>
                        <button type="button" className="bg-white text-primary rounded-lg px-4 py-0.5 border shadow-md border-primary hover:bg-primary hover:text-white">להתחבר</button>
                    </div>

                </div>


<div className="absolute w-full h-[40rem] -bottom-96 -z-10  bottum-gradient"></div>
            </div>

        </>
    )
}

export default JoinUs;