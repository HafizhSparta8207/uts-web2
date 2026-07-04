import React from 'react';
import { Code, Terminal } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Profile = () => {
  return (
    <PageTransition className="min-h-[80vh] flex items-center justify-center">
      <div className="glass-card w-full max-w-lg p-1 overflow-hidden relative group">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500 opacity-20 group-hover:opacity-40 animate-glow transition-opacity duration-500 rounded-2xl blur-md" />
        
        <div className="relative bg-slate-900/90 rounded-xl p-8 backdrop-blur-xl border border-white/5 h-full z-10">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col items-center mb-8 relative">
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary-500 to-purple-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                  MH
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-slate-800 rounded-full p-1.5 border-2 border-slate-900">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-1 tracking-wide text-center">M. Hafizh Sparta</h2>
            <div className="flex items-center space-x-2 text-primary-400 font-medium bg-primary-500/10 px-3 py-1 rounded-full text-sm mt-2">
              <Code size={14} />
              <span>NPM: 2410020118</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 mb-2">
            <div className="glass-panel p-4 flex items-center space-x-4 hover:bg-slate-800/50 transition-colors">
              <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                <Terminal size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Kelas</p>
                <p className="text-slate-200 font-semibold">4A SI BJB</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
};

export default Profile;
