import React from 'react'
import CommunityPP from '../public/imgs/Community-pp.jpeg'
import Image from 'next/image'

const CommunitysCard = () => {
    return (
        <div className='flex items-center p-[20px] rounded-2xl bg-[#F5F5F5]'>
            <div className='flex items-center'>
                <div>
                    <Image src={CommunityPP} alt='CommunityPP' className='w-[70px] h-[70px] rounded-[100px]' />
                </div>
                <div className='ms-[16px]'>
                    <span className='text-[20px] font-semibold text-[#050123]'>Bioloji həyat</span>
                    <div className='mt-[4px] flex items-center gap-[10px]'>
                        <span className='text-[16px] text-[#828091]'>Kateqori</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#C1BFC8" />
                        </svg>
                        <span className='text-[16px] text-[#828091]'>Üzv sayı</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col ms-[56px] justify-between gap-y-[10px]'>
                <button className='text-[12px] text-[#00CD52] font-medium bg-[#fff] px-[12px] py-[6px] rounded-lg'>Qoşul</button>
                <button className='text-[12px] text-[#050123] font-medium bg-[#fff] px-[12px] py-[6px] rounded-lg'>İzlə</button>
            </div>
        </div>
    )
}

export default CommunitysCard
