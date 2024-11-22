import Image from 'next/image'
import React from 'react'

const AboutCard = ({img, color, title, text}) => {
  return (
    <div className='flex flex-col items-start bg-[#fff] max-w-[300px] px-[20px] py-[30px] rounded-[8px] shadow-md'>
      <div className={`bg-[#${color}] p-[9px] rounded-[4px]`}>
        <Image src={img} alt='img'/>
      </div>
      <span className='mt-[20px] text-[24px] font-medium text-[#050123] '>{title}</span>
      <p className='mt-[10px] text-[16px] font-medium text-[#050123] text-opacity-50'>{text}</p>
    </div>
  )
}

export default AboutCard
