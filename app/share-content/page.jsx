"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import nextIcon from '../../public/svgs/next-icon.svg'

const page = () => {
    const [divs, setDivs] = useState([{ id: 1 }]);
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleAddDiv = () => {
        setDivs([...divs, { id: divs.length + 1 }]);
    };
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
            <div className='pt-[70px] pb-[110px] md:px-[80px] px-[16px]'>
                <div className='flex flex-col items-center'>
                    <span className='md:text-[16px] text-[14px] text-[#374AF3]'>İndi başla</span>
                    <p className='text-center md:text-[32px] text-[18px] font-medium text-[#050123]'>Paylaşmaq üçün buradasınız: Bilik İcmasına xoş gəlmisiniz!</p>
                </div>
                <div className='flex flex-col md:gap-[48px] gap-[24px] mt-[21px] w-full'>
                    <div className='flex items-center md:flex-row flex-col gap-x-[48px] gap-y-[24px] w-full '>
                        <div className='flex flex-col md:w-1/2 w-full'>
                            <label htmlFor="Kategori" className='md:text-[18px] text-[16px] text-[#44415A]'>Kategori</label>
                            <select onChange={handleSelectChange} name="Kategori" id="Kategori" className='px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-lg cursor-pointer mt-[10px] w-full'>
                                <option value="Blog">Blog</option>
                                <option value="Book">Kitab</option>
                                <option value="Article">Məqalə</option>
                                <option value="Dissertation">Disertasiya</option>
                            </select>
                        </div>
                        <div className='flex flex-col md:w-1/2 w-full'>
                            <label htmlFor="Şəkil (Card)" className='md:text-[18px] text-[16px] text-[#44415A]'>Şəkil (Card)</label>
                            <input type="file" name="Şəkil (Card)" id="Şəkil (Card)" className='px-[20px] py-[12px] border-[1px] border-[#C1BFC8] rounded-lg mt-[10px] outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Şəkil" className='md:text-[18px] text-[16px] text-[#44415A]'>Mövzu(Başlıq)</label>
                        <input type="text" id='Mövzu(Başlıq)' name='Mövzu(Başlıq)' placeholder='Mövzunu daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-lg' />
                    </div>
                    {divs.map(div => {
                        return <div key={div.id}>
                            {selectedOption === "Book" ? 
                            <div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="Kitab pdf" className='md:text-[18px] text-[16px] text-[#44415A]'>Kitab pdf</label>
                                    <input type="file" id='Kitab pdf' name='Kitab pdf' placeholder='Mövzunu daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-lg' />
                                </div>
                            </div> : 
                            <div>
                                <div className='grid grid-cols-2 gap-x-[48px] gap-y-[24px]'>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="Başlıq" className='md:text-[18px] text-[16px] text-[#44415A]'>Başlıq</label>
                                    <input type="text" id='Başlıq' name='Başlıq' placeholder='Mövzunu daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-lg' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="Şəkil" className='md:text-[18px] text-[16px] text-[#44415A]'>Şəkil</label>
                                    <input type="file" id='Şəkil' name='Şəkil' placeholder='Mövzunu daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-lg' />
                                </div>
                            </div>
                            <div className='w-full flex flex-col md:mt-[48px] mt-[24px]'>
                                <label htmlFor="Mətin" className='md:text-[18px] text-[16px] text-[#44415A]'>Mətin</label>
                                <textarea name="Mətin" id="Mətin" placeholder='Mətin daxil edin' className='px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-lg w-full h-[150px] mt-[10px]'></textarea>
                            </div>
                            </div>}
                        </div>

                    })}
                </div>
                <div className='flex items-center justify-between mt-[48px]'>
                    <div className='flex items-center md:gap-[32px] gap-[16px] '>
                        <button className='md:px-[40px] md:py-[14px] px-[20px] py-[10px] text-[#fff] font-medium md:text-[18px] text-[16px] bg-[#00CD52] rounded-lg'>Paylaşım et</button>
                        <button className='md:px-[40px] md:py-[14px] px-[20px] py-[10px] text-[#00CD52] font-medium md:text-[18px] text-[16px] border-[2px] border-[#00CD52] rounded-lg'>Yadda saxla</button>
                    </div>
                    <div>
                        {selectedOption !== "Book" ? 
                            <button onClick={handleAddDiv} className='md:px-[40px] md:py-[14px] px-[20px] py-[10px] text-[#fff] font-medium md:text-[18px] text-[16px] bg-[#00CD52] rounded-lg'>Əlavə et</button>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
