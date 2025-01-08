import Image from 'next/image';
import Link from 'next/link';

export default function sectionPet(){
    return(
        <section>
            <div className="pt-[120px] px-[45px] pb-[90px] bg-[#F2F2F2]">
                
                <div className="flex pb-[25px] flex-col justify-center items-center relative">
                    <h5 className="text-[#821B65] mobile:text-xs" id="category">CATEGORIAS DE TENDÊNCIAS</h5>
                    <h2 className="text-[48px] mobile:text-2xl font-bold" id="buy">Compre Por Categoria</h2>
                </div>

                <div className="flex justify-between mobile:flex-col mobile:justify-center mobile:gap-y-12 pt-[40px]">

                <div>
                    <div className="flex flex-col items-center gap-y-[12px]">
                        <div className="thumb">
                            <Image src="/img/category1.webp" width="150" height="150" alt="cats" />
                        </div>
                        <div className="text-[18px] font-semi-bold">Cats</div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center gap-y-[12px]">
                        <div className="thumb">
                            <Image src="/img/category2.webp" width="150" height="150" alt="gold-fish" />
                        </div>
                        <div className="text-[18px] font-semi-bold">Gold fish</div>
                    </div>
                </div>
                
                <div>
                    <div className="flex flex-col items-center gap-y-[12px]">
                        <div className="thumb">
                            <Image src="/img/category3.webp" width="150" height="150" alt="parrot" />
                        </div>
                        <div className="text-[18px] font-semi-bold">Parrot</div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center gap-y-[12px]">
                        <div className="thumb">
                            <Image src="/img/category4.webp" width="150" height="150" alt="dog" />
                        </div>
                        <div className="text-[18px] font-semi-bold">Dog</div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center gap-y-[12px]">
                        <div className="thumb">
                            <Image src="/img/category5.webp" width="150" height="150" alt="rabbits" />
                        </div>
                        <div className="text-[18px] font-semi-bold">Rabbits</div>
                    </div>
                </div>

                </div>

            </div>


            <div className='max-w-[1200px] mx-auto flex justify-between card-md:flex-col card-md:mx-0 card-md:items-center card-md:justify-center card-md:gap-y-10 py-[120px] px-[15px]'>
               <div className='flex items-center w-[570px] h-[300px] relative mobile:w-[280px] mobile:h-[130px] mobile:bg-[length:280px_130px] bg-[url("/img/dog-food.webp")] bg-no-repeat bg-cover'>
                    <div className="absolute right-[15px] mobile:right-[13px]">
                     <h5 className="text-[20px] text-[#8D3D67] mobile:text-[10px]">50% de desconto</h5>
                     <h5 className="text-[32px] text-[#8D3D67] font-bold mb-[13px] mobile:text-[15px]">Comida de cão</h5>
                     <Link className='w-[130px] h-[40px] py-[10px] px-[10px] bg-[#8D3D67] rounded-[15px] text-[16px] mobile:text-[10px] text-white' href="#" >Compre agora</Link>
                   </div>
               </div>
               <div className='flex items-center w-[570px] h-[300px] relative mobile:w-[280px] mobile:h-[130px] mobile:bg-[length:280px_130px] bg-[url(/img/cat-food.webp)] bg-no-repeat bg-cover'>
                   <div className="absolute right-[15px] mobile:right-[10px]">
                     <h5 className="text-[20px] text-[#8D3D67] mobile:text-[10px]">50% de desconto</h5>
                     <h5 className="text-[32px] text-[#8D3D67] font-bold mb-[13px] mobile:text-[15px]">Comida de gato</h5>
                     <Link className='w-[130px] h-[40px] py-[10px] px-[10px] bg-[#8D3D67] rounded-[15px] text-[16px] mobile:text-[10px] text-white' href="#" id="link2">Compre agora</Link>
                   </div>
               </div>
            </div>

        </section>
    );
}