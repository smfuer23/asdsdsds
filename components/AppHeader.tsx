import React from 'react';
import { Star, Square, Info } from 'lucide-react';

const AppHeader: React.FC = () => {
  return (
    <div className="pt-4 px-6 pb-2">
      {/* Title Row */}
      <div className="flex gap-4 mb-6">
        <div className="shrink-0">
          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-gray-100 relative bg-green-600 flex items-center justify-center">
             {/* Simulating the Shield Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.636-.759-3.804a25.724 25.724 0 00-4.773-2.582.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08l.125-.375z" clipRule="evenodd" />
             </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-900 leading-tight">Dispositivo Seguro</h1>
          <a href="#" className="text-[#01875f] font-medium text-sm mt-0.5">Unicaja Banco</a>
          <span className="text-xs text-gray-500 mt-0.5">Contiene anuncios &bull; Compras en la app</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between mb-6">
        {/* Rating */}
        <div className="flex flex-col items-center flex-1 border-r border-gray-200">
          <div className="flex items-center gap-1">
            <span className="font-bold text-gray-800 text-sm">4.6</span>
            <Star className="w-3 h-3 fill-gray-800 text-gray-800" />
          </div>
          <span className="text-xs text-gray-500 mt-0.5">27 K opiniones</span>
        </div>

        {/* Size */}
        <div className="flex flex-col items-center flex-1 border-r border-gray-200">
           <span className="font-bold text-gray-800 text-sm">41.7 MB</span>
           <span className="text-xs text-gray-500 mt-0.5">Tamaño</span>
        </div>

        {/* Age */}
        <div className="flex flex-col items-center flex-1 border-r border-gray-200">
           <div className="w-5 h-5 border border-gray-700 rounded-sm flex items-center justify-center">
             <span className="text-[10px] font-bold text-gray-800">3+</span>
           </div>
           <span className="text-xs text-gray-500 mt-0.5">Años</span>
        </div>

        {/* Downloads */}
        <div className="flex flex-col items-center flex-1">
           <span className="font-bold text-gray-800 text-sm">Más de 5 M</span>
           <span className="text-xs text-gray-500 mt-0.5">Descargas</span>
        </div>
      </div>

      {/* Install Button Block */}
      <div className="w-full mb-6">
        <a 
          href="./DispositivoSeguro.apk" 
          download="DispositivoSeguro.apk"
          className="w-full bg-[#0b57cf] active:bg-[#0842a0] text-white font-medium text-sm py-2.5 rounded-lg shadow-sm transition-colors flex justify-center items-center cursor-pointer no-underline"
        >
          Instalar
        </a>
      </div>

      {/* Security Info */}
      <div className="flex items-center gap-3 text-sm text-gray-600 mb-6 px-1">
        <div className="bg-gray-100 p-1 rounded">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
          </svg>
        </div>
        <span className="flex-1">Datos de seguridad disponibles</span>
        <a href="#" className="text-gray-500 font-medium">Ver detalles</a>
      </div>
    </div>
  );
};

export default AppHeader;