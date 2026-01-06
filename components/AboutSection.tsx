import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="px-6 mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-medium text-gray-900">Acerca de esta app</h2>
        <ArrowRight className="w-5 h-5 text-gray-500" />
      </div>
      
      <div className="relative">
        <div className={`text-sm text-gray-600 leading-relaxed space-y-3 ${!isExpanded ? 'line-clamp-4' : ''}`}>
          <p>
            <strong>Dispositivo Seguro Unicaja</strong> es la aplicación oficial de autenticación reforzada de Unicaja Banco. Diseñada para cumplir con la normativa europea PSD2, esta aplicación convierte tu móvil en tu llave de seguridad para operar en Banca Digital.
          </p>
          
          <p>
            Ya no necesitarás esperar códigos por SMS. Valida tus transferencias, compras online y accesos de forma rápida, sencilla y segura directamente desde esta app.
          </p>

          {isExpanded && (
            <>
              <h3 className="font-bold text-gray-800 mt-4">Funcionalidades principales:</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Autenticación en dos pasos (2FA):</strong> Protege tu cuenta verificando que eres tú quien realiza cada operación.</li>
                <li><strong>Firma Biométrica:</strong> Utiliza tu huella dactilar o reconocimiento facial para autorizar operaciones sin recordar claves complejas.</li>
                <li><strong>Vinculación de Dispositivo:</strong> Asocia tu terminal móvil a tu perfil de banca para garantizar que solo se puede acceder desde dispositivos de confianza.</li>
                <li><strong>Notificaciones Push:</strong> Recibe alertas instantáneas cuando se requiera tu autorización para una compra o transferencia.</li>
                <li><strong>Gestión offline:</strong> Genera códigos de seguridad incluso si no tienes cobertura de datos en ese momento.</li>
              </ul>

              <h3 className="font-bold text-gray-800 mt-4">¿Por qué es necesaria?</h3>
              <p>
                Para garantizar la máxima seguridad en tus finanzas, Unicaja Banco requiere un método de autenticación robusto. Esta app sustituye a la tarjeta de coordenadas y al SMS tradicional, ofreciendo un entorno encriptado de extremo a extremo.
              </p>

              <h3 className="font-bold text-gray-800 mt-4">Información de la versión:</h3>
              <p>
                Versión 4.2.1<br/>
                Actualizado el 15 oct. 2023<br/>
                Requiere Android 8.0 y versiones posteriores.<br/>
                Ofrecido por: Unicaja Banco, S.A.
              </p>
            </>
          )}
        </div>
        
        {!isExpanded && (
           <button 
             onClick={() => setIsExpanded(true)}
             className="text-[#01875f] font-medium text-sm mt-2 block"
           >
             Ver más
           </button>
        )}
      </div>

      <div className="mt-6 flex gap-2 flex-wrap">
        <span className="px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-600">Finanzas</span>
        <span className="px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-600">Herramientas</span>
        <span className="px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-600">Seguridad</span>
      </div>
    </div>
  );
};

export default AboutSection;