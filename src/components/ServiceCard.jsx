
import Image from 'next/image';


const ServiceCard = ({ index, image, title, desc }) => {
    return (



        <div className={`flex   ${((index % 2) === 0) ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}  justify-center  md:gap-20  mx-2 md:mx-28  `}>

            <div dir='rtl' className='text-start flex-shrink-0 max-w-[500px]  '>
                <h5 className="text-[40px]     text-[#585F6E]">{title}</h5>
                <p className=' text-[#757C89]'>{desc}</p>
            </div>

            <div className=' flex-shrink-0 flex-grow  '>
                    <Image src={image} alt='' className='rounded-lg ' />
            </div>
        </div>

    )
}

export default ServiceCard;