import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import nextIcon from '../../public/svgs/next-icon.svg'
import CommunitysCard from '@/components/communitys-card'

const page = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='max-w-[1550px] mx-auto w-full'>
            <div className='flex items-center justify-between xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[23px] border-b-[1px] border-[#d9d9d9]'>
                <div className='flex items-center gap-[10px] '>
                    <span className='text-[16px] text-[#050123] font-medium'>Ana səhifə</span>
                    <Image src={nextIcon} alt='next icon' />
                    <span className='text-[16px] text-[#050123] font-medium'>İcmalar</span>
                </div>
                <Link href='/' className='flex items-center gap-[5px]'>
                    <Image src={backIcon} />
                    <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
                </Link>
            </div>
            <div className='py-[100px] xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <span className='text-[24px] font-medium text-[#050123]'>Ən Yaxşı İcmalar</span>
                    <p className='text-[16px] text-[#828091] mt-[5px] text-center'>Maraq dairənizə və məqsədnizə uyğun bir-birindən fərqli icmaları nəzərdən keçirin</p>
                </div>
                <div className='py-[70px] flex flex-wrap justify-center gap-[32px]'>
                    {
                        data.map(item => {
                            return <CommunitysCard key={item} />
                        })
                    }
                </div>
                <div className='flex items-center justify-center gap-[16px]'>
                    <button className='p-[8px] rounded-lg border-[1px] border-[#C1BFC8]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.8 16.7992L6 11.9992L10.8 7.19922M18 16.7992L13.2 11.9992L18 7.19922" stroke="#828091" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                     <button className='py-[8px] px-[14px] rounded-lg border-[1px] border-[#C1BFC8]'>1</button>
                    <button className='py-[8px] px-[14px] rounded-lg border-[1px] border-[#C1BFC8]'>2</button>
                    <button className='p-[8px] rounded-lg border-[1px] border-[#C1BFC8]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.2 16.7992L18 11.9992L13.2 7.19922M6 16.7992L10.8 11.9992L6 7.19922" stroke="#828091" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
