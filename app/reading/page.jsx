import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import backIcon from '../../public/svgs/back-icon.svg'
import nextIcon from '../../public/svgs/next-icon.svg'
import readingImg1 from '../../public/imgs/readImg_1.png';
import readingImg2 from '../../public/imgs/readImg_2.png';
import readingImg3 from '../../public/svgs/readImg_3.svg';
import readingImg4 from '../../public/svgs/readImg_4.svg';
import meryJan from '../../public/svgs/meryJan.svg';
import eye from '../../public/svgs/eye.svg'
import noqte from '../../public/svgs/noqte.svg'
import ProfileCard from '@/components/profile-card'
const page = () => {
    const datas = [1, 2, 3, 4]
  return (
    <div className='w-full max-w-[1550px] mx-auto'>      
        <div className='flex items-center justify-between px-[16px] xl:px-[80px] lg:px-[50px] md:px-[30px] py-[23px] border-b-[1px] border-[#d9d9d9] '>
            <div className='flex items-center md:gap-[10px] gap-[5px]'>
                <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Ana səhifə</span>
                <Image src={nextIcon} alt='next icon' />
                <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Xidmətlər</span>
                <Image src={nextIcon} alt='next icon' />
                <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Məqalələr</span>
            </div>
            <Link href='/' className='flex items-center gap-[5px]'>
                <Image src={backIcon} />
                <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
            </Link>
        </div>
        <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] md:flex  md:flex-row flex flex-col mt-[40px] md:mt-[80px]'>
            <div className='px-[30px] md:w-3/5 md:px-[10px] md:order-first mt-[40px] md:mt-[0px]'>
                <span className='text-[#374AF3]'>İzləmədə qalın</span>
                <p className='font-semibold text-[24px] md:text-[32px] text-[#050123] mt-[5px]'>Niyə İş tapa bilməyən bu qədər çox proqramçı var?</p>
                <span className='text-[18px] md:text-[24px] text-[#050123] mt-[5px]'>Niyə kod yazmaq artıq illik 100.000 dollar maaşa dəyməz?</span>
                <p className='mt-[30px] md:mt-[50px] text-[14px] md:text-[16px]'>Bu, ziddiyyətli görünə bilər, lakin bu, işə başlayanda və təcrübəli proqramçıları yeni başlayanlardan nəyin fərqləndirdiyini anladığınız zaman fərqinə vardığınız bir reallıqdır.</p>
               <p className='mt-[20px] text-[14px] md:text-[16px]'>Təəssüf ki, “ proqramlaşdırmanı bilmək ” kifayət deyil, çünki… </p>
            </div>
            <div className='md:w-2/5 px-[30px] order-first '>
                <div className='flex gap-[10px]'>
                    <div className='w-1/6 flex justify-center items-center'>
                        <Image src={meryJan}/>
                    </div>     
                    <div className='flex flex-col justify-center'>
                        <span className='font-semibold text-[18px]'>Mery Jane</span>
                        <p className='text-[#050123] text-opacity-50 font-medium'>Pyhton developer</p>
                    </div>
                </div>
                <hr className='border-t-1 border-gray-400 my-5 '/>
                <p className='text-[#050123] text-opacity-50 font-medium'>Bunun səbəbi proqramçılara kodlaşdırma üçün pul verilməməsidir.</p>
                <hr className='border-t-1 border-gray-400 my-6 '/>       
                <div className='flex'>
                    <p className='text-[#050123] text-opacity-50 font-medium'>12 Mart 2024 </p>
                    <Image src={noqte} className='ml-[20px]'/>
                    <p className='ml-[20px] text-[#050123] text-opacity-50 font-medium'>20K</p>
                    <Image src={eye} className='ml-[5px]'/>
                </div>
                <hr className='border-t-1 border-gray-400 my-6 '/>
                <div className='flex'>
                    <p className='text-[#050123] text-opacity-50 font-medium'>Paylaş </p>
                    <Image src={readingImg4} className='ml-[10px]'/>
                    <p className='ml-[50px] text-[#050123] text-opacity-50 font-medium'>Yadda saxla</p>
                    <Image src={readingImg3} className='ml-[5px]'/>
                </div>
                <hr className='border-t-1 border-gray-400 mt-[26px]'/>
            </div>
        </div>
        <div className=' mt-[30px] md:mt-[10px] xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] md:flex  md:flex-row flex flex-col'>
            <div className='md:w-3/5 px-[10px]'>
                <Image src={readingImg1} alt='ada' />           
                <p className='mt-[40px] font-medium'>Hər kəs kodlaya bilər</p>
                <p className='mt-[20px] text-[14px] md:text-[16px]'>“Necə proqramlaşdırmağı bilmək” və ya ümumiyyətlə kodlaşdırma kimi tanınan şey hər kəsin bir neçə saatlıq təhsillə edə biləcəyi bir şeydir. ChatGPT kimi bir vasitə səmərəli istifadə olunarsa, bəlkə də daha azdır.</p>               
                <p className='mt-[25px] text-[14px] md:text-[16px]'> Əksər insanlar “proqramlaşdırmanı bildiklərini” iddia edirlər, çünki onlar proqramlaşdırma dilində təlimatları kodlaya bilirlər. Siz onlara problem verirsiniz və onlar bunu koddan istifadə edərək həll edirlər . Hal-hazırda süni intellektin bu və ya digər şəkildə edə biləcəyi bir şey.</p>            
                <p className='mt-[25px] text-[14px] md:text-[16px]'>  Bəs niyə şirkətlər ChatGPT-dən istifadə etmirlər və proqramçılar üçün çoxlu pul ödəməyə davam edirlər?</p>
                <p className='mt-[40px] font-medium text-[14px] md:text-[16px]'>Proqramçı olmağın reallığı.</p> 
                <p className='mt-[10px] font-medium text-[16px] md:text-[20px]'>Yaxşı proqramçıya kodlaşdırma üçün pul verilmir.</p>
                <p className='mt-[10px] text-[14px] md:text-[16px]'> Əgər mənə güvənmirsinizsə, mən sizi proqramlaşdırma dünyasındakı səviyyə fərqlərini iş stajı baxımından araşdırmağa dəvət edirəm və görəcəksiniz ki, nə qədər yüksəklərə qalxsanız, bir o qədər az kodlaşdıracaqsınız və özünüzü düşünməyə həsr edəcəksiniz. . İlkin mərhələniz ən çox kodlaşdıracağınız zamandır .</p>
                <Image src={readingImg2} alt='ada' className='mt-[40px]'/>
                <p className='mt-[40px] text-[14px] md:text-[16px]'>Həllin mümkün qədər yaxşı olması üçün kodun hazırlanmasından əvvəl, zamanı və sonra düşünmək çox vacibdir, həm də kodlaşdırma ilə verilən tapşırıqları həll etmək çox sadədir, çünki kimsə problemi həll etməyə qadir olan texniki dizayn yaratmaq üçün çox düşünür..</p>
            </div>
            <div className='md:w-2/5 flex flex-col px-[20px]' >
                <div className='mt-[80px] mb-[120px] md:px-[30px] grid grid-cols-1 gap-x-[32px] gap-y-[48px]'>
                    <p className='text-[24px] font-semibold'>Diger Meqaleler</p>
                    {
                     datas.map(item =>{
                       return <ProfileCard key={item}/>
                     })
                    }
                </div> 
            </div>
        </div>
  </div>
  )
}
export default page;