'use client'
import { useState } from "react";
import { Menu } from 'lucide-react';


const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    return (
        <>
            <div dir="rtl" className="flex justify-between  items-center h-16  px-2 md:px-10 border-b bg-[#F3F4F6] fixed w-full ">
                <h2 className="text-[24px] font-bold">עורך דין AI</h2>
                <Menu onClick={() => setMobile(!mobile)} className="visible md:hidden" />


                {/* wied screen */}
                <div dir="rtl" className=" h-full hidden sm:flex  pl-8 ml-6 font-semibold items-center">
                    <a className="cursor-pointer h-full flex justify-center items-center px-2 gradient-background  " >מאפיינים</a>
                    <a className="cursor-pointer h-full flex justify-center items-center px-2 gradient-background" >תמחור</a>
                    <a className="cursor-pointer  h-full flex justify-center items-center px-2 gradient-background" >תמיכה</a>
                    <a className="cursor-pointer  h-full flex justify-center items-center px-2 gradient-background" >למה לנו?</a>

                </div>

                <div dir="rtl" className="hidden md:flex   gap-4 font-semibold">
                    <button type="button" className=" bg-[#2E3747] text-white rounded-lg px-4 py-0.5 hover:bg-[#1d2129]">להתחבר</button>
                    <button type="button" className="bg-white text-[#2E3747] rounded-lg px-4 py-0.5  border-2 shadow-md border-[#eeeff1] hover:border-[#b2b5b8] hover:shadow-lg">להתחבר</button>

                </div>


                {/* mobile  */}
                {mobile &&
                    <div className="absolute md:hidden top-16 left-0 ps-5 gap-4 w-full flex flex-col items-start bg-slate-600 bg-opacity-40 py-4">
                        <div className="flex flex-col gap-4  font-semibold items-start">
                            <a className="cursor-pointer" >מאפיינים</a>
                            <a className="cursor-pointer" >תמחור</a>
                            <a className="cursor-pointer" >תמיכה</a>
                            <a className="cursor-pointer" >למה לנו?</a>

                        </div>
                        <div className="flex flex-col gap-4 font-semibold">
                        <button type="button" className=" bg-[#2E3747] text-white rounded-lg px-4 py-0.5 hover:bg-[#1d2129]">להתחבר</button>
                    <button type="button" className="bg-white text-[#2E3747] rounded-lg px-4 py-0.5  border-2 shadow-md border-[#eeeff1] hover:border-[#b2b5b8] hover:shadow-lg">להתחבר</button>

                        </div>
                    </div>
                }

            </div>
        </>
    )
}


export default Navbar;