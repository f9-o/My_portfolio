import { Cpu } from 'lucide-react';

const INTERESTS = [
  "Edge Computing & Embedded Systems",
  "Raspberry Pi & ESP32 Projects",
  "Software-driven Hardware Automation",
  "Secure & Efficient Edge Environments"
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-20 px-4 md:px-20 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 flex items-center gap-3">
           CURRENT INTERESTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INTERESTS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0a0a0f] border border-gray-800 p-4 rounded text-gray-300">
               <Cpu className="w-5 h-5 text-green-500" />
               <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
