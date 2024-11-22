import Image from 'next/image'
import React from 'react'
import down from '../../../public/svgs/down-black.svg'
import deleteIcon from '../../../public/svgs/delete-icon.svg'
import ProfileCard from '@/components/profile-card'

const page = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px]'>
      <div className='flex flex-col gap-[20px] pb-[20px] border-b-[1px] border-[#050123] border-opacity-15'>
        <span className='md:text-[24px] text-[20px] font-medium text-[#050123]'>Yadda saxlanılanlar</span>
        <p className='md:text-[16px] text-[14px] text-[#050123]'>Yadda saxlanılanları profilinizdə istədiyiniz kimi idarə edin.</p>
      </div>
      <div className='mt-[70px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center md:gap-[60px] gap-[20px]'>
                <span className='md:text-[16px] text-[14px] font-medium text-[#050123] text-opacity-50'>12 paylaşım</span>
                <div className='flex items-center gap-[5px] cursor-pointer'>
                    <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Blog</span>
                    <Image src={down} alt='down icon' className='text-[#000]'/> 
                </div>
            </div>
            <div className='flex items-center md:gap-[24px] gap-[20px]'>
                <div className='flex items-center gap-[5px] px-[16px] py-[6px] rounded-[4px] border-[1px] border-[#050123] border-opacity-25 cursor-pointer'>
                    <label htmlFor="Hamısı" className='md:text-[16px] text-[14px] text-[#050123] text-opacity-50 font-medium cursor-pointer'>Hamısı</label>
                    <input type="checkbox" id="Hamısı" className='md:w-[20px] md:h-[20px] w-[16px] h-[16px]'/>
                </div>
                <button className='flex items-center gap-[10px] px-[16px] py-[6px] rounded-[4px] border-[1px] border-[#050123] border-opacity-25 cursor-pointer'>
                    <span className='text-[16px] text-[#050123] text-opacity-50 font-medium md:block hidden'>Sil</span>
                    <Image src={deleteIcon} alt='delet icon'/>
                </button>
            </div>
        </div>
        <div className='mt-[38px] grid md:grid-cols-3 sm:grid-cols-2 gap-x-[32px] gap-y-[48px]'>
            {
                data.map(item=>{
                    return <ProfileCard key={item}/>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default page
