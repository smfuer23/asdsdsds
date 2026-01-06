import React from 'react';

const Carousel: React.FC = () => {
  const screenshots = [
    "https://picsum.photos/250/500?random=1",
    "https://picsum.photos/250/500?random=2",
    "https://picsum.photos/250/500?random=3",
    "https://picsum.photos/250/500?random=4"
  ];

  return (
    <div className="mb-6">
       <div className="flex overflow-x-auto gap-3 px-6 no-scrollbar pb-2">
         {screenshots.map((src, i) => (
           <img 
            key={i} 
            src={src} 
            alt={`Screenshot ${i+1}`} 
            className="h-64 w-auto rounded-lg shadow-sm border border-gray-100 object-cover"
           />
         ))}
       </div>
    </div>
  );
};

export default Carousel;