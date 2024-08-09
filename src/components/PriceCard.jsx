import { ArrowLeft, Check, X, Layers } from 'lucide-react';
import card_icon from '../../public/assets/3-layers.svg'

const PriceCard = ({ planPrice, yearPlan }) => {
    return (
        <div className="bg-white border-[1.5px]  m-2 rounded-lg py-4 w-80 px-10 flex flex-col justify-between items-end transition-transform duration-300 hover:scale-105 cursor-pointer">
<span className='mx-auto bg-[#F5F2F1] rounded-full p-2'><Layers className=' bg-[#E5E0DC] px-2 rounded-full' color='#312F33' size={40} /></span>
            <p className="text-[24px] my-4 font-semibold text-[#816E63] text-center w-full">{planPrice.name}</p>

            {/* <div className=" flex flex-row-reverse items-baseline w-full my-4 ">
                <p className="font-bold">$</p>
                <h5 className="text-5xl font-bold">{(yearPlan) ? (planPrice.price_per_month * 12) * 0.75 : planPrice.price_per_month}</h5>
                <p className="font-semibold">{(yearPlan) ? ' שָׁנָה' : ' חוֹדֶשׁ'}\</p>
            </div>
            <p>מחויב {(yearPlan) ? 'שְׁנָתִי' : 'יַרחוֹן'}</p> */}
            <h1 dir='rtl' className='text-[24px]  text-center w-full'><span>{planPrice.price_per_month}</span> דולר לחודש</h1>
            <div className='flex flex-col gap-3 my-6'>
                {planPrice.features.map((item , index) => 
                    <section key={index} dir='rtl' className='flex flex-row gap-2'><section className='h-fit w-10'><Check color='green ' /></section>  <p className='text-[#645F6A]'>{item} </p> </section>
                )}
                 </div>

            <button type="button" className='flex gap-3 font-semibold bg-primary shadow-lg  px-5 py-2 rounded-lg text-white border  hover:border-primary   '><ArrowLeft />התחל ניסיון חינם</button>
            <p className='text-[12px] my-4'>אין צורך בכרטיס אשראי</p>

        </div>
    )
}
export default PriceCard;