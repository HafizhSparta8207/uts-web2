import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="relative mb-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
        <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-6 drop-shadow-sm">
          Grade Calculation<br />System
        </h1>
      </div>
      
      <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mb-12 font-light leading-relaxed">
        Sistem penilaian akademik interaktif berbasis bobot nilai. Memudahkan perhitungan nilai akhir dengan predikat kelulusan yang akurat.
      </p>

      <button 
        onClick={() => navigate('/app')}
        className="btn-primary group flex items-center space-x-3 text-lg py-4 px-8"
      >
        <span>Mulai Hitung Nilai</span>
        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </PageTransition>
  );
};

export default Home;
