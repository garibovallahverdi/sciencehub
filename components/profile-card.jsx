import React from 'react'
import profileImg from '../public/imgs/profil-img.png'
import profileCardImg from '../public/imgs/profile-card.png'
import calendar from '../public/svgs/calendar.svg'
import linkIcon from '../public/svgs/link-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

const ProfileCard = () => {
  return (
    <div className='rounded-[24px] overflow-hidden shadow-md max-w-[405px] mx-auto'>
        <div className='relative h-[220px]'>
            <Image src={profileCardImg} alt='profile card img' className='w-full h-full'/>
            <div className='absolute left-0 top-[20px] w-full px-[23px]  flex justify-between items-center'>
                <div className='flex items-center gap-[10px] py-[3px] ps-[3px] pe-[35px] rounded-[100px] bg-[#000] bg-opacity-40'>
                    <Image src={profileImg} alt='prfile img' className='w-[34px] h-[34px] rounded-[34px]'/>
                    <span className='text-[12px] font-semibold text-[#fff]'>Mery Jane</span>
                </div>
                <input type="checkbox" name="" id="" className='w-[34px] h-[34px] cursor-pointer rounded-[12px]'/>
            </div>
        </div>
        <div className='px-[20px] pt-[15px] pb-[30px]'>
            <div>
                <span className='text-[20px] font-medium text-[#050123]'>Yaradıcılıq və qabiliyyətləri...</span>
                <p className='mt-[10px] text-[16px] text-[#050123] text-opacity-75'>İnsanların bacarıq və digər şəxsi özəlliklər baxımından fərqli...</p>
            </div>
            <div className='mt-[20px] flex items-center justify-between'>
                <div className='flex items-center gap-[5px]'>
                    <Image src={calendar} alt='calendar'/>
                    <span className='text-[14px] text-[#050123] text-opacity-50'>12.02.2024</span>
                </div>
                <Link href='/' className='flex items-center gap-[5px]'>
                    <span className='text-[16px] text-[#00cd52]'>Ətraflı oxu</span>
                    <Image src={linkIcon} alt='link icon'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard