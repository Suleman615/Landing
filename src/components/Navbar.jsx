'use client'
import { useState } from "react";
import { Menu } from 'lucide-react';


const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    return (
        <><div className="bg-[#F3F4F6] w-full">
            <div dir="rtl" className="flex justify-between  items-center h-16  px-2 md:px-10 border-b bg-[#F3F4F6]  max-w-[1280px] mx-auto ">
                <h2 className="text-[24px] font-bold">@חמורבי.</h2>
                <Menu onClick={() => setMobile(!mobile)} className="visible md:hidden" />


                {/* wied screen */}
                <div dir="rtl" className=" h-full hidden sm:flex  pl-8 ml-6 font-semibold items-center">
                    <a className="cursor-pointer h-full flex justify-center items-center px-2 gradient-background  " >יישומים</a>
                    <a className="cursor-pointer h-full flex justify-center items-center px-2 gradient-background" >שאלות ותשובות</a>
                    <a className="cursor-pointer  h-full flex justify-center items-center px-2 gradient-background" >תוכניות</a>
                    <a className="cursor-pointer  h-full flex justify-center items-center px-2 gradient-background" >בלוג</a>
                    <a className="cursor-pointer  h-full flex justify-center items-center px-2 gradient-background" >תמיכה</a>

                </div>

                <div dir="rtl" className="hidden md:flex   gap-4 font-semibold">
                    <button type="button" className=" bg-[#2E3747] text-white rounded-lg px-4 py-0.5 hover:bg-[#1d2129]">התחבר</button>
                    <button type="button" className="bg-white text-[#2E3747] rounded-lg px-4 py-0.5  border-2 shadow-md border-[#eeeff1] hover:border-[#b2b5b8] hover:shadow-lg">נסה ללא תשלום</button>

                </div>


                {/* mobile  */}
                {mobile &&
                    <div className="absolute md:hidden top-16 left-0 ps-5 gap-4 w-full flex flex-col items-start bg-[#F3F4F6] bg-opacity-90 py-4">
                        <div className="flex flex-col gap-4  font-semibold items-start">
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >יישומים</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >שאלות ותשובות</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >תוכניות</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >בלוג</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >תמיכה</a>

                        </div>
                        <div className="flex flex-col gap-4 font-semibold">
                        <button type="button" className=" bg-[#2E3747] text-white rounded-lg px-4 py-0.5 hover:bg-[#1d2129]">התחבר</button>
                    <button type="button" className="bg-white text-[#2E3747] rounded-lg px-4 py-0.5  border-2 shadow-md border-[#eeeff1] hover:border-[#b2b5b8] hover:shadow-lg">נסה ללא תשלום</button>

                        </div>
                    </div>
                }

            </div>
            </div>
        </>
    )
}


export default Navbar;