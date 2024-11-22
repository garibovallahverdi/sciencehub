import React from 'react'
import sosial from '../public/svgs/sosial.svg'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full max-w-[1550px] mx-auto'>
            <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[40px] bg-[#E0EBF7] flex md:flex-row flex-col items-center justify-between gap-[30px]'>
                <div className='min-w-1/2'>
                    <span className='md:text-[22px] text-[18px] font-semibold text-[#050123] '>Yeniliklərdən anında xəbərdar olmaq üçün abunə olun</span>
                    <p className='mt-[6px] text-[14px] font-medium text-[#050123] text-opacity-50'>Ən son blog yazılar, kitab təqdimatlar və maraqlı məqalələrdən xəbərdar almaq üçün elə indi abunə olun!</p>
                </div>
                <div className='p-[8px] bg-[#fff] rounded-[8px] flex justify-between items-center w-full md:max-w-[400px]'>
                    <input type="text" placeholder='E-mailinizi daxil edin' className='ms-[8px] text-[16px] font-medium text-[#050123] text-opacity-50 outline-none w-full' />
                    <button className='px-[14px] py-[10px] text-[16px] font-medium text-[#fff] bg-[#374af3] rounded-[6px] min-w-[100px]'>Abonə ol</button>
                </div>
            </div>
            <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] px- pt-[80px] bg-[#EEF4FA]'>
                <div className='pb-[40px] flex md:flex-row flex-col'>
                    <div className='md:w-2/5 w-full flex flex-col'>
                        <div>
                            <span className='text-[28px] font-bold text-[#050123] '>SİNCE</span>
                            <span className='text-[28px] font-bold text-[#374af3]'>.HUB</span>
                            <span className='text-[28px] text-[#374af3] font-bold translate-y-3'>.</span>
                        </div>
                        <span className='mt-[10px] text-[14px] text-[#050123] text-opacity-75 w-[50%]'>Sizin üçün Elmi məqalə, bloq, və kitabları bir saytda toplayırıq. </span>
                        <Image src={sosial} alt='sosial' className='mt-[25px] translate-x-[-25px]' />
                    </div>
                    <div className='md:w-3/5 w-full grid md:grid-cols-3 gap-y-[50px] md:mt-0 mt-[50px]'>
                        <div>
                            <span className='text-[16px] font-medium text-[#050123]'>Vacib linklər</span>
                            <ul className='mt-[20px] flex flex-col gap-[10px] text-[#050123] text-opacity-75 text-[14px]'>
                                <li>Haqqımızda</li>
                                <li>Xidmətlər</li>
                                <li>Əlaqə</li>
                                <li>Qaydalar</li>
                            </ul>
                        </div>
                        <div>
                            <span className='text-[16px] font-medium text-[#050123]'>Xidmətlər</span>
                            <ul className='mt-[20px] flex flex-col gap-[10px] text-[#050123] text-opacity-75 text-[14px]'>
                                <li>Dissertasiyalar</li>
                                <li>Kitablar</li>
                                <li>Bloglar</li>
                                <li>Məqalələr</li>
                            </ul>
                        </div>
                        <div>
                            <span className='text-[16px] font-medium text-[#050123]'>Əlaqə</span>
                            <ul className='mt-[20px] flex flex-col gap-[10px] text-[#050123] text-opacity-75 text-[14px]'>
                                <li>Verdiyiniz feedbacklər bizim üçün önəmlidir.</li>
                                <li className='font-medium'>Phone: +994 99 315 54 75</li>
                                <li className='font-medium'>E-mail: infosince.hub@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-[17px] border-t-[1px] border-[#050123] border-opacity-10 flex justify-center'>
                    <span className='text-[12px] font-medium text-[#050123] text-opacity-50'>© SİNCE.HUB - Bütün Hüquqlar Qorunur</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
