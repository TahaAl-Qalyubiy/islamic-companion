import { ArrowLeft, ArrowRight, Bookmark, Search } from 'lucide-react';
import React, { useState } from 'react';
import Quran from '../components/Quran';
import { useNavigate } from 'react-router-dom';


const surahs = [
  {id : 1 , name : 'الْفَاتِحَة'},
  {id : 2 , name : 'الْبقراء'},
  {id : 3 , name : 'الْ عمران'},
  {id : 4 , name : 'الْنساء'},
]
function Alquran() {
  const [surahMobile , setSurahMobile] = useState([0])
  const navigate = useNavigate()
  const handelOnclick = (surah) =>{
    const isMobil = window.innerWidth < 765 ;
    if(isMobil){
      navigate(`/quran/${surah.id}`)
    }else{
      setSurahMobile(surah)
    }
  }
  return (
    <div dir='rtl' className='h-full '>
      <div className="quran flex  gap-5 h-full">
        <div className="mnue w-full md:w-64 xl:w-80 bg-(--surface) xl:bg-(--primary) py-5 ">
          <div className='flex items-center w-fit border xl:border-amber-50 rounded-md p-1 mx-5'>
            <input type="search" placeholder='بحث...' className='outline-none xl:text-amber-50 w-44 p-1 text-xs '/>
            <button className='xl:text-amber-50 text-xs'> <Search className='text-xs w-5'/></button>
          </div> 
           <h2 className='px-5 mt-3 font-black xl:text-amber-50'> السور (114)</h2>
          <div className='flex justify-center'>
            <ul className=' surah  xl:text-amber-50 text-xs mt-5 scrollbar-thumb-emerald-900 rounded-tr-2xl w-90 rounded-tl-2xl p-2 scrollbar-track-amber-50 scrollbar-thin overflow-auto h-[calc(100vh-211px)]'>
              {surahs.map((surah) => (
              <li 
              key={surah.id}
              onClick={() => handelOnclick(surah)}
              className='flex items-center gap-5 text-xl hover:bg-emerald-700/30 px-2 py-3 border-b border-b-mauve-300 '>
                <div className='px-3 py-1 rounded-md text-lg bg-emerald-700 text-white'>{surah.id}</div>
                <div >{surah.name}</div>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="elsour px-6 py-5 w-full flex-col hidden md:flex">
          <div className="flex justify-between items-center w-5/6">
            <h2 className='text-emerald-900 text-2xl font-black p-2 w-fit rounded-md bg-emerald-700/30'>سورة {surahMobile.name}</h2>
            <button className='p-1 rounded-md bg-emerald-700/30'><Bookmark /></button>
          </div>
          <div className="flex items-center justify-baseline w-full "><Quran/></div>
          <div className='flex justify-between items-center w-5/6 mt-2'>
            <button
            className='flex items-center gap-2 py-1.5 px-2.5 map rounded-xl font-bold hover:translate-y-1.5 transition delay-150 duration-300 ease-in-out cursor-pointer'>السورة السابقه <ArrowRight /></button>
            <button className='flex items-center gap-2 py-1.5 px-2.5 map rounded-xl font-bold hover:translate-y-1.5 transition delay-150 duration-300 ease-in-out cursor-pointer'>السورة التاليه <ArrowLeft /></button>

          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Alquran;
