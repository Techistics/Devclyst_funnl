"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("book-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-[40px] md:pt-[60px] pb-16 px-5 md:px-10 bg-white overflow-hidden min-h-0 flex items-center justify-center">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-[1000px] mx-auto text-center flex flex-col items-center">
        
        {/* 1. Photo Block (Glow + Grid + Floating Cards) */}
        <div className="relative w-full max-w-[500px] mb-4 flex justify-center items-center overflow-visible">
          {/* Radial Glow Behind Photo */}
          <div 
            className="absolute inset-0 -z-10 translate-y-10"
            style={{
              background: "radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)",
            }}
          />
          
          {/* Blurred Circle Background */}
          <div className="absolute w-[300px] h-[300px] bg-[#0D9488]/[0.08] blur-[60px] rounded-full -z-10" />

          {/* Main Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative z-10 w-full"
          >
            <img 
              src="/hero-image.png" 
              alt="DevClyst Founders" 
              className="w-full h-auto drop-shadow-2xl object-contain max-h-[280px] md:max-h-[340px]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback placeholder */}
            <div className="hidden aspect-square w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400">
               <span className="text-sm">Founders Image</span>
               <code className="text-[10px] mt-2">public/hero-image.png</code>
            </div>
          </motion.div>

          {/* Floating Card 1: Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [-6, 6]
            }}
            transition={{ 
              opacity: { duration: 0.5, delay: 0.4, ease: "easeOut" },
              x: { duration: 0.5, delay: 0.4, ease: "easeOut" },
              y: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
            }}
            className="hidden md:flex absolute left-[-60px] top-1/4 z-20 bg-white border border-[#E5E7EB] rounded-[12px] py-[10px] px-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] items-center gap-2 whitespace-nowrap"
          >
            <div className="w-5 h-5 rounded-full bg-[#CCFBF1] flex items-center justify-center">
               <svg className="w-3 h-3 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="text-[13px] font-semibold text-gray-800">50+ Businesses Launched</span>
          </motion.div>

          {/* Floating Card 2: Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [6, -6]
            }}
            transition={{ 
              opacity: { duration: 0.5, delay: 0.4, ease: "easeOut" },
              x: { duration: 0.5, delay: 0.4, ease: "easeOut" },
              y: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
            }}
            className="hidden md:flex absolute right-[-60px] bottom-1/4 z-20 bg-white border border-[#E5E7EB] rounded-[12px] py-[10px] px-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] items-center gap-2 whitespace-nowrap"
          >
            <div className="w-5 h-5 rounded-full bg-[#FEF9C3] flex items-center justify-center">
               <svg className="w-3 h-3 text-[#CA8A04]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
            </div>
            <span className="text-[13px] font-semibold text-gray-800">7 Day Delivery</span>
          </motion.div>

          {/* Floating Card 3: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [4, -4]
            }}
            transition={{ 
              opacity: { duration: 0.5, delay: 0.5, ease: "easeOut" },
              x: { duration: 0.5, delay: 0.5, ease: "easeOut" },
              y: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
            }}
            className="hidden md:flex absolute left-[-60px] bottom-1/4 z-20 bg-white border border-[#E5E7EB] rounded-[12px] py-[10px] px-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] items-center gap-2 whitespace-nowrap"
          >
            <div className="w-5 h-5 rounded-full bg-[#FEF9C3] flex items-center justify-center">
               <svg className="w-3.5 h-3.5 text-[#EAB308]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <span className="text-[13px] font-semibold text-gray-800">5★ Client Rating</span>
          </motion.div>

          {/* Floating Card 4: Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [-4, 4]
            }}
            transition={{ 
              opacity: { duration: 0.5, delay: 0.5, ease: "easeOut" },
              x: { duration: 0.5, delay: 0.5, ease: "easeOut" },
              y: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
            }}
            className="hidden md:flex absolute right-[-60px] top-1/4 z-20 bg-white border border-[#E5E7EB] rounded-[12px] py-[10px] px-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] items-center gap-2 whitespace-nowrap"
          >
            <div className="w-5 h-5 rounded-full bg-[#DCF8C6] flex items-center justify-center">
               <svg className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path></svg>
            </div>
            <span className="text-[13px] font-semibold text-gray-800">WhatsApp Support 24/7</span>
          </motion.div>
        </div>

        {/* 2. H1 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-[22px] sm:text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.1] text-gray-900 tracking-tight mb-6 max-w-full"
        >
          Every day offline is a <span className="text-[#0D9488]">lost customer.</span>
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-[18px] md:text-[22px] text-gray-500 font-medium leading-[1.5] max-w-[600px] mb-10"
        >
          Website. WhatsApp Chatbot. Social Pages.<br className="hidden md:block" /> Done in 7 days.
        </motion.p>

        {/* 4. CTA Button + Trust Micro-copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <button 
            onClick={scrollToForm}
            className="w-full md:w-auto min-w-[320px] h-[64px] bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-[14px] text-[19px] font-bold tracking-wide transition-all transform hover:-translate-y-[2px] flex items-center justify-center shadow-xl shadow-teal-900/20"
          >
            Get Our Free Consultation →
          </button>
          
          <p className="text-[13px] text-gray-400 mt-5 font-medium flex items-center gap-2">
            <svg className="w-4 h-4 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
            No payment now · 15-min WhatsApp call · No commitment
          </p>
        </motion.div>

      </div>
    </section>
  );
}
