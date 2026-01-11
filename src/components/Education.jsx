import { GraduationCap, Award } from 'lucide-react';

const EDUCATION = [
  {
    degree: "Bachelor of Mechanical Engineering",
    school: "University Name (Placeholder)",
    year: "2024",
    details: "Focus on Thermodynamics and Control Systems."
  }
];

const CERTS = [
  "Advanced React & Next.js Certification",
  "IoT System Design Fundamentals",
  "Certified SolidWorks Associate (CSWA)"
];

const Education = ({ t }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       {/* Education Column */}
       <div className="bg-crm-panel border border-white/5 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
             <GraduationCap className="w-5 h-5 text-crm-blue" />
             <h3 className="text-lg font-bold tracking-widest">EDUCATION</h3>
          </div>
          <div className="space-y-6">
             {EDUCATION.map((edu, i) => (
                <div key={i}>
                   <h4 className="text-white font-bold mb-1">{edu.degree}</h4>
                   <div className="text-crm-dim font-mono text-xs mb-2">{edu.school} • {edu.year}</div>
                   <p className="text-gray-500 text-sm">{edu.details}</p>
                </div>
             ))}
          </div>
       </div>

       {/* Certifications Column */}
       <div className="bg-crm-panel border border-white/5 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
             <Award className="w-5 h-5 text-crm-orange" />
             <h3 className="text-lg font-bold tracking-widest">CERTIFICATIONS</h3>
          </div>
          <ul className="space-y-4">
             {CERTS.map((cert, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                   <span className="block mt-1.5 w-1 h-1 bg-crm-orange rounded-full"></span>
                   {cert}
                </li>
             ))}
          </ul>
       </div>
    </div>
  );
};

export default Education;
