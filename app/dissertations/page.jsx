import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import nextIcon from '../../public/svgs/next-icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import ProfileCard from '@/components/profile-card'
import Search from '@/components/search'

const page = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className='w-full max-w-[1550px] mx-auto'>
       <div className='flex items-center justify-between xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[23px] border-b-[1px] border-[#d9d9d9]'>
        <div className='flex items-center gap-[10px] '>
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Ana səhifə</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Xidmətlər</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Disertasiyalar</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
          <Image src={backIcon} />
          <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Geri</span>
        </Link>
      </div>
      <div>
        <Search/>
      </div>
      <div className='mt-[80px] mb-[120px] xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] grid lg:grid-cols-3 md:grid-cols-2 gap-x-[32px] gap-y-[48px]'>
        {
            data.map(item=>{
                return <ProfileCard key={item}/>
            })
        }
      </div>
    </div>
  )
}

export default page