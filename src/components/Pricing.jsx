'use client'
import { useState } from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
    const [yearly, setYearly] = useState(false)

    let plans = [
        {
            name: 'מַתנֵעַ',
            desc: '',
            price_per_month: 0,
            features: [
                'העלה 3 קבצים',
                "גישה לבוט AI של Lawyer עם מאגר הידע המשפטי של המנהל",
                "10 אסימונים ראשוניים לשאילתות בסיסיות ופונקציונליות צ'אט",
            ]


        },
        {
            name: 'תֶקֶן',
            desc: '',
            price_per_month: 10,
            features: [
                "כל התכונות הבסיסיות",
                "20 אסימונים ראשוניים נוספים עבור כל הפונקציות",
                "יכולת העלאת קבצים ליצירת בסיס ידע משפטי מותאם אישית",
                "גישה לפונקציונליות בסיסית של מסמכים",
            ],

        },
        {
            name: 'פּרֶמיָה',
            desc: '',
            price_per_month: 30,
            features: [
                "כל תכונות ה-Pro",
                "80 אסימונים ראשוניים נוספים עבור כל הפונקציות",
                "פונקציונליות השוואת מסמכים",
                "גישה לתכונת Rewrite עבור התאמת מסמכים ספציפיים לשופט",
            ]

        }

    ]

    return (
        <div className="flex flex-col gap-3  pt-20">
            <h2 className="text-center text-[40px] md:text-[60px] font-bold mt-20 md:mt-0">תמחור ותוכניות</h2>
            <p className="text-center px-2 text-[16px] ">בחר את התוכנית המתאימה ביותר לצרכים המשפטיים שלך.</p>

            <div className="flex flex-row-reverse justify-center items-center gap-3  py-10 text-[19px]">
                <p>יַרחוֹן</p>
                <div onClick={() => setYearly(!yearly)} className={`w-14 cursor-pointer h-6 rounded-full flex items-center px-1  ${(yearly) ? 'justify-start bg-[#2E3747]' : 'justify-end bg-black bg-opacity-15'}`}>
                    <div className="bg-white w-4 h-4 rounded-full"></div>
                </div>
                <p>שְׁנָתִי</p>
                <p className="bg-black bg-opacity-15 rounded-full px-2 text-[13px] text-[#2E3747] font-semibold ">חסוך 25%</p>

            </div>

            <div className="flex flex-wrap flex-row-reverse justify-center pb-10 gap-10">
                {plans.map((plan, index) => <PriceCard key={index} planPrice={plan} yearPlan={yearly} />)}
            </div>
            {/* <div className="tapered-border mt-1  md:mt-36 max-w-[1080px] mx-auto"></div> */}

        </div>
    )
}

export default Pricing;