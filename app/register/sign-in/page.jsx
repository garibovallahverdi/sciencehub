import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../../public/svgs/back-icon.svg'
import googleIcon from '../../../public/svgs/google-icon.svg'

const page = () => {
    return (
        <div className='flex flex-col items-start px-[16px] md:px-[80px] pt-[40px] md:pt-[80px] pb-[64px] '>
            <div>
                <Link href='/' className='rounded-[8px] border-[1px] border-[#374af3] border-opacity-20 px-[24px] py-[10px] flex items-center gap-[5px]'>
                    <Image src={backIcon} alt='back icon' />
                    <span>Geri</span>
                </Link>
            </div>
            <div className='mt-[30px] md:mt-[60px] w-full'>
                <span className='text-[24px] font-semibold text-[#050123]'>Daxil ol</span>
                <div className='mt-[30px] md:mt-[60px] grid grid-cols-1 md:grid md:grid-cols-2 gap-[30px] md:gap-[40px]'>
                    <input type="text" placeholder='Ad və soyadınız' className='px-[20px] py-[13px] rounded-[12px] border-[1px] border-[#374af3] border-opacity-20 outline-none text-[14px]' />
                    <input type="email" placeholder='E-poçtunuz' className='px-[20px] py-[13px] rounded-[12px] border-[1px] border-[#374af3] border-opacity-20 outline-none text-[14px]' />
                    <input type="tel" placeholder='Telefon nömrəniz' className='px-[20px] py-[13px] rounded-[12px] border-[1px] border-[#374af3] border-opacity-20 outline-none text-[14px]' />
                    <input type="password" placeholder='Şifrəniz' className='px-[20px] py-[13px] rounded-[12px] border-[1px] border-[#374af3] border-opacity-20 outline-none text-[14px]' />
                </div>
            </div>
            <div className='flex items-center justify-between w-full mt-[15px]'>
                <div className='flex items-center gap-[8px]'>
                    <input type="checkbox" id="remember" className='w-[16px] h-[16px] cursor-pointer'/>
                    <label htmlFor="remember" className='text-[12px] text-[#050123] text-opacity-75 cursor-pointer'>Məni xatırla</label>
                </div>
                <Link href='/register/forget-password' className='text-[12px] text-[#374af3]'>Şifrəni unutmusunuz?</Link>
            </div>
            <div className='w-full grid grid-cols-1 md:flex md:items-center gap-[30px] md:gap-[40px] mt-[50px]'>
            <button className='md:w-1/2 rounded-[12px] bg-[#374af3] py-[16px] text-[16px] font-semibold text-[#fff]'>Qeydiyyat</button>
                <button className='md:w-1/2 flex items-center justify-center gap-[10px] py-[16px] bg-[#fff] rounded-[12px] border-[1px] border-[#374af3] border-opacity-20'>
                    <Image src={googleIcon} alt='google icon' />
                    <span>Google</span>
                </button>
            </div>
            <div className='w-full flex items-center justify-center gap-[5px] mt-[30px] md:mt-[60px]'>
                <span className='text-[16px] text-[#050123] '>Hesabınız yoxdur?</span>
                <Link href='/register' className='text-[16px] text-[#374af3]'>Qeydiyyatdan keçin</Link>
            </div>
        </div>
    )
}

export default page
