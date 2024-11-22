// 'use client';
// import React from 'react';
import Image from 'next/image';
// const EditPhoto = ({ isOpen, Close,profileImg}) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-[24px] mt-[100px]">
//       <div className="bg-white p-9 rounded-lg w-1/3">
//         <div className="flex justify-end">
//           <button onClick={Close} className='text-[26px]'>&times;</button>
//         </div>
//         <div>
//           <div>
//             <h2 className="text-[24px] font-semibold ">Profil şəkli</h2>
//             <p className="text-gray-500 mb-4">Üzünüzü aydın göstərən görünüşə malik foto seçməyiniz tövsiyə olunur.</p>
//           </div>
//          <Image src={profileImg} className="w-28 h-28 rounded-full mx-auto mt-10"/>
//           <div className="flex justify-center mt-10 gap-[30px]">
//             <button className="w-[140px] h-[40px] text-white bg-[#374af3] rounded-[8px]">Şəkli dəyişdir</button>
//             <button className="w-[140px] h-[40px] border-[#374af3] border-[1px] text-[#374af3] rounded-[8px]">Şəkli sil</button>
//           </div>
//            <div className="text-[14px] text-gray-500 mt-6">Maksimum ölçü: 1MB. Dəstəklənən formatlar:<span className='text-[#44415a]'>JPG,GIF və ya PNG.</span> </div>
//           <button className="bg-green-500 text-white w-[428px] h-[52px]  mt-10 rounded-[6px] " onClick={Close} >Yadda saxla</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default EditPhoto;

import React from 'react'

const EditPhoto = ({ profileImg, isOpen, setIsOpen }) => {
  return (
    <div className=" inset-0  flex items-center justify-center rounded-[24px] mt-[100px] w-[600px]">
      <div className="bg-white md:p-[50px] p-[20px]   rounded-lg  relative">
        <div className="absolute md:top-[24px] top-[16px] md:right-[24px] right-[16px]">
          <button className='text-[26px]' onClick={()=>setIsOpen(!isOpen)} >&times;</button>
        </div>
        <div className='flex flex-col items-center'>
          <div>
            <h2 className="text-[24px] font-semibold ">Profil şəkli</h2>
            <p className="text-gray-500 mb-4">Üzünüzü aydın göstərən görünüşə malik foto seçməyiniz tövsiyə olunur.</p>
          </div>
          <Image src={profileImg} className="w-28 h-28 rounded-full mx-auto mt-10" />
          <div className="flex justify-center mt-10 gap-[30px]">
            <button className="w-[140px] h-[40px] text-white bg-[#374af3] rounded-[8px]">Şəkli dəyişdir</button>
            <button className="w-[140px] h-[40px] border-[#374af3] border-[1px] text-[#374af3] rounded-[8px]">Şəkli sil</button>
          </div>
          <div className="text-[14px] text-gray-500 mt-6">Maksimum ölçü: 1MB. Dəstəklənən formatlar:<span className='text-[#44415a]'>JPG,GIF və ya PNG.</span> </div>
          <button className="bg-green-500 text-white w-[428px] h-[52px]  mt-10 rounded-[6px] " onClick={()=>setIsOpen(!isOpen)} >Yadda saxla</button>
        </div>
      </div>
    </div>
  )
}

export default EditPhoto
