import Image from 'next/image';

export default function sectionProduct(){
    return(
        <section>
            <div className="mx-auto max-w-[1200px] px-[20px] pb-[90px]">

               <div className="flex flex-col justify-center items-center relative">
                    <h5 className="text-[#821B65] uppercase mobile:text-xs" id="category">Melhores Produtos</h5>
                    <h2 className="text-[48px] mobile:text-2xl text-black font-bold" id="buy">Nova Coleção</h2>
                </div>

                <div className="flex justify-center my-16 pt-[60px] gap-x-[40px] mobile:justify-normal mobile:px-8 mobile:gap-x-10  mobile:overflow-auto">
                    <button className="border-dashed border-2 border-[#821B65] py-[10px] px-[15px] uppercase rounded-[25px]">Todos</button>
                    <button className="uppercase">novo</button>
                    <button className="uppercase">mais vendido</button>
                    <button className="uppercase">em destaque</button>
                    <button className="uppercase">on sall</button>
                </div>

                <div className='flex justify-between gap-y-12 mobile:justify-center flex-wrap mt-[30px]'>
                 
                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                    <   Image className='bg-[#F2F2F2]' src="/img/foodPet1.webp" fill alt="foodPet1"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Joust Duffle Bag</h4>
                        <span className="font-bold mobile:text-base">2000 kz</span>
                    </div>
                 </div>

                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                        <Image src="/img/foodPet2.webp" fill alt="foodPet2"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Endeavor Daytripa</h4>
                        <span className="font-bold mobile:text-base">3000 kz</span>
                    </div>
                 </div>

                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                        <Image src="/img/foodPet3.webp" fill alt="foodPet3"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Impulse Duffle</h4>
                        <span className="font-bold mobile:text-base">2500 kz</span>
                    </div>
                 </div>

                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                        <Image src="/img/foodPet4.webp" fill alt="foodPet4"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Driven Backpack</h4>
                        <span className="font-bold mobile:text-base">3200 kz</span>
                    </div>
                 </div>

                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                        <Image src="/img/foodPet5.webp" fill alt="foodPet5"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Fusion Backpack</h4>
                        <span className="font-bold mobile:text-base">3600 kz</span>
                    </div>
                 </div>

                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                        <Image src="/img/foodPet6.webp" fill alt="foodPet6"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Savvy Shoulder Tote</h4>
                        <span className="font-bold mobile:text-base">3200 kz</span>
                    </div>
                 </div>

                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                        <Image src="/img/foodPet7.webp" fill alt="foodPet7"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Voyage Yoga Bag</h4>
                        <span className="font-bold mobile:text-base">3200 kz</span>
                    </div>
                 </div>

                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                        <Image src="/img/foodPet8.webp" fill alt="foodPet8"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Wayfarer Messenger Bag</h4>
                        <span className="font-bold mobile:text-base">3200 kz</span>
                    </div>
                 </div>

                 <div className="flex flex-col mt-[20px] items-center">
                    <div className='relative w-[270px] h-[320px] mobile:w-[230px] mobile:h-[280px]'>
                        <Image src="/img/foodPet9.webp" fill alt="foodPet9"/>
                    </div>
                    <div className="text-[18px] text-center mt-[22px]">
                        <h4 className="py-[2px] px-[4px] text-white bg-[#91B2C3] mb-[5px] mobile:text-base">Wayfarer Messenger Bag</h4>
                        <span className="font-bold mobile:text-base">4200 kz</span>
                    </div>
                 </div>
                 
                </div>
            </div>
        </section>
    );
}