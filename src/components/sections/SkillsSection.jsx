const SKILLS = {
  "Languages": ["Python", "Bash", "SQL", "Go", "HTML5", "Java", "JavaScript", "Next.js"],
  "Security Tooling": ["Offensive Engineering", "Threat Simulation"],
  "DevOps & Infra": ["Docker", "Terraform", "CI/CD", "Kubernetes"]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-20 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-yellow-500 pl-4">
           SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, items], idx) => (
            <div key={idx} className="bg-[#0a0a0f] border border-gray-800 p-6 rounded hover:border-gray-600 transition-colors">
              <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm border-b border-gray-800 pb-2">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded font-mono"
                  >
                    • {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
