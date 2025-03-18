import Link from 'next/link';
import Image from 'next/image';
import SectionPet from '@/app/components/sectionPet';
import SectionProduct from '@/app/components/sectionProduct';
import SectionOffer from '@/app/components/sectionOffer';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <main>
      <div className="bg-[#701B63]">
        <header className='mx-auto max-w-[1400px] mobile:px-4'>
          <nav className="flex items-center justify-between px-4 h-36">
            <div>
              <Image src="/img/logo-light.webp" width="125" height="30" alt="Logo"/>
            </div>
            <ul className="flex gap-12 text-white mobile:hidden">
              <li className="text-base uppercase cursor-pointer hover:text-[#FFD868] duration-300">Home</li>
              <li className="text-base uppercase cursor-pointer hover:text-[#FFD868] duration-300">Sobre</li>
              <li className="text-base uppercase cursor-pointer hover:text-[#FFD868] duration-300">Produtos</li>
              <li className="text-base uppercase cursor-pointer hover:text-[#FFD868] duration-300">Blog</li>
              <li className="text-base uppercase cursor-pointer hover:text-[#FFD868] duration-300">Contacto</li>
            </ul>

            <div className="flex gap-2 mobile:hidden">
              <Link className="text-white p-1 hover:text-[rgba(255,255,255,0.6)] duration-300" href="#">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </Link>

              <Link className="text-white p-1 hover:text-[rgba(255,255,255,0.6)] duration-300" href="#">
                <svg  
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
                  />
                </svg>
              </Link>

              <Link className="text-white p-1 hover:text-[rgba(255,255,255,0.6)] duration-300" href="#">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
                  />
                </svg>
              </Link>

              <Link className="text-white p-1 hover:text-[rgba(255,255,255,0.6)] duration-300" href="#">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                  />
                </svg>
              </Link>
            </div>
            <div className='hidden mobile:block text-white'>
              <GiHamburgerMenu size={40}/>
            </div>
          </nav>
        </header>

        <div className="flex justify-between middle:justify-center mx-auto middle:mx-0 max-w-[1400px] ps-[16px] middle:py-[80px] pt-[80px] middle:pt-[10px]">
          <div className='px-[50px]'>
                  <h2 className='flex items-center text-white discount mb-[20px]'>até 40% de desconto</h2>
                  <h1 className='text-white mobile:text-[40px] text-[60px] mb-[30px] font-black'>Uma Grande Refeição Para Seu Animal De Estimação</h1>
                  <button className='w-[180px] mobile:w-[140px] h-[55px] mobile:h-[50px] bg-[#FFD868] rounded-[15px] text-[18px] mobile:text-[15px] font-semibold'>Compre Agora</button>
          </div>
          <div className='relative min-w-[575px] middle:hidden'>
              <div className='absolute w-[510px] h-[510px] bg-[#FFD868] rounded-full top-[-50px] left-[-50px]'></div>
              <div>
                <Image
                  src="/img/slider-01.webp" 
                  width={575}
                  height={570}
                  alt="dog-banner"
                />
              </div>
          </div>
        </div>
      </div>
        
        <SectionPet />
        <SectionProduct/>
        <SectionOffer />
      {/*<Link href="/Hooks"><h1 className="text-red-300 my-6">Testar Hooks</h1></Link>*/}
     </main>
  );
}