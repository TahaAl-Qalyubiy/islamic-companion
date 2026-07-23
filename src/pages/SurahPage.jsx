import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Bookmark } from 'lucide-react';
import Quran from '../components/Quran';

function SurahPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div dir='rtl' className='h-full p-4 bg-(--surface) '>
      <div className='flex justify-between items-center mb-4'>
        <button onClick={() => navigate('/quran')} className='p-1 rounded-md bg-emerald-700/30'>
          <ArrowRight />
        </button>
        <h2 className='text-(--primary) text-xl font-black'>سورة رقم {id}</h2>
        <button className='p-1 rounded-md bg-emerald-700/30'><Bookmark /></button>
      </div>
      <Quran surahId={id} />
    </div>
  );
}

export default SurahPage;