export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F9FAFB] py-[56px] md:py-[80px] px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="mb-12">
          <span className="inline-block rounded-full bg-[#F0FDFA] text-[#134E4A] border border-[#99F6E4] px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4">
            Process
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight">
            3 Steps. 7 Days. You're Online.
          </h2>
        </div>

        <div className="relative mt-12 md:mt-16">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[24px] left-[15%] right-[15%] h-px border-t border-dashed border-gray-300 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0D9488] text-white flex items-center justify-center text-[20px] font-bold mb-6 shadow-sm">
                01
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">Fill the Form</h3>
              <p className="text-[15px] text-gray-500 leading-[1.6] max-w-[280px]">
                Takes 2 minutes. Tell us your business name, type, and what you want — we handle the rest.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0D9488] text-white flex items-center justify-center text-[20px] font-bold mb-6 shadow-sm">
                02
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">We Call You on WhatsApp</h3>
              <p className="text-[15px] text-gray-500 leading-[1.6] max-w-[280px]">
                A 15-minute call. We discuss your business, collect your info, and confirm the plan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0D9488] text-white flex items-center justify-center text-[20px] font-bold mb-6 shadow-sm">
                03
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">Go Live in 7 Days</h3>
              <p className="text-[15px] text-gray-500 leading-[1.6] max-w-[280px]">
                Website, chatbot, and social pages — all set up and handed over to you. You just run your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
