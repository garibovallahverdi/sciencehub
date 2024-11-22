import Image from 'next/image'
import React from 'react'
import Community from '../public/imgs/Community.png'
import CommunityPP from '../public/imgs/Community-pp.jpeg'

const CommunityCard = () => {
  return (
    <div className='bg-[#F9FFFF] shadow-lg rounded-2xl flex items-center md:flex-row flex-col gap-y-[30px]'>
      <div className='flex md:flex-row flex-col items-center justify-between xl:p-[35px] lg:p-[28px] md:p-[10px] p-[30px]  md:w-1/2 w-full md:gap-0 gap-[20px]'>
        <div className=' flex md:flex-row flex-col items-center gap-[20px]'>
          <Image src={CommunityPP} alt='Community pp' className='w-[80px] h-[80px] rounded-[100px]'/>
          <div className='flex md:flex-col md:items-start items-center md:gap-[7px] gap-[40px]'>
            <span className='md:text-[24px] text-[15px] font-semibold text-[#050123]'>Bİoloji həyat</span>
            <span className='md:text-[18px] text-[14px] font-medium text-[#050123] text-opacity-50'>İzləmədəsiniz</span>
          </div>
        </div>
        <hr className=' md:w-[80px] w-[220px] rotate-0 md:rotate-90'/>
        {/* <div className='w-[2px] h-[220px] bg-[#050123] bg-opacity-10 md:rotate-0 rotate-90 '>sLine</div> */}
        <div className=' flex md:flex-col gap-[20px]'>
          <button className='w-[100px] bg-[#fff] py-[6px] text-[12px] font-medium text-[#f62828] rounded-lg shadow'>Ayrıl</button>
          <button className='w-[100px] bg-[#fff] py-[6px] text-[12px] font-medium text-[#050123] rounded-lg shadow'>Paylaşımlar</button>
        </div>
      </div>
      <div className='md:w-1/2 w-full flex justify-end'>
        <div className=' w-full'>
          <Image src={Community} alt='Community' className='w-full h-[100%]'/>
        </div>
      </div>
    </div>
  )
}

export default CommunityCard
