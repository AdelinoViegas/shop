import Image from 'next/image'
import Link from 'next/link';

export default function sectionOffer(){
    return(
<section className='h-[420px] greate:h-[500px] bg-[#701B63]' id='grid-template'>
    <div className='relative mobile:hidden'>
        <div className='bg-[#FFD868] w-[100%] h-[100%] mobile:translate-x-0 mobile: skew-x-0 translate-x-[-48px] skew-x-[13deg]'></div>
        <div className='absolute mobile:static top-[50%] left-[50%] translate-x-[-70%] translate-y-[-35%]'>
            <div className='relative w-[240px] h-[300px] greate:w-[300px] greate:h-[380px]'>
                <Image  src="/img/dogOffer.webp" fill alt="dog-banner-offer"/>
            </div>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center mobile:p-20'>
            <h5 className='mb-[8px] font-semi-bold text-[18px] text-[#FFD867] uppercase'>50% de desconto salvo</h5>
            <h2 className='mb-[8px] text-[32px] text-white'>A melhor parte da oferta</h2>
            <p className='mb-[20px] text-[18px] text-center text-white'>Venha conhecer os nossos produtos para os seus animais de estimação são de extrema qualidade e têm uma boa duração para que possa ser bem conservado,
                será um prazer seres um dos nossos cliente.
            </p>
            <button className='w-[180px] mobile:w-[140px] h-[55px] mobile:h-[50px] bg-[#FFD868] rounded-[15px] text-[18px] mobile:text-[15px] font-semibold'>Compre Agora</button>
    </div>
    <div className='flex justify-center items-center'>
        <div className='relative w-[240px] h-[220px] greate:w-[280px] greate:h-[260px]'>
            <Image src="/img/catOffer.webp" fill alt="cat-banner-offer"/>
        </div>
    </div>
</section>
    );
} 