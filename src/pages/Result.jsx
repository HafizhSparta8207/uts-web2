import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { ArrowLeft, Award, RefreshCcw } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import PageTransition from '../components/PageTransition';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (!location.state) {
    return <Navigate to="/app" replace />;
  }

  const { finalScore, predicate, status, raw } = location.state;

  const getStatusColor = (status) => {
    switch (status) {
      case 'LULUS': return 'from-emerald-500 to-green-400 text-emerald-50 shadow-emerald-500/40 bg-emerald-500/20 border-emerald-500/50';
      case 'MENGULANG': return 'from-amber-500 to-yellow-400 text-amber-50 shadow-amber-500/40 bg-amber-500/20 border-amber-500/50';
      case 'TIDAK LULUS': return 'from-rose-500 to-red-400 text-rose-50 shadow-rose-500/40 bg-rose-500/20 border-rose-500/50';
      default: return 'from-slate-500 to-slate-400 text-slate-50';
    }
  };

  const statusStyle = getStatusColor(status);

  return (
    <PageTransition className="max-w-2xl mx-auto mt-4">
      <div className="glass-card overflow-hidden">
        {/* Header Banner */}
        <div className={cn("px-8 py-10 text-center relative overflow-hidden bg-gradient-to-br", statusStyle.split(' ')[0], statusStyle.split(' ')[1])}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 bg-white/20 backdrop-blur-md rounded-full mb-4 shadow-xl">
              <Award size={48} className="text-white" />
            </div>
            <h2 className="text-xl font-medium text-white/80 mb-1 uppercase tracking-widest">Nilai Akhir</h2>
            <div className="text-6xl font-black text-white drop-shadow-lg tracking-tighter mb-4">
              {finalScore}
            </div>
            
            {/* Dynamic Badge */}
            <div className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold tracking-widest shadow-lg">
              {status}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-8">
          <div className="flex justify-between items-center p-6 glass-panel mb-8">
            <div className="text-center w-full border-r border-slate-700/50">
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Predikat</p>
              <p className="text-4xl font-bold text-primary-400">{predicate}</p>
            </div>
            <div className="text-center w-full">
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Status</p>
              <p className={cn("text-xl font-bold mt-2", 
                status === 'LULUS' ? 'text-emerald-400' : 
                status === 'MENGULANG' ? 'text-amber-400' : 'text-rose-400'
              )}>
                {status}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="glass-panel p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Absen (10%)</p>
              <p className="text-lg font-semibold text-slate-300">{raw.absen}</p>
            </div>
            <div className="glass-panel p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Tugas (20%)</p>
              <p className="text-lg font-semibold text-slate-300">{raw.tugas}</p>
            </div>
            <div className="glass-panel p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">UTS (30%)</p>
              <p className="text-lg font-semibold text-slate-300">{raw.uts}</p>
            </div>
            <div className="glass-panel p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">UAS (40%)</p>
              <p className="text-lg font-semibold text-slate-300">{raw.uas}</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/app')}
              className="flex-1 btn-primary bg-slate-800 hover:bg-slate-700 text-slate-300 shadow-none hover:shadow-none flex items-center justify-center space-x-2"
            >
              <RefreshCcw size={18} />
              <span>Hitung Ulang</span>
            </button>
            <button 
              onClick={() => navigate('/')}
              className="flex-1 btn-primary flex items-center justify-center space-x-2"
            >
              <ArrowLeft size={18} />
              <span>Ke Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Result;
