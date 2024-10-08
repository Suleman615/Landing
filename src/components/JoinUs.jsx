

const JoinUs = () => {
    return (
        <>
            <div className='relative w-full bg-transparent py-10 overflow-y-hidden  border-b-2 ' >

                <div className="flex flex-col gap-4 justify-center items-center   md:mx-28     ">
                    <h5 className="text-[48px] text-center text-[#585F6E]">להתחיל היום</h5>
                    <p className='text-center px-2 text-[#757C89]'>צלול לתוך התכונות החדשניות של הצ'אט בוט שלנו בינה מלאכותית שנועדה להפוך את העבודה המשפטית שלך ליעילה יותר."</p>
                    
                    <div dir='rtl' className="flex  gap-4  font-semibold">

                        <button type="button" className=" bg-primary text-white border  rounded-lg px-4 py-0.5 hover:bg-transparent hover:border-primary hover:text-primary">נסה ללא תשלום</button>
                        {/* <button type="button" className="bg-white text-primary rounded-lg px-4 py-0.5 border shadow-md border-primary hover:bg-primary hover:text-white">להתחבר</button> */}
                    </div>

                </div>


<div className="absolute w-full h-[40rem] -bottom-[32rem] -z-10  bottum-gradient"></div>
            </div>

        </>
    )
}

export default JoinUs;