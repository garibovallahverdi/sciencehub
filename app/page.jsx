"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AboutCard from "@/components/about-card";
import aboutIcon1 from '../public/svgs/about-icon1.svg'
import aboutIcon2 from '../public/svgs/about-icon2.svg'
import aboutIcon3 from '../public/svgs/about-icon3.svg'
import aboutImg from '../public/imgs/about-img.png'
import shareImg from '../public/imgs/share-img.png'
import booksImg from '../public/imgs/books-img.png'
import maqasImg from '../public/imgs/maqas-img.png'
import bloqsImg from '../public/imgs/bloqs-img.png'
import slide1 from '../public/imgs/slide-1.png'
import slide2 from '../public/imgs/slide-2.png'
import slide3 from '../public/imgs/slide-3.jpeg'
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../public/css/style.css'

// import './styles.css';

import { Pagination, Navigation } from 'swiper/modules';


export default function Home() {
  const data = [1, 2, 3, 4]
  return (
    <div className='max-w-[1550px] mx-auto w-full'>
      <div className="flex items-center justify-between h-[450px] xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] pt-[80px] gap-[40px]">
        <div className="md:w-2/3 w-full h-full rounded-[16px] overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper h-full"
          >
            <SwiperSlide className='relative'>
              <Image src={slide1} alt='slide img' className='w-full h-full' />
              <div className='absolute left-[16px] bottom-[40px]'>
                <span className='text-[20px] font-semibold text-[#fff]'>Zeynep Kaya: Yeni Başlangıçlar</span>
                <p className='text-[16px] text-[#fff] text-opacity-75'>İçsel Değişim ve Kişisel Gelişim Üzerine" adlı eseri, bireylerin hayatlarında yapmak istedikleri...</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
              <Image src={slide2} alt='slide img' className='w-full h-full ' />
              <div className='absolute left-[16px] bottom-[40px]'>
                <span className='text-[20px] font-semibold text-[#fff]'>Zeynep Kaya: Yeni Başlangıçlar</span>
                <p className='text-[16px] text-[#fff] text-opacity-75'>İçsel Değişim ve Kişisel Gelişim Üzerine" adlı eseri, bireylerin hayatlarında yapmak istedikleri...</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
              <Image src={slide3} alt='slide img' className='w-full h-full ' />
              <div className='absolute left-[16px] bottom-[40px]'>
                <span className='text-[20px] font-semibold text-[#fff]'>Zeynep Kaya: Yeni Başlangıçlar</span>
                <p className='text-[16px] text-[#fff] text-opacity-75'>İçsel Değişim ve Kişisel Gelişim Üzerine" adlı eseri, bireylerin hayatlarında yapmak istedikleri...</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-1/3 h-full md:flex flex-col justify-between hidden">
          <div className='h-[45%] rounded-[8px] overflow-hidden relative'>
            <Image src={slide2} alt='slide img' className='w-full h-[100%]' />
            <div className='absolute left-[16px] bottom-[18px]'>
              <span className='text-[16px] font-semibold text-[#fff]'>Dini mətnlərdəki ortaq əfsanələr</span>
              <p className='text-[14px] text-[#fff] text-opacity-75'>Dini mətnlərdə bir çox ortaq hekayələr görürük...</p>
            </div>
          </div>
          <div className='h-[45%] rounded-[8px] overflow-hidden relative'>
            <Image src={slide3} alt='slide img' className='w-full h-[100%]' />
            <div className='absolute left-[16px] bottom-[18px]'>
              <span className='text-[16px] font-semibold text-[#fff]'>Dini mətnlərdəki ortaq əfsanələr</span>
              <p className='text-[14px] text-[#fff] text-opacity-75'>Dini mətnlərdə bir çox ortaq hekayələr görürük...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-[24px] xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] py-[120px] ">
        <div className="bg-[#374AF3] rounded-[16px] flex flex-col md:w-[364px] w-full relative overflow-hidden min-h-[308px]">
          <span className="text-[16px] text-[#fff] mt-[40px] ms-[50px]">Bloglar və daha çoxu</span>
          <span className="text-[32px] font-semibold text-[#fff] my-[36px] ms-[20px]">#Kitablar</span>
          <li className="text-[#fff] text-opacity-75 text-[20px] rotate-[-5deg] mt-[30px] ms-[28px]">Məqalələr</li>
          <Image src={shareImg} alt="share img" className="absolute right-0 bottom-0 z-10" />
          <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" width="364" height="182" viewBox="0 0 364 182" fill="none">
            <path d="M364 182C364 158.099 359.292 134.433 350.146 112.352C341 90.2703 327.594 70.2068 310.693 53.3066C293.793 36.4063 273.73 23.0003 251.648 13.8539C229.567 4.70757 205.901 -1.04473e-06 182 0C158.099 1.04473e-06 134.433 4.70757 112.352 13.8539C90.2703 23.0003 70.2068 36.4063 53.3066 53.3066C36.4063 70.2068 23.0003 90.2704 13.8539 112.352C4.70756 134.433 -2.08945e-06 158.099 0 182L364 182Z" fill="url(#paint0_linear_1345_12199)" />
            <defs>
              <linearGradient id="paint0_linear_1345_12199" x1="182" y1="0" x2="182" y2="182" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0.17" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-[28px] bg-[#F8F8F8] rounded-[16px] py-[25px] flex flex-col items-start md:w-3/4 w-full">
          <span className="text-[16px] text-[#374af3] font-medium">İndi başla</span>
          <span className="md:text-[28px] text-[24px] text-[#050123] font-medium">Paylaşmaq üçün buradasınız: Bilik İcmasına xoş gəlmisiniz!</span>
          <ul className="ms-[15px] mt-[20px] text-[16px] text-[#050123] text-opacity-50 list-disc flex flex-wrap gap-x-[55px] gap-y-[15px]">
            <li>Universitet məlumatları</li>
            <li>Araşdırma-tədqiqat</li>
            <li>Faydalı məlumatlar</li>
            <li>Fayllar</li>
            <li>Yazılar</li>
            <li>Kitablar</li>
            <li>Bloglar</li>
            <li>Məqalələr</li>
            <li>Disertasiyalar</li>
            <li>Yenilik-xəbər</li>
            <li>Sual cavab</li>
          </ul>
          <Link href='/share-content' className="px-[32px] py-[16px] mt-[50px] bg-[#374af3] rounded-[8px] text-[16px] font-bold text-[#fff]">Paylaşım et</Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-between xl:ps-[80px] lg:ps-[50px] md:ps-[30px] md:px-0 px-[16px] pt-[80px] md:pb-[80px] pb-[400px] bg-[#EEFAFA] relative mb-[100px]">
        <div className="flex flex-col items-start md:w-4/5 w-full z-10">
          <span className="md:text-[36px] text-[28px] text-[#050123] font-medium">Haqqımızda</span>
          <span className="mt-[10px] text-[#050123] text-opacity-50 md:text-[20px] text-[16px] font-medium">3 əsas mərhələdə haqqımızda daha çox məlumat əldə edin</span>
          <div className="mt-[50px] grid md:grid-cols-3 xl:gap-[32px] md:gap-[15px] gap-[32px]">
            <div className='bg-[#fff] lg:px-[20px] px-[15px] lg:py-[30px] py-[20px] flex flex-col items-start rounded-lg shadow-md'>
              <div className='p-[9px] bg-[#F3A74A] rounded'>
                <Image src={aboutIcon1} alt='about icon' />
              </div>
              <span className='mt-[20px] font-medium text-[24px] '>Dəyərlərimiz</span>
              <p className='mt-[10px] text-[16px] font-medium text-[#050123] text-opacity-50'>İşimizi sadiqliklə, şəffaflıqla və etik normativlərlə üstün tuturuq. Müştərilərimiz və tərəfdaşlarımızla sağlam əlaqələr qurmağa önəlik veririk.</p>
            </div>
            <div className='bg-[#fff] lg:px-[20px] px-[15px] lg:py-[30px] py-[20px] flex flex-col items-start rounded-lg shadow-md'>
              <div className='p-[9px] rounded bg-[#F34A5A]'>
                <Image src={aboutIcon2} alt='about icon' />
              </div>
              <span className='mt-[20px] font-medium text-[24px] '>Hədəflərimiz</span>
              <p className='mt-[10px] text-[16px] font-medium text-[#050123] text-opacity-50'>Mükəmməl xidmət təklifi üçün planlı və yüksək standartlarda çalışmağı hədəfləyirik. Uzunmüddətli nailiyyət əldə etməyi hədəfləyirik.</p>
            </div>
            <div className='bg-[#fff] lg:px-[20px] px-[15px] lg:py-[30px] py-[20px] flex flex-col items-start rounded-lg shadow-md'>
              <div className='p-[9px] rounded bg-[#00CD52]'>
                <Image src={aboutIcon3} alt='about icon' />
              </div>
              <span className='mt-[20px] font-medium text-[24px] '>Missiyamız</span>
              <p className='mt-[10px] text-[16px] font-medium text-[#050123] text-opacity-50'>Müştərilərimizə uğur yolculuğunda tərəfdaşlıq və dəstək təmin etmək istəyirik. Layiqli xidmət missiyamızın əsasını təşkil edir.</p>
            </div>
          </div>
        </div>
        <div className='absolute md:bottom-[50%] bottom-0 md:translate-y-[50%] md:right-0 right-[50%] md:translate-x-0 translate-x-[50%] lg:h-[500px] md:h-[420px] h-[286px] lg:w-[320px] md:w-[280px] w-[343px] md:rounded-[180px] rounded-[700px] overflow-hidden md:mb-0 mb-[20px]'>
          <Image src={aboutImg} alt='about img' className='w-full h-full' />
        </div>
      </div>
      <div className="xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px]">
        <div className="flex flex-col items-center">
          <span className="text-[24px] font-medium text-[#050123] ">Gündəmdə olan</span>
          <span className="mt-[5px] text-[16px] text-[#050123] text-opacity-50 md:text-start text-center">Gündəmdə olan ən son yazılar və mövzular üçün bizi ziyarət edin. Maraqlı məqalə və kitabları kəşf edin!</span>
        </div>
        <div className='overflow-x-auto'>
          <div className="grid grid-cols-4 gap-[32px] mt-[30px] md:min-w-[1700px] min-w-[1100px]">
            <div className="relative md:h-[250px] h-[155px] rounded-[8px] overflow-hidden">
              <div className="w-full h-full absolute left-0 top-0  bg-[#050123] bg-opacity-50 flex items-center justify-center">
                <span className="md:px-[56px] px-[26px] py-[15px] rounded-[8px] bg-[#fff] bg-opacity-25 md:text-[30px] text-[22px] font-medium text-[#fff]">Bloqlar</span>
              </div>
              <Image src={bloqsImg} alt="bloq img" className=" w-full h-full" />
            </div>
            <div className="relative md:h-[250px] h-[155px] rounded-[8px] overflow-hidden">
              <div className="w-full h-full absolute left-0 top-0  bg-[#050123] bg-opacity-50 flex items-center justify-center">
                <span className="md:px-[56px] px-[26px] py-[15px] rounded-[8px] bg-[#fff] bg-opacity-25 md:text-[30px] text-[22px] font-medium text-[#fff]">Məqalələr</span>
              </div>
              <Image src={maqasImg} alt="bloq img" className=" w-full h-full" />
            </div>
            <div className="relative md:h-[250px] h-[155px] rounded-[8px] overflow-hidden">
              <div className="w-full h-full absolute left-0 top-0  bg-[#050123] bg-opacity-50 flex items-center justify-center">
                <span className="md:px-[56px] px-[26px] py-[15px] rounded-[8px] bg-[#fff] bg-opacity-25 md:text-[30px] text-[22px] font-medium text-[#fff]">Kitablar</span>
              </div>
              <Image src={booksImg} alt="bloq img" className=" w-full h-full" />
            </div>
            <div className="relative md:h-[250px] h-[155px] rounded-[8px] overflow-hidden">
              <div className="w-full h-full absolute left-0 top-0  bg-[#050123] bg-opacity-50 flex items-center justify-center">
                <span className="md:px-[56px] px-[26px] py-[15px] rounded-[8px] bg-[#fff] bg-opacity-25 md:text-[30px] text-[22px] font-medium text-[#fff]">Disertasiyalar</span>
              </div>
              <Image src={bloqsImg} alt="bloq img" className=" w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[150px] xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px] bg-[#F9F9F9] py-[80px] flex flex-col gap-[100px]">
        <div>
          <div className="flex justify-between">
            <span className="text-[24px] text-[#050123] font-medium">Məqalələr</span>
            <Link href='/' className="text-[18px] font-medium text-[#374af3]">daha çox</Link>
          </div>
          <div className='overflow-x-auto'>
            <div className="mt-[16px] grid grid-cols-4 gap-x-[32px] gap-y-[48px] min-w-[1300px]">
              {
                data.map(item => {
                  return <Card key={item} />
                })
              }
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-[24px] text-[#050123] font-medium">Bloglar</span>
            <Link href='/' className="text-[18px] font-medium text-[#374af3]">daha çox</Link>
          </div>
          <div className='overflow-x-auto'>
            <div className="mt-[16px] grid grid-cols-4 gap-x-[32px] gap-y-[48px] min-w-[1300px]">
              {
                data.map(item=>{
                  return <Card key={item}/>
                })
              }
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-[24px] text-[#050123] font-medium">Kitablar</span>
            <Link href='/' className="text-[18px] font-medium text-[#374af3]">daha çox</Link>
          </div>
          <div className='overflow-x-auto'>
            <div className="mt-[16px] grid grid-cols-4 gap-x-[32px] gap-y-[48px] min-w-[1300px]">
              {
                data.map(item=>{
                  return <Card key={item}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
