"use client"
import React, { useState } from 'react'
import faqIcon from '../public/svgs/faq-icon.svg'
import Image from 'next/image'

const FaqCard = () => {
    const [show , setShow] = useState(false)
  return (
    <div className='w-full'>
      <div onClick={()=>setShow(!show)} className='flex items-center justify-between px-[24px] py-[18px] border-b-[1px] border-[#d9d9d9] cursor-pointer'>
        <span className='text-[16px] font-medium text-[#050123]'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
        <Image src={faqIcon} alt='faq icon'/>
      </div>
      <div className={`p-[24px] ${show ? 'block' : 'hidden'}`}>
        <p className='text-[16px] text-[#44415a] w-[90%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh</p>
      </div>
    </div>
  )
}

export default FaqCard
