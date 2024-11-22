import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import nextIcon from '../../public/svgs/next-icon.svg'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <div className='w-full max-w-[1550px] mx-auto'>
       <div className='flex items-center justify-between xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[23px] border-b-[1px] border-[#d9d9d9]'>
        <div className='flex items-center gap-[10px] '>
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Ana səhifə</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Xidmətlər</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Forum</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
          <Image src={backIcon} />
          <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Geri</span>
        </Link>
      </div>
      <div className='w-full my-[100px] flex flex-col items-center bg-[#eefafa] py-[50px] px-[50px]'>
        <span className='text-[50px] font-medium text-[#374af3]'>Tezliklə</span>
        <p className='md:text-[24px] text-[20px] text-[#050123] text-opacity-75 text-center'>Tezliklə yeni çox bəyənəcəyiniz maraqlı məzmunlarla burada olacağıq</p>
        <div className='mt-[50px] flex items-center md:gap-[50px] gap-[10px]'>
          <div className='w-[100px] h-[100px] flex flex-col items-center justify-center rounded-[24px] bg-[#fff]'>
            <span className='text-[32px] font-semibold text-[#374af3]'>2</span>
            <span className='text-[16px] '>Ay</span>
          </div>
          <div className='w-[100px] h-[100px] flex flex-col items-center justify-center rounded-[24px] bg-[#fff]'>
            <span className='text-[32px] font-semibold text-[#374af3]'>15</span>
            <span className='text-[16px] '>Gün</span>
          </div>
          <div className='w-[100px] h-[100px] flex flex-col items-center justify-center rounded-[24px] bg-[#fff]'>
            <span className='text-[32px] font-semibold text-[#374af3]'>40</span>
            <span className='text-[16px] '>Saat</span>
          </div>
          <div className='w-[100px] h-[100px] flex flex-col items-center justify-center rounded-[24px] bg-[#fff]'>
            <span className='text-[32px] font-semibold text-[#374af3]'>30</span>
            <span className='text-[16px] '>Dəqiqə</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
