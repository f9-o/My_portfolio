const EXPERIENCE = [
  {
    role: "DevOps Engineer",
    period: "2024 – 2026",
    tasks: [
      "Designing and maintaining CI/CD pipelines",
      "Automating infrastructure and deployment workflows",
      "Integrating security tooling into DevOps processes",
      "Managing scalable, reliable environments"
    ]
  },
  {
    role: "Software & Web Developer",
    period: "2021 – 2023",
    tasks: [
      "Building web applications and backend systems",
      "Developing internal tools and automation scripts",
      "Working across frontend and backend components"
    ]
  },
  {
    role: "Network Penetration Tester",
    period: "2020 – 2021",
    tasks: [
      "Conducting network security assessments",
      "Simulating attack scenarios on enterprise networks",
      "Identifying vulnerabilities and misconfigurations"
    ]
  },
  {
    role: "Offensive Security Programmer",
    period: "2016 – 2020",
    tasks: [
      "Developing offensive security tools and scripts",
      "Automating attack workflows and testing scenarios",
      "Experimenting with exploitation techniques and tooling"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-20 bg-[#030303]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-purple-500 pl-4">
          PROFESSIONAL EXPERIENCE
        </h2>

        <div className="relative border-l border-gray-800 ml-4 space-y-12">
          {EXPERIENCE.map((job, idx) => (
            <div key={idx} className="relative pl-8">
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-600 rounded-full border border-[#030303]" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                 <h3 className="text-xl font-bold text-white">{job.role}</h3>
                 <span className="text-neon-cyan font-mono text-sm">{job.period}</span>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-4 ml-2">
                {job.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="text-sm leading-relaxed">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
