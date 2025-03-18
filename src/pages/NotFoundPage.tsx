import React, { useEffect, useState } from 'react';
import { Home, ChevronRight } from 'lucide-react';

const NotFound:React.FC = () => {
  const [countdown, setCountdown] = useState(10);
  
  // Handle navigation
  const goToHomepage = () => {
    window.location.href = '/';
  };
  
  const goBack = () => {
    window.history.back();
  };
  
  // Automatic redirect countdown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      goToHomepage();
    }
  }, [countdown]);
  
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated "404" */}
        <div className="relative mb-8">
          <div className="text-[150px] md:text-[200px] font-mono font-bold text-gray-800 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-[150px] md:text-[200px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 animate-pulse select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center blur-xl opacity-50 text-[150px] md:text-[200px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 animate-pulse select-none">
            404
          </div>
        </div>
        
        {/* Message */}
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Code snippet */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-8 text-left mx-auto max-w-md">
          <pre className="text-sm text-gray-300 font-mono">
            <span className="text-blue-400">const</span> <span className="text-emerald-400">page</span> = <span className="text-yellow-400">findPage</span>({"{"}
            <span className="text-red-400">  path: </span><span className="text-green-400">"{window.location.pathname}"</span>
            {"}"});
            <br/>
            <span className="text-red-400">// Error: Page not found in directory</span>
            <span className="text-emerald-500 block mt-2">status: <span className="text-white">404</span></span>
          </pre>
        </div>
        
        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button 
            onClick={goToHomepage}
            className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center transition-colors w-full sm:w-auto justify-center"
          >
            <Home size={18} className="mr-2" />
            Go to Homepage
          </button>
          
          <button 
            onClick={goBack}
            className="px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center transition-colors w-full sm:w-auto justify-center"
          >
            Go Back
          </button>
        </div>
        
        {/* Auto-redirect notice */}
        <div className="text-gray-500 text-sm">
          Redirecting to homepage in <span className="text-emerald-400 font-medium">{countdown}</span> seconds
        </div>
      </div>
      
      {/* Footer with breadcrumb */}
      <div className="absolute bottom-8 text-gray-500 text-sm flex items-center">
        <span>Home</span>
        <ChevronRight size={14} className="mx-1" />
        <span>404 Not Found</span>
      </div>
    </section>
  );
};

export default NotFound;