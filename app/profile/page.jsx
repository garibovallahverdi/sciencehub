'use client';
import React, { useState } from 'react';
import profileImg from '../../public/imgs/profil-img.png'
import camera from '../../public/svgs/camera.svg';
import profilecomp from '../../public/imgs/profilekomp.png';
import profilenoqte from '../../public/svgs/profilenoqte.svg';
import Image from 'next/image'
import EditPhoto from './profile-photo-edit/EditPhoto';

const page = () => {
    const [isOpen, setIsOpen] = useState(false);
  // const open = () => {
  //   setisOpen(true);
  // };
  // const close = () => {
  //   setisOpen(false);
  // };
  return (
    <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px]'>
      <div className='flex items-center justify-betwwen   gap-[120px] pb-[20px] border-b-[1px] border-[#050123] border-opacity-15'>
      <div className='w-[24%] flex'>
      <div className='w-[80px] h-[80px] relative' onClick={()=>setIsOpen(!isOpen)}>
        <Image src={profileImg} alt='profile img' className='w-full h-full rounded-[80px]' />
        <div className='absolute right-[-10px] bottom-0 w-[30px] h-[30px] cursor-pointer rounded-[30px] bg-[#374af3] flex items-center justify-center'>
          <Image src={camera} alt='camera icon' />
        </div>
      </div>
      <div className='flex flex-col ml-[30px]'>
        <span className='text-[24px] font-semibold text-[#050123]'>Mery Jane</span>
        <span className='text-[18px] font-medium text-[#050123] text-opacity-50'>Python developer</span>
      </div>
    </div>
        <span className="leading-9 border-r border-[#cdccd3] h-14"></span>
        <div className=' w-[50%] flex '>
          <div className='flex w-[58%]'> 
            <div className='w-[80px] h-[80px] relative'>
               <Image src={profilecomp} alt='profile img' className='w-[90%] h-[90%] rounded-[80px] '/> 
            </div>
            <div className='flex flex-col ml-[10px]'>
               <span className='text-[20px] font-semibold text-[#050123] '>Şəxsi icma adı</span>
               <span className='text-[18px] font-medium text-[#050123] text-opacity-50 flex gap-[20px] items-center'>İzləyici sayı <span><Image src={profilenoqte}/></span>  Paylaşım sayı</span>
            </div>
          </div>
          <div className='w-[40%] flex flex-col  gap-[10px]'>
            <button className='text-[12px] text-[#374af3] w-[65px] h-[24px] border-[2px] border-[#c1bfc8] rounded-[4px]'>İzlə</button>
            <button className='text-[12px] text-[#374af3] w-[65px] h-[24px] border-[2px] border-[#c1bfc8] rounded-[4px]'>Qoşul</button>
          </div>
        </div>     
     </div>

      <div className='mt-[70px] flex flex-col gap-[32px]'>
        <div className='grid md:grid-cols-3 gap-[32px]'>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="loc" className='md:text-[18px] text-[16px] text-[#050123]'>Məkan</label>
            <input type="text" id='loc' placeholder='Məkan fərdiləşdirilməsi' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="tel" className='md:text-[18px] text-[16px] text-[#050123]'>Telefon</label>
            <input type="tel" id='tel' placeholder="Məkan fərdiləşdirilməsi" className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="email" className='md:text-[18px] text-[16px] text-[#050123]'>E-poçt ünvanı</label>
            <input type="email" id='email' placeholder='E-poçt ünvanınızı daxil edin' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="name" className='md:text-[18px] text-[16px] text-[#050123]'>Ad</label>
            <input type="text" id='name' placeholder='Advə soyadınızı daxil edin' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="surName" className='md:text-[18px] text-[16px] text-[#050123]'>Soyad</label>
            <input type="text" id='surName' placeholder='Advə soyadınızı daxil edin' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="peşə" className='md:text-[18px] text-[16px] text-[#050123]'>Peşə</label>
            <input type="text" id='peşə' placeholder='Peşənizi daxil edin' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
        </div>
      </div>
      {
        isOpen ? <div className='fixed left-0 top-0 w-full h-[100vh] z-[999] bg-[#000] bg-opacity-50 flex items-center justify-center'>
        <EditPhoto  isOpen={isOpen} setIsOpen={setIsOpen} camera={camera} profileImg={profileImg}/>
        </div>
      : null
      }
    </div>
  )
}

export default page
