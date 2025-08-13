import { useEffect, useState } from 'react';

function ProgressBar({ completed, total }) {
  const [progress, setProgress] = useState(0);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="w-full bg-gray-800 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner border border-gray-700">
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
      </div>
    </div>
  );
}

export default ProgressBar;

