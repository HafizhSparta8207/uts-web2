import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, AlertCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const AppPage = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState({
    absen: '',
    tugas: '',
    uts: '',
    uas: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Allow empty string or numbers between 0-100
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      setScores({ ...scores, [name]: value });
      setError('');
    }
  };

  const calculateGrade = (e) => {
    e.preventDefault();
    
    // Validate all fields filled
    if (Object.values(scores).some(val => val === '')) {
      setError('Semua nilai wajib diisi (0-100)');
      return;
    }

    const absenScore = Number(scores.absen) * 0.10;
    const tugasScore = Number(scores.tugas) * 0.20;
    const utsScore = Number(scores.uts) * 0.30;
    const uasScore = Number(scores.uas) * 0.40;
    
    const finalScore = absenScore + tugasScore + utsScore + uasScore;
    
    let predicate = 'E';
    if (finalScore >= 80) predicate = 'A';
    else if (finalScore >= 70) predicate = 'B';
    else if (finalScore >= 60) predicate = 'C';
    else if (finalScore >= 50) predicate = 'D';

    let status = 'TIDAK LULUS';
    if (finalScore >= 70) status = 'LULUS';
    else if (finalScore >= 60) status = 'MENGULANG';

    navigate('/result', { 
      state: { 
        raw: scores, 
        finalScore: finalScore.toFixed(1), 
        predicate, 
        status 
      } 
    });
  };

  const inputs = [
    { id: 'absen', label: 'Nilai Absen (10%)', placeholder: '0 - 100' },
    { id: 'tugas', label: 'Nilai Tugas (20%)', placeholder: '0 - 100' },
    { id: 'uts', label: 'Nilai UTS (30%)', placeholder: '0 - 100' },
    { id: 'uas', label: 'Nilai UAS (40%)', placeholder: '0 - 100' },
  ];

  return (
    <PageTransition className="max-w-xl mx-auto mt-4">
      <div className="glass-card p-8">
        <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-800">
          <div className="p-3 bg-primary-500/20 rounded-xl text-primary-400">
            <Calculator size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Input Nilai Mahasiswa</h2>
            <p className="text-slate-400 text-sm mt-1">Masukkan nilai untuk menghitung hasil akhir</p>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center space-x-3 text-red-400">
            <AlertCircle size={20} />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}

        <form onSubmit={calculateGrade} className="space-y-5">
          {inputs.map((input) => (
            <div key={input.id} className="relative group">
              <label htmlFor={input.id} className="block text-sm font-medium text-slate-300 mb-2">
                {input.label}
              </label>
              <div className="relative">
                <input
                  type="number"
                  id={input.id}
                  name={input.id}
                  value={scores[input.id]}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  className="input-field peer"
                  min="0"
                  max="100"
                />
                <div className="absolute inset-0 -z-10 rounded-xl bg-primary-500/0 peer-focus:bg-primary-500/10 blur-xl transition-all duration-500" />
              </div>
            </div>
          ))}

          <button type="submit" className="btn-primary w-full mt-8 flex justify-center items-center">
            <Calculator size={18} className="mr-2" />
            Hitung Hasil Akhir
          </button>
        </form>
      </div>
    </PageTransition>
  );
};

export default AppPage;
