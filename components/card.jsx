import Link from 'next/link'
import React from 'react'
import rightIcon from '../public/svgs/right-icon.svg'
import cardImg from '../public/imgs/card-img.png'
import Image from 'next/image'

const Card = () => {
  return (
    <div >
      <div>
        <Image src={cardImg} alt='card img'/>
      </div>
      <div className='mt-[10px] '>
        <span className='text-[20px] font-medium text-[#050123] '>İmposter sindromu</span>
        <p className='my-[10px] text-[16px] text-[#050123] text-opacity-50'>İmposter sindromu ilk dəfə 1970-ci illərdə psixoloq Suzanne Imes və Pa...</p>
        <Link href='/reading' className='flex items-center gap-[8px] '>
            <span className='text-[#00cd52] text-[16px]'>Ətraflı oxu</span>
            <Image src={rightIcon} alt='right icon'/>
        </Link>
      </div>
    </div>
  )
}

export default Card
