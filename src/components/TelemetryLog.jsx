const TelemetryLog = ({ title, date, status, desc }) => (
  <div className="font-mono text-xs border-l-2 border-crm-border pl-4 py-2 hover:border-crm-orange transition-colors group">
     <div className="flex gap-4 text-crm-dim mb-1">
        <span>[{date}]</span>
        <span className={`uppercase ${status === 'COMPLETED' ? 'text-crm-green' : 'text-crm-orange'}`}>[{status}]</span>
     </div>
     <div className="text-crm-blue font-bold mb-1 group-hover:text-white transition-colors">> {title}</div>
     <div className="text-gray-500 leading-relaxed">{desc}</div>
  </div>
);

export default TelemetryLog;
