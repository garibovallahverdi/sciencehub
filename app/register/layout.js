import Link from 'next/link'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='flex flex-col md:flex-row w-full max-w-[1550px] mx-auto md:flex '> 
            <div className='md:w-2/5 bg-blue-600 px-[30px] md:px-[80px] py-[80px] relative overflow-hidden '>
                <div className='flex justify-center items-center md:flex md:items-center'>
                    <span className='md:text-[40px] text-[32px] font-bold text-[#050123]'>SİNCE</span>
                    <span className='md:text-[40px] text-[32px] font-bold text-[#fff]'>.HUB</span>
                    <span className='md:text-[40px] text-[32px] font-bold text-[#fff] translate-y-[-25px]'>.</span>
                </div>
                <div className='mt-[98px] rounded-[16px] border-[1px] border-[#fff] p-[30px] bg-[#fff] bg-opacity-15 text-[#fff]'>
                    <span className='text-[18px] md:text-[24px] font-semibold '>Yenidən salam, xoş gəlmisiniz!</span>
                    <p className='my-[10px] text-[14px] md:text-[18px]'>Bir-birindən maraqlı bloglar, kitablar və məqalələr təqdim edirik. İndi qoşulun və yararlanma imkanı əldə edin!</p>
                    <Link href='/' className='text-[18px] md:text-[20px] font-semibold'>Giriş səyfəsi</Link>
                </div>
                {/* lines */}
                <div className='absolute right-[-279px] top-[-324px] w-[420px] h-[420px] rounded-[420px] border-[1px] border-[#05AFE5]'></div>
                <div className='absolute right-[-258px] top-[-295px] w-[420px] h-[420px] rounded-[420px] border-[1px] border-[#05AFE5]'></div>
                <div className='absolute right-[-234px] top-[-265px] w-[420px] h-[420px] rounded-[420px] border-[1px] border-[#05AFE5]'></div>
                <div className='absolute left-[-196px] bottom-[-283px] w-[400px] h-[400px] rounded-[400px] border-[1px] border-[#05AFE5]'></div>
                <div className='absolute left-[-162px] bottom-[-242px] w-[435px] h-[435px] rounded-[435px] border-[1px] border-[#05AFE5]'></div>
                <div className='absolute left-[-144px] bottom-[-173px] w-[420px] h-[420px] rounded-[420px] border-[1px] border-[#05AFE5]'></div>
                <div className='absolute left-[-121px] bottom-[-264px] w-[480px] h-[480px] rounded-[480px] border-[1px] border-[#05AFE5]'></div>
                {/* lines */}
            </div>
            <div className='md:w-3/5 bg-[#F7F9FF]'>{children}</div>
        </div>
    )
}

export default layout
