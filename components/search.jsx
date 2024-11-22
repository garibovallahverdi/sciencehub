import React from 'react'
import searchIcon from '../public/svgs/search-icon.svg'
import Image from 'next/image'

const Search = () => {
    return (
        <div className='flex flex-col items-center bg-[#374af3] relative'>
            <div className='my-[60px] flex flex-col items-center w-full'>
                <span className='text-[24px] font-medium text-[#fff]'>Xidmətləri asanlıqla tapın</span>
                <p className='text-[16px] text-[#fff] text-center px-[50px]'>Lazım olan məlumatı tez tapmaq və ya sizi maraqlandıran mövzuları araşdırmaq üçün axtarış edin.</p>
                <div className='mt-[30px] flex items-center justify-between md:w-[50%] w-[80%] bg-[#fff] ps-[24px] py-[6px] pe-[7px] rounded-[8px]'>
                    <input type="text" placeholder='Axtar...' className='w-full outline-none text-[16px]' />
                    <button><Image src={searchIcon} alt='search icon' /></button>
                </div>
            </div>
            <div className='w-[90%] flex justify-center py-[13px] bg-[#fff] bg-opacity-15 rounded-t-[24px] border-[1px] border-[#fff] border-opacity-50'>
                <span className='md:text-[16px] text-[14px] font-semibold text-[#fff] text-center'>Araşdırın, kəşf edin və öyrənin. Axtardığınız hər şey buradadır!</span>
            </div>
            {/* Line */}
            <svg className='absolute left-0 top-0' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <g filter="url(#filter0_b_1375_21391)">
                    <rect x="-100" y="-100" width="200" height="200" rx="100" fill="white" fill-opacity="0.1" />
                    <rect x="-99.5" y="-99.5" width="199" height="199" rx="99.5" stroke="white" stroke-opacity="0.5" />
                </g>
                <g filter="url(#filter1_b_1375_21391)">
                    <rect x="-75.5" y="-75.5" width="151" height="151" rx="75.5" stroke="white" stroke-opacity="0.5" />
                </g>
                <g filter="url(#filter2_b_1375_21391)">
                    <rect x="-50" y="-50" width="100" height="100" rx="50" fill="white" fill-opacity="0.1" />
                    <rect x="-49.5" y="-49.5" width="99" height="99" rx="49.5" stroke="white" stroke-opacity="0.5" />
                </g>
                <defs>
                    <filter id="filter0_b_1375_21391" x="-200" y="-200" width="400" height="400" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1375_21391" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1375_21391" result="shape" />
                    </filter>
                    <filter id="filter1_b_1375_21391" x="-176" y="-176" width="352" height="352" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1375_21391" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1375_21391" result="shape" />
                    </filter>
                    <filter id="filter2_b_1375_21391" x="-150" y="-150" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1375_21391" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1375_21391" result="shape" />
                    </filter>
                </defs>
            </svg>
            <svg className='absolute right-0 top-0' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <g filter="url(#filter0_b_1375_21387)">
                    <rect y="-100" width="200" height="200" rx="100" fill="white" fill-opacity="0.1" />
                    <rect x="0.5" y="-99.5" width="199" height="199" rx="99.5" stroke="white" stroke-opacity="0.5" />
                </g>
                <g filter="url(#filter1_b_1375_21387)">
                    <rect x="24.5" y="-75.5" width="151" height="151" rx="75.5" stroke="white" stroke-opacity="0.5" />
                </g>
                <g filter="url(#filter2_b_1375_21387)">
                    <rect x="50" y="-50" width="100" height="100" rx="50" fill="white" fill-opacity="0.1" />
                    <rect x="50.5" y="-49.5" width="99" height="99" rx="49.5" stroke="white" stroke-opacity="0.5" />
                </g>
                <defs>
                    <filter id="filter0_b_1375_21387" x="-100" y="-200" width="400" height="400" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1375_21387" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1375_21387" result="shape" />
                    </filter>
                    <filter id="filter1_b_1375_21387" x="-76" y="-176" width="352" height="352" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1375_21387" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1375_21387" result="shape" />
                    </filter>
                    <filter id="filter2_b_1375_21387" x="-50" y="-150" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1375_21387" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1375_21387" result="shape" />
                    </filter>
                </defs>
            </svg>
            {/* Line */}
        </div>
    )
}

export default Search
