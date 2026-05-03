"use client";

export default function TopBar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav className="bg-white/90 backdrop-blur-md shadow-[0_10px_30px_-5px_rgba(13,148,136,0.12)] border border-gray-100 rounded-full h-[60px] flex items-center justify-between px-6 md:px-10 w-full max-w-[800px] pointer-events-auto">
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-600">
          <button 
            onClick={() => scrollToSection('packages')} 
            className="hover:text-black transition-colors cursor-pointer font-medium"
          >
            Prebuilt
          </button>
          <button 
            onClick={() => scrollToSection('book-form')} 
            className="hover:text-black transition-colors cursor-pointer font-medium"
          >
            Customized
          </button>
        </div>
        
        <a href="/" className="group flex items-center font-extrabold text-xl tracking-tight flex-shrink-0 mx-auto md:mx-4">
          <span className="text-gray-900 group-hover:text-[#0D9488] transition-colors duration-300">DEVC</span>
          <span className="text-[#0D9488] group-hover:text-gray-900 transition-colors duration-300">LYST</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-600">
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="hover:text-black transition-colors cursor-pointer font-medium"
          >
            About Us
          </button>
          <a 
            href="https://wa.me/923704640009" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-black transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden flex items-center">
           <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </nav>
    </div>
  );
}
