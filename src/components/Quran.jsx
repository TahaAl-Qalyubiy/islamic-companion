import React,{useEffect , useReducer, useRef} from 'react';

const Bismillah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
function Quran({surahId = 1}) {

   const scrollRef = useRef(null);
  const initialState = {
    ayahs :[],
    surahName : '',
    loading:true
  }

  function reducer(state , action){
    switch(action.type){
      case 'FETCH_AYAH':
        return {
          ...state,
          ayahs:action.payload,
        }
      case 'FETCH_SURAH_NAME':
        return {
          ...state,
          surahName:action.payload
        }
      case 'SET_LOADING':
        return {
          ...state,
          loading:false
        }
      default:
        return state
    }
  }
  
  const [state , dispatch] = useReducer(reducer , initialState)
  
  useEffect(()=>{
    fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
    .then(res => res.json())
    .then((json) => {
      
      let fetchedAyahs = json.data.ayahs

      let isFathe = Number(surahId) === 1
      let isTawba = Number(surahId) === 9
       if(!isFathe&&!isTawba && fetchedAyahs.length  > 0){
         fetchedAyahs = fetchedAyahs.map((ayah, index) => {
            if (index === 0) {
              const words = ayah.text.trim().split(/\s+/);
              const withoutBismillah = words.slice(4).join(' ');
              return { ...ayah, text: withoutBismillah };
            }
            return ayah;
          });
       }

      dispatch({type:'FETCH_AYAH' , payload:fetchedAyahs})
      dispatch({type:'FETCH_SURAH_NAME' , payload:json.data.name})
      dispatch({type:'SET_LOADING' , payload:false})
    })
    if (scrollRef.current) {
    scrollRef.current.scrollTop = 0;
  }
  },[surahId])
  const BismillaTawba = Number(surahId) !== 9 && Number(surahId) !== 1 ;


  return (
    <div 
      ref={scrollRef}
    className='xl:w-5/6  w-full h-[calc(100vh-211px)] bg-(--surface) mt-4 scrollbar-track-amber-50 scrollbar-thin overflow-auto '>
      {BismillaTawba &&  (
        <p className='text-center font-bold lg:text-3xl text-lg text-(--primary) '>{Bismillah}</p>
      )}
      
      
      <p className='mt-7 text-2xl leading-loose text-justify p-2'>
        {state.ayahs.map((ayah) => (
          <span 
          key={ayah.number}
          >{ayah.text}
          <span className='w-8 h-8 border-2 border-(--primary) rounded-full mr-1 ml-1 text-sm  inline-flex items-center justify-center text-(--primary)'>{ayah.numberInSurah}</span>
          </span> 
        ))}
        </p>
    </div>
  );
}

export default Quran;
