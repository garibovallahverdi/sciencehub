import React from 'react'

const page = () => {
  return (
    <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px]'>
      <div>
        <span className='text-[24px] font-medium text-[#050123]'>Şəxsi detallar</span>
        <p className='mt-[10px] text-[16px] text-[#050123]'>Şəxsi məlumatlarınızı profilinizdə görünməsini istədiyiniz kimi əlavə edin.</p>
      </div>
      <div className='mt-[80px] w-full flex flex-col items-start gap-[32px]'>
        <div className='grid md:grid-cols-3 gap-[32px] w-full'>
            <div className='flex flex-col gap-[10px]'>
                <label htmlFor="Ad, soyad" className='text-[18px] text-[#44415a]'>Ad, soyad</label>
                <input type="text" id='Ad, soyad' placeholder='Ad və soyadınızı daxil edin' className='px-[20px] py-[16px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[16px]'/>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <label htmlFor="Peşə" className='text-[18px] text-[#44415a]'>Peşə</label>
                <input type="text" id='Peşə' placeholder='Peşənizi daxil edin' className='px-[20px] py-[16px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[16px]'/>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <label htmlFor="Profil şəkili" className='text-[18px] text-[#44415a]'>Profil şəkili</label>
                <input type="file" id='Profil şəkili' placeholder='Profil şəkili seçin' className='px-[20px] py-[16px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[16px]'/>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <label htmlFor="loc" className='text-[18px] text-[#44415a]'>Məkan</label>
                <input type="text" id='loc' placeholder='Məkan fərdiləşdirilməsi' className='px-[20px] py-[16px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[16px]'/>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <label htmlFor="Telefon" className='text-[18px] text-[#44415a]'>Telefon</label>
                <input type="text" id='Telefon' placeholder='Telefon nömrənizi daxil edin' className='px-[20px] py-[16px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[16px]'/>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <label htmlFor="email" className='text-[18px] text-[#44415a]'>E-poçt ünvanı</label>
                <input type="email" id='email' placeholder='E-poçt ünvanınızı daxil edin' className='px-[20px] py-[16px] outline-none rounded-[8px] border-[1px] border-[#050123] border-opacity-15 text-[16px]'/>
            </div>
        </div>
        <button className='px-[35px] py-[15px] text-[18px] text-[#fff] font-semibold rounded-[8px] bg-[#00cd52]'>Yadda saxla</button>
      </div>
    </div>
  )
}

export default page
