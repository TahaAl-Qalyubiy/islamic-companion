import { ArrowLeft, ArrowRight, Bookmark, Search } from 'lucide-react';
import React, { useEffect, useReducer, useState   } from 'react';
import Quran from '../components/Quran';
import { useNavigate } from 'react-router-dom';



function Alquran() {
  const initialState = {
    surahs : [],
    selectedSurah:null,
    loading : true  
  }
  function  reducer (state , action) {
    
    switch(action.type){
      case 'setSurah':
        return{
          ...state, 
          surahs:action.payload,
        }
      case 'setSelectsurah':
        return{
          ...state,
          selectedSurah:action.payload,
        }
      case 'setloding':
        return{
          ...state,
          loading:action.payload,
        }
      default:
        return state    
    }
  }
  const [state , dispatch] = useReducer(reducer , initialState) 

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah`)
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type:'setSurah',
        payload:json.data
      })
        dispatch({
        type:'setSelectsurah',
        payload:json.data[0]
      })
      dispatch({
        type:'setloding',
        payload:false
      })
    })
  },[])
  console.log(state)

  const navigate = useNavigate()
  const handelOnclick = (surah) =>{
    const isMobil = window.innerWidth < 765 ;
    if(isMobil){
      navigate(`/quran/${surah.number}`)
    }else{
      dispatch({
  type: "setSelectsurah",
  payload: surah,
});
    }
  }
  const handlClickNext = () =>{
    const currencindex = state.surahs.findIndex(
      (surah) => surah.number === state.selectedSurah.number
    )
    if(currencindex < state.surahs.length - 1){
      dispatch({
        type:'setSelectsurah',
        payload:state.surahs[currencindex + 1]
      });
    }
  }
  const handlprever = () =>{
   const currencindex = state.surahs.findIndex(
      (surah) => surah.number === state.selectedSurah.number
      )
      if(currencindex > 0){
        dispatch({
          type:'setSelectsurah',
          payload:state.surahs[currencindex - 1]
        })
      }
  }
  //=====search ===========
  const [search , setSearch] = useState('')
  
  function removeDiacritics(text) {
  return text.replace(/[\u064B-\u065F\u0670]/g, "");
}

  const filteredSurahs = state.surahs.filter((surah) => {
    return removeDiacritics(surah.name).includes(removeDiacritics(search.trim()))
    })
  



  return (
    <div dir='rtl' className='h-full '>
      <div className="quran flex  gap-5 h-full">
        <div className="mnue w-full md:w-64 xl:w-80 bg-(--surface) xl:bg-(--background) py-5 ">
          <div className='flex items-center lg:w-full w-80 md:w-60 xl:w-52 border xl:border-(--border) rounded-md p-1 mx-5'>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search" placeholder='بحث...' className='outline-none xl:text-(--text) w-80 p-1 text-xs '/>
            <button className='xl:text-(--text) text-xs cursor-pointer'> <Search className='text-xs w-5'/></button>
          </div> 
           <h2 className='px-5 mt-3 font-black xl:text-(--text)'> السور (114)</h2>
          <div className='flex justify-center'>
            <ul className=' surah  xl:text-(--text) text-xs mt-5 scrollbar-thumb-emerald-900 rounded-tr-2xl w-full rounded-tl-2xl p-2 scrollbar-track-amber-50 scrollbar-thin overflow-auto h-[calc(100vh-211px)]'>
              {filteredSurahs.map((surah) => (
              <li 
              key={surah.number}
              onClick={() => handelOnclick(surah)}
              className='flex items-center gap-5 text-2xl lg:text-xl hover:bg-emerald-700/30 px-2 py-3 border-b border-b-mauve-300 cursor-pointer'>
                <div className='px-3 py-1 rounded-md text-lg bg-emerald-700 text-white'>{surah.number}</div>
                <div >{surah.name}</div>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="elsour px-6 py-5 w-full flex-col hidden md:flex bg-(--surface)">
          <div className="flex justify-between items-center w-5/6 xl:m-auto lg:w-full xl:w-5/6">
            <h2 className='text-(--primary) text-xl font-black p-3 w-fit rounded-md bg-(--background)/30'>{state.selectedSurah?.name}</h2>
            <button className='p-1 rounded-md bg-emerald-700/30'><Bookmark /></button>
          </div>
          <div className="flex items-center justify-baseline w-full xl:flex-col xl:justify-center ">{state.selectedSurah && (
            <Quran surahId={state.selectedSurah.number} />
          )}</div>
          <div className='flex justify-between items-center w-5/6 mt-2 m-auto'>
            <button
              onClick={handlprever}
              className='flex items-center gap-2 py-1.5 px-2.5 map rounded-xl font-bold hover:translate-y-1.5 transition delay-150 duration-300 ease-in-out cursor-pointer'>السورة السابقه <ArrowRight /></button>
            <button 
              onClick={handlClickNext}
            className='flex items-center gap-2 py-1.5 px-2.5 map rounded-xl font-bold hover:translate-y-1.5 transition delay-150 duration-300 ease-in-out cursor-pointer'>السورة التاليه <ArrowLeft /></button>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Alquran;
