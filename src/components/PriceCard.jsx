import { ArrowLeft, Check, X } from 'lucide-react';

const PriceCard = ({ planPrice, yearPlan }) => {
    return (
        <div className="bg-white rounded-md py-4 w-80 px-10 flex flex-col items-end">
            <p className="text-[13px] my-4 font-semibold text-[#2E3747]">{planPrice.name}</p>

            <div className=" flex flex-row-reverse items-baseline w-full my-4 ">
                <p className="font-bold">$</p>
                <h5 className="text-5xl font-bold">{(yearPlan) ? (planPrice.price_per_month * 12) * 0.75 : planPrice.price_per_month}</h5>
                <p className="font-semibold">{(yearPlan) ? ' שָׁנָה' : ' חוֹדֶשׁ'}\</p>
            </div>
            <p>מחויב {(yearPlan) ? 'שְׁנָתִי' : 'יַרחוֹן'}</p>
            <div  className='flex flex-col gap-3 my-6'>
                <section  className='flex flex-row-reverse gap-2'>{(planPrice.feature_1) ? <Check color='green' /> : <X color='gray' />} <p>תכונה </p> </section>
                <section className='flex flex-row-reverse gap-2'>{(planPrice.feature_2) ? <Check color='green' /> : <X color='gray' />} <p>תכונה </p></section>
                <section className='flex flex-row-reverse gap-2'>{(planPrice.feature_3) ? <Check color='green' /> : <X color='gray' />} <p>תכונה </p></section>
                <section className='flex flex-row-reverse gap-2'>{(planPrice.feature_4) ? <Check color='green' /> : <X color='gray' />} <p>תכונה </p></section>
                <section className='flex flex-row-reverse gap-2'>{(planPrice.feature_5) ? <Check color='green' /> : <X color='gray' />} <p>תכונה</p></section>
            </div>

            <button type="button" className='flex gap-3 font-semibold bg-[#F3F4F6] shadow-lg p-3 rounded-lg text-[#2E3747] border-2 border-[#F3F4F6] hover:border-white  '><ArrowLeft />התחל ניסיון חינם</button>
<p className='text-[12px] my-4'>אין צורך בכרטיס אשראי</p>
        </div>
    )
}
export default PriceCard;