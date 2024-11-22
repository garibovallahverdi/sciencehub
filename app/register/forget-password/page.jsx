import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../../public/svgs/back-icon.svg'

const page = () => {
    return (
        <div className='px-[16px] md:px-[80px] py-[40px] md:py-[80px] flex flex-col items-start'>
            <div>
                <Link href='/' className='rounded-[8px] border-[1px] border-[#374af3] border-opacity-20 px-[24px] py-[10px] flex items-center gap-[5px]'>
                    <Image src={backIcon} alt='back icon' />
                    <span>Geri</span>
                </Link>
            </div>
            <span className='mt-[30px] md:mt-[60px] text-[18px] md:text-[24px] font-semibold text-[#050123]'>Şifrəni bərpa et</span>
            <div className='mt-[50px] md:mt-[100px] w-full flex flex-col items-center'>
                <div className='flex flex-col md:flex md:flex-col md:items-center'>
                    <span className='text-[18px] md:text-[24px] font-medium text-[#050123]'>Şifrənin bərpası</span>
                    <p className='mt-[5px] text-[14px] md:text-[16px] text-[#050123] text-opacity-50'>Şifrənizi bərpa etmək üçün aşağıda qeydiyyatdan keçmiş e-poçtunuzu daxil edin</p>
                </div>
                <div className=' mt-[30px] md:mt-[50px] flex flex-col items-center w-full md:w-1/2'>
                    <input type="text" placeholder='E-poçtunuz' className='outline-none px-[20px] py-[13px] rounded-[12px] border-[1px] border-[#374af3] border-opacity-20 bg-[#fff] w-full'/>
                    <button className=' mt-[20px] md:mt-[30px] w-full py-[16px] text-[16px] font-semibold text-[#fff] rounded-[12px] bg-[#374af3]'>Şifrəni sıfırla</button>
                    <Link href='/register' className='mt-[20px] text-[14px] text-[#050123]'>Geri qayıdın</Link>
                </div>
            </div>
        </div>
    )
}

export default page
