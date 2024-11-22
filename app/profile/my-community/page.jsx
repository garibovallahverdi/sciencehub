"use client"
import React, { useState } from 'react'
import profileImg from '../../../public/imgs/profil-img.png'
import camera from '../../../public/svgs/camera.svg'
import xicon from '../../../public/svgs/x-icon.svg'
// import communityImg from '../../../public/svgs/community-img.svg'
import Image from 'next/image'
import CommunityCard from '@/components/community-card'
import Link from 'next/link'

const page = () => {
  const [community, setCommunity] = useState(false)
  return (
    <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px]'>
      <div className='flex items-center gap-[30px] pb-[20px] border-b-[1px] border-[#050123] border-opacity-15'>
        <div className='w-[80px] h-[80px] relative'>
          <Image src={profileImg} alt='profile img' className='w-full h-full rounded-[80px] border-[2px] border-[#374af3]' />
          <div className='absolute right-[-10px] bottom-0 w-[30px] h-[30px] cursor-pointer rounded-[30px] bg-[#374af3] flex items-center justify-center'>
            <Image src={camera} alt='camera icon' />
          </div>
        </div>
        <div className='flex flex-col '>
          <span className='text-[24px] font-semibold text-[#050123] '>Mery Jane</span>
          <span className='text-[18px] font-medium text-[#050123] text-opacity-50'>Pyhton developer</span>
        </div>
      </div>
      <div className='mt-[70px] flex flex-col gap-[34px]'>
        <CommunityCard/>
        <CommunityCard/>
      </div>
      <div className='mt-[50px] flex items-center md:justify-start justify-center gap-[32px]'>
        <Link href='/communitys' 
        className='md:px-[23px] px-[15px] md:py-[14px] py-[10px] rounded-lg bg-[#050123] md:text-[18px] text-[16px] text-[#fff] font-semibold'>İcmaları kəşf et</Link>
        <button onClick={()=>setCommunity(!community)} 
        className='md:px-[34px] px-[20px] md:py-[14px] py-[9px] rounded-lg border-[2px] border-[#050123] md:text-[18px] text-[16px] text-[#050123] font-semibold'>İcmanı yarat</button>
      </div>
      {
        community ? <div className='w-full h-[100vh] bg-[#000] bg-opacity-45 fixed left-0 top-0 z-[999] flex items-center justify-center'>
          <div className='md:p-[50px] p-[20px] bg-[#fff] md:w-[600px] w-[350px] rounded-3xl relative'>
            <div>
              <span className='md:text-[24px] text-[20px] font-medium text-[#050123]'>Öz icmanızı yaradın</span>
              <p className='mt-[5px] md:text-[16px] text-[12px] text-[#828091]'>Bannerlər və təsvirlər istifadəçilərinə icmanızı kəşf etməyə və anlamağa kömək edir.</p>
              <div className='relative w-[100px] md:my-[50px] my-[24px]'>
                <input type="file" className='h-full'/>
                {/* <Image src={communityImg} alt='community-img' className='absolute bottom-0 left-[30px]' /> */}
              </div>
              <input type="text" placeholder='İcma adı daxil edin' className='px-[20px] py-[15px] w-full outline-none border-[1px] border-[#D9D9DE] rounded-lg '/>
            </div>
            <div className='md:mt-[50px] mt-[24px]'>
              <span className='md:text-[18px] text-[16px] font-medium text-[#050123]'>Mövzu əlavə edin</span>
              <p className='md:text-[14px] text-[12px] text-[#828091] mt-[5px]'>Maraqlanan istifadəçilərə icmanızı tapmaqda kömək etmək üçün qısaca mövzudan bəhs edin.</p>
              <textarea name="" id="" placeholder='İcma adı daxil edin' className='w-full h-[100px] mt-[20px] border-[1px] rounded-lg border-[#D9D9DE] outline-none px-[20px] py-[15px]'>

              </textarea>
            </div>
            <div className='mt-[30px] flex items-center  md:gap-[32px] gap-[24px]'>
              <button className='text-[16px] font-medium text-[#fff] bg-[#00CD52] px-[28px] py-[10px] rounded-lg'>Yarat</button>
              <button onClick={()=>setCommunity(!community)} className='text-[16px] font-medium text-[#F62828] px-[21px] py-[10px] border-[2px] border-[#F62828] rounded-lg'>Ləğv et</button>
            </div>
            <button onClick={()=>setCommunity(!community)} className='absolute md:right-[24px] right-[20px] md:top-[24px] top-[20px]'>
              <Image src={xicon} />
            </button>
          </div>
        </div> : null
      }
    </div>
  )
}

export default page
