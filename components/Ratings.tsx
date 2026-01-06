import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Ratings: React.FC = () => {
  return (
    <div className="px-6 pb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Calificaciones y opiniones</h2>
        <ArrowRight className="w-5 h-5 text-gray-500" />
      </div>

      <div className="flex items-start gap-8">
        {/* Big Number */}
        <div className="flex flex-col items-center">
           <span className="text-5xl font-medium text-gray-900">4.6</span>
           <div className="flex mt-2">
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f] half-filled" /> 
             {/* Using full star for simplicity but color implies rating */}
           </div>
           <span className="text-xs text-gray-500 mt-2">27 K opiniones</span>
        </div>

        {/* Bars */}
        <div className="flex-1 flex flex-col gap-1.5 mt-2">
          {[80, 15, 5, 2, 3].map((width, idx) => (
             <div key={idx} className="flex items-center gap-3">
               <span className="text-[10px] font-medium text-gray-600 w-2">{5 - idx}</span>
               <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-[#01875f] rounded-full" 
                   style={{ width: `${width}%` }}
                 ></div>
               </div>
             </div>
          ))}
        </div>
      </div>
      
      {/* Sample User Review */}
      <div className="mt-6 space-y-4">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xs">
              M
            </div>
            <span className="text-sm font-medium text-gray-800">María González</span>
            <div className="ml-auto">
               <MoreVerticalIcon />
            </div>
         </div>
         <div className="flex items-center gap-1">
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <Star className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
             <span className="text-xs text-gray-400 ml-2">14/09/23</span>
         </div>
         <p className="text-sm text-gray-600">
           Muy buena aplicación, funciona perfectamente para confirmar mis operaciones. Mucho más segura que el SMS. La recomiendo totalmente para clientes de Unicaja.
         </p>
         <div className="flex items-center gap-4 mt-2">
            <span className="text-xs text-gray-500">¿Te resultó útil?</span>
            <button className="text-xs font-medium text-gray-600 border border-gray-300 rounded-full px-3 py-1">Sí</button>
            <button className="text-xs font-medium text-gray-600 border border-gray-300 rounded-full px-3 py-1">No</button>
         </div>
      </div>
       <div className="mt-4 text-[#01875f] font-medium text-sm">Ver todas las opiniones</div>

    </div>
  );
};

const MoreVerticalIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
)

export default Ratings;