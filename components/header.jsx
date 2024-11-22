"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';
import instagram from '../public/svgs/instagram.svg'
import facebook from '../public/svgs/facebook.svg'
import mail from '../public/svgs/mail.svg'
import search from '../public/svgs/search.svg'
import searchIcon2 from '../public/svgs/search-icon-2.svg'
import down from '../public/svgs/down.svg'
import downBlack from '../public/svgs/down-black.svg'
import menu from '../public/svgs/menu.svg'
import closeIcon from '../public/svgs/close-icon.svg'

const Header = () => {
  const [services, setServices] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [openMenu, setOpenMenu] = useState(false)
  // const [mobileLan, setMobileLan] = useState(false)
  return (
    <div>
      <div className='w-full max-w-[1550px] fixed z-[999] left-[50%] top-0 translate-x-[-50%]'>
        <div className='flex justify-between xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] md:py-[20px] py-[10px] bg-[#fff]'>
          <div className='flex items-center gap-[20px]'>
            <Link href='/' className='flex items-center gap-[10px]'>
              <Image src={instagram} alt='instagram' />
              <span className='text-[14px] text-[#050123] md:block hidden'>Instagram</span>
            </Link>
            <div className='w-[2px] h-[18px] rounded-[15px] bg-[#000] md:block hidden'></div>
            <Link href='/' className='flex items-center gap-[10px] '>
              <Image src={facebook} alt='facebook' />
              <span className='text-[14px] text-[#050123] md:block hidden'>Facebook</span>
            </Link>
          </div>
          <div>
            <Link href='/' className='flex items-center gap-[10px]'>
              <Image src={mail} alt='mail' />
              <span className='text-[14px] text-[#050123]'>infosince.hub@gmail.com</span>
            </Link>
          </div>
        </div>
        <div>
          <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[20px] flex justify-between items-center w-full bg-[#374AF3]'>
            <div className='flex items-center gap-[15px]'>
              <button onClick={() => setOpenMenu(!openMenu)} className='md:hidden block'>
                <Image src={menu} alt='menu' />
              </button>
              <Link href='/' className='flex items-start'>
                <span className='lg:text-[36px] md:text-[32px] text-[20px] font-bold text-[#050123]'>SİNCE</span>
                <span className='lg:text-[36px] md:text-[32px] text-[20px] font-bold text-[#fff]'>.HUB</span>
                <span className='font-black text-[#fff] lg:text-[36px] md:text-[32px] text-[22px] lg:translate-y-[-25px] md:translate-y-[-22px] translate-y-[-18px]'>.</span>
              </Link>
            </div>
            <ul className='md:flex hidden items-center lg:gap-[40px] md:gap-[15px] text-[16px] text-[#fff] font-medium'>
              <li><Link href='/about'>Haqqımızda</Link></li>
              <li><Link href='/rules'>Qaydalar</Link></li>
              <li onClick={() => setServices(!services)} className='relative flex items-center gap-[5px]'>
                <span className='cursor-pointer list-hover'>Xidmətlər</span>
                <Image src={down} alt='down icon' />
                <ul className={` ${services ? 'block' : "hidden"} absolute left-0 top-0 bg-[#fff] text-[#000] mt-[30px] rounded-[8px] shadow-lg`}>
                  <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                    <Link href='/blogs'>Bloglar</Link>
                  </li>
                  <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                    <Link href='/books'>Kitablar</Link>
                  </li>
                  <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                    <Link href='/articles'>Məqalələr</Link>
                  </li>
                  <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                    <Link href='/dissertations'>Disertasiyalar</Link>
                  </li>
                  <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                    <Link href='/question-and-answer'>Sual cavab</Link>
                  </li>
                  <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                    <Link href='/forum'>Forum</Link>
                  </li>
                </ul>
              </li>
              <li><Link href='/contact'>Əlaqə</Link></li>
            </ul>
            <div className='flex items-center lg:gap-[30px] md:gap-[10px] gap-[15px]'>
              <div className='cursor-pointer relative ' ref={searchRef}>
                <button  onClick={toggleSearch}>
                  <Image src={search} alt='search' />
                </button>
                {isOpen ?
                  <div className='absolute left-[-120px] top-[38px] z-10 bg-[#fff] flex items-center justify-between lg:w-[350px] md:w-[280px] w-[250px] p-[5px] rounded-lg  shadow-md'>
                    <input type="text" placeholder='Axtar...' className='ps-[12px] outline-none py-[5px]  w-full' />
                    <button>
                      <Image src={searchIcon2} alt='search icon' />
                    </button>
                  </div> : null
                }
              </div>
              <div className='md:flex hidden items-center gap-[7px] cursor-pointer relative'>
                <div  className='flex items-center gap-[7px]'>
                  <span className='text-[#fff] md:text-[24px] text-[20px]'>AZ</span>
                  <Image src={down} alt='sown' />
                </div>
                {/* {
                  mobileLan ?
                    <ul className='absolute left-0 top-[45px] z-10 flex flex-col rounded-lg bg-[#fff] w-[100px] px-[10px] shadow-md'>
                      <li className='py-[7px] text-[20px] text-[#050123]'>AZ</li>
                      <li className='py-[7px] text-[20px] text-[#050123]'>RU</li>
                      <li className='py-[7px] text-[20px] text-[#050123]'>EN</li>
                    </ul> : null
                } */}
              </div>
              <Link href='/register' className='px-[21px] py-[10px] border-[1px] border-[#fff] rounded-[8px] md:text-[16px] text-[14px] font-medium text-[#fff]'>Daxil ol</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={openMenu
        ? 'fixed z-[999] left-0 top-0 w-full h-screen bg-[#eee] ease-in duration-500'
        : 'fixed left-[-100%] top-0 ease-in '}>
        <div className='relative flex items-center justify-center py-[20px] border-b-[2px] border-[#050123] border-opacity-10'>
          <span className='uppercase text-[22px] font-bold'>since</span>
          <span className='uppercase text-[22px] font-bold text-[#374AF3]'>.hub</span>
          <span className='uppercase text-[22px] font-bold text-[#374AF3] translate-y-[-15px]'>.</span>
          <button onClick={() => setOpenMenu(!openMenu)} className='absolute top-[20px] right-[20px]'>
            <Image src={closeIcon} alt='close icon' />
          </button>
        </div>
        <ul>
          <li onClick={() => setOpenMenu(!openMenu)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/about'>Haqqımızda</Link></li>
          <li onClick={() => setOpenMenu(!openMenu)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/rules'>Qaydalar</Link></li>
          <li onClick={() => setServices(!services)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 '>
            <div className='flex items-center gap-[5px]'>
              <span>Xidmətlər</span>
              <Image src={downBlack} alt="icon" />
            </div>
            {
              services ?
                <ul>
                  <li onClick={() => setOpenMenu(!openMenu)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/blogs'>Bloqlar</Link></li>
                  <li onClick={() => setOpenMenu(!openMenu)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/books'>Kitablar</Link></li>
                  <li onClick={() => setOpenMenu(!openMenu)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/articles'>Məqalələr</Link></li>
                  <li onClick={() => setOpenMenu(!openMenu)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/dissertations'>Disertasiyalar</Link></li>
                  <li onClick={() => setOpenMenu(!openMenu)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/question-and-answer'>Sual cavab</Link></li>
                  <li onClick={() => setOpenDropdown(!openDropdown)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/forum'>Forum</Link></li>
                </ul>
                : null
            }
          </li>
          <li onClick={() => setOpenMenu(!openMenu)} className='text-[16px] font-medium text-[#050123] px-[12px] py-[8px] border-b-[1px] border-[#050123] border-opacity-5 hover:bg-[#374af3] hover:bg-opacity-10'><Link href='/contact'>Əlaqə</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
