import React from 'react';

const Bismillah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
function Quran() {



  return (
    <div className='xl:w-5/6 w-full h-[calc(100vh-211px)] bg-white mt-2.5 scrollbar-track-amber-50 scrollbar-thin overflow-auto '>
      <p className='text-center font-bold lg:text-3xl text-lg text-(--primary) '>{Bismillah}</p>
      
      <p className='mt-10 bg-amber-200 text-2xl leading-loose text-justify'>
        <span>الم</span> 
        <span className='w-8 h-8 border-2 border-(--primary) rounded-full mr-2 text-base  inline-flex items-center justify-center text-(--primary)'>1</span>
        </p>
    </div>
  );
}

export default Quran;
