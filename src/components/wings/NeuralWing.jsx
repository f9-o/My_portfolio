import { Brain, MessageSquare, FileText, CheckCircle } from 'lucide-react';

const NeuralWing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
       <div className="bg-yellow-900/10 border border-yellow-500/30 p-6 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-yellow-500/10 transition-colors">
          <CheckCircle className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-lg font-bold text-yellow-100">RESPONSIBLE AI AUDITOR</h3>
          <p className="text-xs text-gray-400 mt-2 max-w-[200px]">Check prompts for bias and ethical alignment.</p>
       </div>

       <div className="bg-yellow-900/10 border border-yellow-500/30 p-6 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-yellow-500/10 transition-colors">
          <MessageSquare className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-lg font-bold text-yellow-100">PROMPT ARCHITECT</h3>
          <p className="text-xs text-gray-400 mt-2 max-w-[200px]">Structured generation for LLM system prompts.</p>
       </div>

       <div className="bg-yellow-900/10 border border-yellow-500/30 p-6 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-yellow-500/10 transition-colors">
          <FileText className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-lg font-bold text-yellow-100">AUTO-DOCS GEN</h3>
          <p className="text-xs text-gray-400 mt-2 max-w-[200px]">Automate README creation from codebase analysis.</p>
       </div>
       
       <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-black/40 border border-yellow-500/20 p-6 rounded-lg min-h-[200px]">
          <h4 className="text-xs font-mono text-yellow-500 mb-4">NEURAL PROCESSING LOGS</h4>
          <div className="font-mono text-xs space-y-1 text-gray-500">
             <div>> LOADED MODEL: gpt-4o-mini-quantized</div>
             <div>> ETHICS FILTER: ACTIVE (Strict Mode)</div>
             <div>> AWAITING USER INPUT...</div>
          </div>
       </div>
    </div>
  );
};

export default NeuralWing;
