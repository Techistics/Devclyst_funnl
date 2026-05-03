"use client";

export default function HeroSection() {
  return (
    <section className="relative pt-[80px] md:pt-[100px] pb-12 px-5 md:px-10 bg-white overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Pipeline Visual Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#0D9488]/0 via-[#0D9488]/20 to-[#0D9488]/0 z-0"></div>

      <div className="relative z-10 max-w-[850px] mx-auto text-center flex flex-col items-center">
        
        {/* Picture Placeholder - Lifted even higher */}
        <div className="w-[280px] h-[280px] md:w-[420px] md:h-[400px] mx-auto -mt-[40px] md:-mt-[60px] -mb-[100px] md:-mb-[140px] relative z-0 flex justify-center">
           {/* Put your image in the public folder as hero-image.png */}
           <img 
             src="/hero-image.png" 
             alt="DevClyst Founders" 
             className="w-full h-full object-contain object-bottom drop-shadow-2xl"
             onError={(e) => {
               // Fallback if the image isn't uploaded yet
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
               e.currentTarget.nextElementSibling?.classList.add('flex');
             }}
           />
           <div className="hidden absolute inset-0 flex-col items-center justify-center border-2 border-dashed border-gray-300 text-gray-400 rounded-t-[100px] md:rounded-t-[200px] bg-white/50 backdrop-blur-sm">
             <span className="font-medium text-[15px] text-center px-4">
               📸 Save your transparent picture as<br/>
               <code className="bg-gray-100 px-2 py-1 rounded mt-2 inline-block text-gray-600">public/hero-image.png</code>
             </span>
           </div>
        </div>

        {/* Text Content - Overlapping the picture */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="rounded-full bg-white/80 text-[#134E4A] border border-[#99F6E4] px-4 py-1 text-[13px] font-medium mb-4 backdrop-blur-md shadow-sm">
            🟢 Taking new clients — 7 slots left this month
          </div>
          
          <h1 className="text-[32px] md:text-[56px] font-bold leading-[1.2] text-gray-900 tracking-tight mb-8 max-w-[900px] mx-auto">
            Bridge the digital gap to <span className="text-[#0D9488]">recapture</span> lost customers.
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-gray-500 font-normal leading-[1.5] max-w-[650px] mx-auto mb-6 bg-white/40 backdrop-blur-[2px] rounded-xl py-1 px-4">
            We put your business online in 7 days — website, WhatsApp chatbot, Facebook and Instagram pages — completely done for you.
          </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-6 w-full">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0D9488]">50+</div>
            <div className="text-[12px] text-gray-500 mt-1 uppercase tracking-wider">Businesses</div>
          </div>
          <div className="hidden md:block w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0D9488]">7 Days</div>
            <div className="text-[12px] text-gray-500 mt-1 uppercase tracking-wider">Delivery</div>
          </div>
          <div className="hidden md:block w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0D9488]">Rs. 14,999</div>
            <div className="text-[12px] text-gray-500 mt-1 uppercase tracking-wider">Starting Price</div>
          </div>
        </div>

        <button 
          onClick={() => {
            document.getElementById('book-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full md:w-auto min-w-[300px] h-[58px] bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-[12px] text-[18px] font-bold tracking-wide transition-all transform hover:-translate-y-[1px] flex items-center justify-center shadow-xl shadow-teal-900/20"
        >
          Get Our Free Consultation →
        </button>

        <p className="text-[13px] text-gray-400 mt-4 text-center">
          No payment now  ·  15-min WhatsApp call  ·  No commitment
        </p>

        <div className="mt-10 w-full max-w-[700px] aspect-video bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden relative group cursor-pointer">
           {/* Placeholder for demo media */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
             Video / Mockup Placeholder
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
        </div>
        </div>
      </div>
    </section>
  );
}
