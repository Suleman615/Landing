'use client'
import { useState } from "react";
import { Menu } from 'lucide-react';
import Image from "next/image";

import logo from '../../public/assets/brand.svg'



const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    return (
        <><div dir="rtl" className="bg-white w-screen fixed z-20">
            <div dir="rtl" className="flex justify-between  items-center h-16  px-2 md:px-10 border-b bg-white max-w-[1280px] mx-auto ">
                <Image loading='lazy' src={logo} alt="LOGO" />


                {/* wied screen */}
                <div dir="rtl" className=" h-full hidden md:flex gap-2 pl-8 ml-6 font-semibold items-center">
                    <span className="h-full show-border"><a className=" cursor-pointer h-full flex justify-center items-center px-2   " >בית</a> <div className="tapered-border hidden second-border"></div></span>
                    <span className="h-full show-border"><a className="cursor-pointer h-full flex justify-center items-center px-2 " >שומים</a><div className="tapered-border hidden second-border"></div></span>
                    <span className="h-full show-border"><a className="cursor-pointer  h-full flex justify-center items-center px-2 " >שאלות ותשובות</a><div className="tapered-border hidden second-border"></div></span>
                    <span className="h-full show-border"><a className="cursor-pointer  h-full flex justify-center items-center px-2 " >מחירים</a><div className="tapered-border hidden second-border"></div></span>
                    <span className="h-full show-border"><a className="cursor-pointer  h-full flex justify-center items-center px-2 " >אתיקה</a><div className="tapered-border hidden second-border"></div></span>
                    <span className="h-full show-border"><a className="cursor-pointer  h-full flex justify-center items-center px-2 " >תמיכה</a><div className="tapered-border hidden second-border"></div></span>


                </div>

                <div dir="rtl" className="hidden md:flex   gap-4 font-semibold">
                    <button type="button" className=" bg-primary text-white rounded-lg border border-transparent px-4 py-0.5 hover:text-primary hover:bg-transparent hover:border-primary">התחבר</button>
                    <button type="button" className="bg-white text-primary rounded-lg px-4 py-0.5  border shadow-md border-primary hover:bg-primary  hover:shadow-lg hover:text-white">נסה ללא תשלום</button>

                </div>
                <Menu onClick={() => setMobile(!mobile)} className="visible md:hidden" />


                {/* mobile  */}
                {mobile &&
                    <div className="absolute md:hidden top-16 left-0 ps-5 gap-4 w-full flex flex-col items-start bg-[#F3F4F6] bg-opacity-90 py-4">
                        <div className="flex flex-col gap-4  font-semibold items-start">
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >בית</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >שומים</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >שאלות ותשובות</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >מחירים</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >אתיקה</a>
                            <a onClick={() => setMobile(!mobile)} className="cursor-pointer" >תמיכה</a>


                        </div>
                        <div className="flex flex-col gap-4 font-semibold">
                            <button type="button" className=" bg-primary text-white rounded-lg px-4 py-0.5 ">התחבר</button>
                            <button type="button" className="bg-white text-primary rounded-lg px-4 py-0.5  border shadow-md border-primary ">נסה ללא תשלום</button>

                        </div>
                    </div>
                }

            </div>
        </div>
        </>
    )
}


export default Navbar;