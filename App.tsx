import React from 'react';
import Header from './components/Header';
import AppHeader from './components/AppHeader';
import AboutSection from './components/AboutSection';
import Ratings from './components/Ratings';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto shadow-2xl overflow-hidden pb-12">
      <Header />
      <main>
        <AppHeader />
        
        {/* Novedades Section (Moved up where Carousel was) */}
        <div className="px-6 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium text-gray-900">Novedades</h2>
            <ArrowRight className="w-5 h-5 text-gray-500" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Actualización de seguridad importante.<br/>
            Mejoras en la estabilidad de la firma biométrica y corrección de errores menores para garantizar la mejor experiencia en tus operaciones online.
          </p>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gray-100 mb-6 mx-6 w-[calc(100%-3rem)]"></div>

        <AboutSection />
        
        <div className="h-px w-full bg-gray-200 my-4"></div>
        
        <Ratings />
      </main>
    </div>
  );
}

export default App;