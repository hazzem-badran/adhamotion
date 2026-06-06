import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-gradient-main">
      <div className="relative w-32 h-32">
        {/* Ring 1 */}
        <div className="absolute w-20 h-20 border-[6px] border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Ring 2 */}
        <div className="absolute w-15 h-15 border-[5px] border-cyan-400 border-r-transparent rounded-full animate-spin" 
             style={{
               animation: 'spin 1.8s linear infinite',
               animationDelay: '0.2s',
               width: '60px',
               height: '60px',
               top: '10px',
               left: '10px'
             }}>
        </div>
        
        {/* Ring 3 */}
        <div className="absolute w-10 h-10 border-4 border-yellow-400 border-b-transparent rounded-full animate-spin"
             style={{
               animation: 'spin 1.6s linear infinite',
               animationDelay: '0.4s',
               top: '20px',
               left: '20px'
             }}>
        </div>
        
        {/* Center dot */}
        <div className="absolute w-5 h-5 bg-purple-600 rounded-full shadow-lg shadow-purple-600/50"
             style={{
               animation: 'pulse 1.4s infinite',
               animationDelay: '0.6s',
               top: '37.5px',
               left: '37.5px'
             }}>
        </div>
      </div>
    </div>
  );
};

export default Loader;

