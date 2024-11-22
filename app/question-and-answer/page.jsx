import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import nextIcon from '../../public/svgs/next-icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import Search from '@/components/search'
import FaqCard from '@/components/faq-card'

const page = () => {
  const data = [1, 2, 3, 4, 5]
  return (
    <div className='w-full mx-auto max-w-[1550px]'>
      <div className='flex items-center justify-between xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[23px] border-b-[1px] border-[#d9d9d9]'>
        <div className='flex items-center gap-[10px] '>
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Ana səhifə</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Xidmətlər</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Sual cavab</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
          <Image src={backIcon} />
          <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Geri</span>
        </Link>
      </div>
      <div>
        <Search />
      </div>
      <div className='mt-[80px] xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px]'>
        <div className='flex flex-col items-center'>
          <span className='text-[32px] font-medium text-[#050123]'>Hər hansı bir sual verin?</span>
          <p className='mt-[5px] text-[18px] text-[#050123] text-opacity-50'>E-poçt ünvanınız dərc olunmayacaq. Tələb olunan sahələr qeyd olunub </p>
        </div>
        <div className='w-full mt-[50px] rounded-[24px] border-[1px] border-[#050123] border-opacity-15 p-[35px]'>
          <div className='grid md:grid-cols-3 gap-[35px]'>
            <div className='flex flex-col gap-[10px]'>
              <label htmlFor="Ad və soyadınız" className='text-[16px] text-[#050123]'>Ad və soyadınız</label>
              <input type="text" id='Ad və soyadınız' placeholder='Ad və soyadınızı daxil edin' className='px-[24px] py-[20px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[14px]' />
            </div>
            <div className='flex flex-col gap-[10px]'>
              <label htmlFor="E-poçtunuz" className='text-[16px] text-[#050123]'>E-poçtunuz</label>
              <input type="text" id='E-poçtunuz' placeholder='E-poçtunuzu daxil edin' className='px-[24px] py-[20px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[14px]' />
            </div>
            <div className='flex flex-col gap-[10px]'>
              <label htmlFor="Mövzu" className='text-[16px] text-[#050123]'>Mövzu</label>
              <input type="text" id='Mövzu' placeholder='Mövzunu daxil edin' className='px-[24px] py-[20px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[14px]' />
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-[10px] mt-[35px]'>
              <label htmlFor="Mesajınız" className='text-[16px] text-[#050123]'>Mesajınız</label>
              <textarea id="Mesajınız" placeholder='Mesajınızı daxil edin' cols="30" rows="10" className='px-[24px] py-[20px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[14px]'></textarea>
            </div>
          </div>
          <button className='mt-[50px] px-[48px] py-[20px] text-[18px] font-medium text-[#fff] rounded-[8px] bg-[#374af3]'>Göndər</button>
        </div>
      </div>
      <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] mt-[100px] mb-[120px] w-full flex flex-col items-center'>
        <span className='text-[32px] font-semibold text-[#050123]'>FAQ</span>
        <div className='mt-[50px] w-full border-[1px] border-[#d9d9d9] rounded-[16px] overflow-hidden'>
          {
            data.map(item=>{
              return <FaqCard key={item} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default page
