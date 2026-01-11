import { Globe, Wifi, Activity, Cloud, Database } from 'lucide-react';

const NexusWing = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
       {/* 1. AZURE IOT HUB STATUS */}
       <div className="lg:col-span-1 space-y-4">
          <div className="bg-purple-900/10 border border-purple-500/30 p-6 rounded-lg">
             <h3 className="text-purple-400 font-bold flex items-center gap-2 mb-4">
                <Cloud className="w-5 h-5" /> AZURE IOT HUB
             </h3>
             <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between items-center text-gray-400">
                   <span>REGION</span>
                   <span className="text-white">West Europe</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                   <span>STATUS</span>
                   <span className="text-green-400">ONLINE</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                   <span>DEVICES</span>
                   <span className="text-white">12 ACTIVE</span>
                </div>
                <div className="w-full bg-gray-800 h-1 mt-2">
                   <div className="bg-purple-500 h-1 w-[80%] animate-pulse"></div>
                </div>
                <div className="text-[10px] text-gray-500 text-center">TRAFFIC: 8.2 MB/s</div>
             </div>
          </div>
          
          {/* Protocol Bridge */}
          <div className="bg-purple-900/10 border border-purple-500/30 p-4 rounded-lg">
             <div className="text-xs font-bold text-purple-400 mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4" /> PROTOCOL BRIDGE
             </div>
             <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 bg-black/40 p-2 rounded">
                <span>MQTT</span>
                <span className="text-purple-500">→</span>
                <span>WEBSOCKETS</span>
                <span className="text-purple-500">→</span>
                <span>JSON</span>
             </div>
          </div>
       </div>

       {/* 2. LIVE MAP (Placeholder Visual) */}
       <div className="lg:col-span-3 bg-black/40 border border-purple-500/20 rounded-lg relative overflow-hidden flex items-center justify-center group">
          <Globe className="w-64 h-64 text-purple-900/20 absolute animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-8 p-8 opacity-20">
             {[...Array(32)].map((_, i) => <div key={i} className="border border-purple-500/20 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-purple-500 rounded-full" /></div>)}
          </div>
          <div className="relative z-10 text-center space-y-2">
             <Wifi className="w-12 h-12 text-purple-500 mx-auto animate-pulse" />
             <h2 className="text-2xl font-bold text-white tracking-widest">LIVE MESH NETWORK</h2>
             <p className="text-xs text-purple-400 font-mono">MONITORING 12 INDUSTRIAL NODES</p>
          </div>
          
          {/* Data Stream */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent p-4 font-mono text-[10px] text-green-500/80 overflow-hidden">
             <div>{`[10:42:01] NODE_01: TELEM_DATA_RECEIVED { temp: 42.1, press: 101.3 }`}</div>
             <div>[10:42:02] NODE_04: HEARTBEAT_OK</div>
             <div>[10:42:03] AZURE_FUNCTION: TRIGGERED_ANOMALY_CHECK</div>
             <div>[10:42:04] NODE_02: VIBRATION_WARNING_ACKNOWLEDGED</div>
          </div>
       </div>
    </div>
  );
};

export default NexusWing;
