export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-white py-[56px] md:py-[80px] px-5 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#F0FDFA] text-[#134E4A] border border-[#99F6E4] px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4">
            Our Work
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight mb-3">
            Businesses We've Set Up
          </h2>
          <p className="text-[18px] text-gray-500">
            Real businesses. Live websites. Click to see.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Portfolio Card 1 */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-white border border-gray-200 rounded-[20px] overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full aspect-[16/10] bg-gray-100 relative overflow-hidden border-b border-gray-100">
               {/* Placeholder for screenshot */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-[1.05] transition-transform duration-500">
                 Client 1 Screenshot Placeholder
               </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-[18px] font-bold text-gray-900">Glamour Salon</h3>
                  <p className="text-[14px] text-gray-500 mt-0.5">Salon · Lahore</p>
                </div>
              </div>
              
              <div className="w-full h-[46px] rounded-xl border-2 border-[#0D9488] text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white flex items-center justify-center text-[15px] font-bold transition-all duration-300">
                Visit Website →
              </div>
            </div>
          </a>

          {/* Portfolio Card 2 */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-white border border-gray-200 rounded-[20px] overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full aspect-[16/10] bg-gray-100 relative overflow-hidden border-b border-gray-100">
               {/* Placeholder for screenshot */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-[1.05] transition-transform duration-500">
                 Client 2 Screenshot Placeholder
               </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-[18px] font-bold text-gray-900">Spicy Bite</h3>
                  <p className="text-[14px] text-gray-500 mt-0.5">Restaurant · Karachi</p>
                </div>
              </div>
              
              <div className="w-full h-[46px] rounded-xl border-2 border-[#0D9488] text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white flex items-center justify-center text-[15px] font-bold transition-all duration-300">
                Visit Website →
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
