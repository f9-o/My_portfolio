import { Award } from 'lucide-react';

const CERTS = [
  "/Coursera 0XGBMZU44I2E-1.png",
  "/Coursera B4V166JHJR47-1.png",
  "/Coursera GL20RCAFHFLZ-1.png",
  "/Coursera GMCNSK6XW0S3-1.png",
  "/Coursera VTJ4ZJ080SG7-1.png",
  "/Coursera WUJVFEF1H6U3-1.png"
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-20 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4 flex items-center gap-3">
           <Award className="w-8 h-8 text-cyan-500" />
           ACHIEVEMENTS & CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((imgSrc, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg border border-gray-800 bg-[#0a0a0f]">
               {/* Image */}
               <div className="aspect-video overflow-hidden">
                 <img 
                   src={imgSrc} 
                   alt={`Certification ${idx + 1}`} 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                 />
               </div>
               
               {/* Overlay (Optional Text or just subtle glow) */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-cyan-400 font-mono text-sm font-bold">VERIFIED CREDENTIAL</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
