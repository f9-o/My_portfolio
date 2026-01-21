const CARDS = [
  {
    title: "Offensive Tooling",
    desc: "Designing and developing offensive security tools used for attack simulation, testing detection capabilities, and exploring real-world threat scenarios.",
    color: "border-red-500/30 text-red-400"
  },
  {
    title: "DevOps & Automation",
    desc: "Building automated infrastructures, CI/CD pipelines, and system workflows that support security operations and tool deployment at scale.",
    color: "border-blue-500/30 text-blue-400"
  },
  {
    title: "Adversary Simulation",
    desc: "Creating tools and environments that mimic real attackers to help test, stress, and validate defensive systems.",
    color: "border-purple-500/30 text-purple-400"
  },
  {
    title: "Security by Design",
    desc: "Every tool is built with performance, stealth, and operational realism in mind.",
    color: "border-green-500/30 text-green-400"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-20 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        {/* Bio */}
        <div className="mb-16 text-center md:text-left">
           <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-neon-cyan pl-4">ABOUT ME</h2>
           <div className="space-y-4 text-gray-300 leading-relaxed text-lg max-w-3xl">
              <p>
                I’m Faisal Al-Nuaimany, known as <span className="text-neon-cyan font-bold">F9o</span>.
              </p>
              <p>
                I build offensive security tools and DevOps-driven systems focused on attack simulation, infrastructure automation, and real-world adversary scenarios.
              </p>
              <p>
                My work blends security engineering with DevOps practices to create fast, scalable, and practical tooling.
              </p>
           </div>
        </div>

        {/* What I Build Grid */}
        <h3 className="text-xl font-bold text-gray-400 mb-8 flex items-center gap-2">
           <span className="w-8 h-[1px] bg-gray-600"></span> WHAT I BUILD
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card, idx) => (
            <div 
              key={idx}
              className={`p-6 bg-[#0a0a0f] border ${card.color} rounded hover:bg-gray-900/50 transition-colors`}
            >
              <h4 className={`text-lg font-bold mb-3 ${card.color.split(' ')[1]}`}>{card.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
