import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import nextIcon from '../../public/svgs/next-icon.svg'

const page = () => {
  return (
    <div className='w-full mx-auto max-w-[1550px]'>
      <div className='flex items-center justify-between px-[16px] md:px-[80px] py-[23px] border-b-[1px] border-[#d9d9d9]'>
        <div className='flex items-center gap-[10px] '>
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Ana səhifə</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Əlaqə</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
          <Image src={backIcon} />
          <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Geri</span>
        </Link>
      </div>
      <div className='mt-[40px] md:mt-[80px] mb-[120px] px-[16px] md:px-[80px]'>
        <div className='flex flex-col items-center md:flex md:flex-col md:items-center'>
          <span className='text-[24px] md:text-[32px] font-semibold text-[#050123]'>Əlaqə</span>
          <p className='mt-[10px] text-[14px] md:text-[18px] text-[#050123] text-opacity-50 md:w-[65%] md:text-center'>Sual verin, nəyi bəyəndiyinizi və nəyi daha yaxşı edə biləcəyimizi söyləyin. Əlaqə həmişə xoşdur, belə ki, bizimlə əlaqə saxlamaqdan çekinmeyin.</p>
        </div>
        <div className='mt-[65px] grid grid-cols-1 md:grid md:grid-cols-2 gap-[70px] md:gap-[140px]'>
          <div className='flex flex-col gap-[50px]'>
            <div>
              <span className='text-[14px] md:text-[18px] font-medium text-[#050123] ml-[6px] md:ml-[6px]'>Əlaqə</span>
              <div className='mt-[5px] flex items-center'>
                <span className='leading-8 mt-[5px] ps-[3px] md:border-s-[0px] border-s-[2.5px] border-[#374AF3]'>
                  <span className='text-[24px] md:text-[36px] font-bold text-[#050123] '>SİNCE</span>
                  <span className='text-[24px] md:text-[36px] font-bold text-[#374af3]'>.HUB</span>
                </span>
                <span className='text-[24px] md:text-[36px] font-bold text-[#374af3] translate-y-[-25px]'>.</span>
              </div>
              <p className='mt-[10px] text-[18px] text-[#44415a] ml-[5px]'>Bir-birindən maraqlı bloglar, kitablar və məqalələr təqdim edirik. İndi qoşulun və yararlanma imkanı əldə edin!</p>
            </div>
            <div>
              <span className='text-[16px] md:text-[20px] font-medium text-[#050123]'>Ümumi məlumat üçün bizə müraciət et:</span>
              <ul className='mt-[15px] flex flex-col gap-[10px]'>
                <li className='flex items-center gap-[5px] text-[16px] '>
                  <span className=' font-medium text-[#050123]'>Ünvan:</span>
                  <span className='text-opacity-75 text-[#050123]'>Bakı şəhəri, Ü.Hacıbəyli 80</span>
                </li>
                <li className='flex items-center gap-[5px] text-[16px] '>
                  <span className=' font-medium text-[#050123]'>Tel:</span>
                  <span className='text-opacity-75 text-[#050123]'>(+994) 99 315 54 75</span>
                </li>
                <li className='flex items-center gap-[5px] text-[16px] '>
                  <span className=' font-medium text-[#050123]'>Faks:</span>
                  <span className='text-opacity-75 text-[#050123]'>(+994) 99 456 06 16</span>
                </li>
                <li className='flex items-center gap-[5px] text-[16px] '>
                  <span className=' font-medium text-[#050123]'>E-mail:</span>
                  <span className='text-opacity-75 text-[#050123]'>infosince.hub@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <span className='text-[16px] md:text-[20px] font-medium text-[#050123]'>Vətəndaşların müraciətləri üçün:</span>
              <ul className='mt-[15px] flex flex-col gap-[10px]'>
                <li className='flex items-center gap-[5px] text-[16px] '>
                  <span className=' font-medium text-[#050123]'>Tel:</span>
                  <span className='text-opacity-75 text-[#050123]'>(+994) 99 315 54 75</span>
                </li>
                <li className='flex items-center gap-[5px] text-[16px] '>
                  <span className=' font-medium text-[#050123]'>E-mail:</span>
                  <span className='text-opacity-75 text-[#050123]'>infosince.hub@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className=''>
            <iframe className=' h-[376px] w-full md:h-full rounded-[12px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.541156296084!2d49.84938087582501!3d40.37469737144642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da97b6f60f3%3A0x559b0d76c5587ad8!2zODAgw5x6ZXlpciBIYWPEsWLJmXlvdiwgQmFrxLE!5e0!3m2!1saz!2saz!4v1711039065732!5m2!1saz!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
