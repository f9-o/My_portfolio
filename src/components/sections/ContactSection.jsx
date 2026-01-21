import { Mail, Github, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-20 bg-[#030303] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">CONTACT</h2>
        
        <div className="bg-[#0a0a0f] border border-gray-800 p-8 rounded mb-12">
           <form className="flex flex-col gap-4">
             <input type="text" placeholder="Name" className="bg-gray-900 border border-gray-700 p-3 rounded text-white focus:border-neon-cyan outline-none" />
             <input type="email" placeholder="Email" className="bg-gray-900 border border-gray-700 p-3 rounded text-white focus:border-neon-cyan outline-none" />
             <textarea placeholder="Message" rows="4" className="bg-gray-900 border border-gray-700 p-3 rounded text-white focus:border-neon-cyan outline-none"></textarea>
             <button type="button" className="bg-white text-black font-bold py-3 hover:bg-gray-200 transition-colors">
               SEND MESSAGE
             </button>
           </form>
        </div>

        <div className="flex justify-center gap-8">
           <a href="https://github.com/f9-o" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
           </a>
           <a href="https://x.com/0xf9o" className="text-gray-500 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
           </a>
           <a href="https://www.instagram.com/92n_" className="text-gray-500 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
           </a>
        </div>
        
        <div className="mt-12 text-xs text-gray-700 font-mono">
           © 2026 FAISAL ALNUMANI (F9O). ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
