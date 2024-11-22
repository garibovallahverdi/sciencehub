"use client"
import Image from 'next/image'
import React from 'react'
import nextIcon from '../../public/svgs/next-icon.svg'
import backIcon from '../../public/svgs/back-icon.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {
  const pathname = usePathname()
  return (
    <div className='w-full max-w-[1550px] mx-auto'>
      <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[23px] flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Ana səhifə</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Profil</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
          <Image src={backIcon} alt='back icon' />
          <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Geri</span>
        </Link>
      </div>
      <div className='w-full  xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[16px] border-[1px] border-[#d9d9d9] bg-[#64c343] overflow-x-auto'>
        <div className='flex gap-[40px] items-center min-w-[650px]'>
          <Link 
          href='/profile' 
          className={` ${pathname === '/profile' ? 'bg-[#fff] bg-opacity-30 border-[1px] border-[#fff] border-opacity-50 text-opacity-100' : null}  text-[14px] font-medium text-[#fff] text-opacity-75 px-[16px] py-[8px] rounded-[24px]`}>Profil</Link>
          <Link 
          href='/profile/my-edit' 
          className={` ${pathname === '/profile/my-edit' ? 'bg-[#fff] bg-opacity-30 border-[1px] border-[#fff] border-opacity-50 text-opacity-100' : null}  text-[14px] font-medium text-[#fff] text-opacity-75 px-[16px] py-[8px] rounded-[24px]`}>Redaktə et</Link>
          <Link 
          href='/profile/my-share' 
          className={` ${pathname === '/profile/my-share' ? 'bg-[#fff] bg-opacity-30 border-[1px] border-[#fff] border-opacity-50 text-opacity-100' : null}  text-[14px] font-medium text-[#fff] text-opacity-75 px-[16px] py-[8px] rounded-[24px]`}>Paylaşımlar</Link>
          <Link 
          href='/profile/my-save' 
          className={` ${pathname === '/profile/my-save' ? 'bg-[#fff] bg-opacity-30 border-[1px] border-[#fff] border-opacity-50 text-opacity-100' : null}  text-[14px] font-medium text-[#fff] text-opacity-75 px-[16px] py-[8px] rounded-[24px]`}>Yadda saxla</Link>
          <Link 
          href='/profile/my-community' 
          className={` ${pathname === '/profile/my-community' ? 'bg-[#fff] bg-opacity-30 border-[1px] border-[#fff] border-opacity-50 text-opacity-100' : null}  text-[14px] font-medium text-[#fff] text-opacity-75 px-[16px] py-[8px] rounded-[24px]`}>İcma</Link>
        </div>
      </div>
      <div className='mt-[80px] mb-[120px]'>{children}</div>
    </div>
  )
}

export default layout
