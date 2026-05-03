import TopBar from "@/components/funnel/TopBar";
import FAQAccordion from "@/components/funnel/FAQAccordion";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <main className="bg-white min-h-screen pt-[120px] md:pt-[160px]">
        {/* Hero Section */}
        <section className="px-5 md:px-10 mb-16 md:mb-24">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[40px] md:text-[64px] font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              About Us
            </h1>
            <p className="text-[18px] md:text-[22px] text-gray-500 leading-relaxed max-w-[700px] mx-auto">
              From idea to launch, we design and develop tailor-made websites & apps that scale with your business.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="px-5 md:px-10 py-16 bg-[#F9FAFB]">
          <div className="max-w-[900px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block rounded-full bg-[#F0FDFA] text-[#134E4A] border border-[#99F6E4] px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4">
                  Our Mission
                </span>
                <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                  Building the Digital Future
                </h2>
                <div className="space-y-4 text-gray-600 text-[16px] leading-relaxed">
                  <p>
                    DevClyst was founded with a single mission: to empower local businesses in Pakistan with the same high-end digital tools used by global giants.
                  </p>
                  <p>
                    We believe that every salon, restaurant, and shop deserves a professional online presence and automated tools that work for them 24/7.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-[48px] font-extrabold text-[#0D9488] mb-2">50+</div>
                <div className="text-gray-900 font-bold text-xl mb-2">Businesses Empowered</div>
                <p className="text-gray-500 text-sm">We've helped over 50 local entrepreneurs automate their sales and growth.</p>
                <div className="h-px bg-gray-100 my-6"></div>
                <div className="text-[48px] font-extrabold text-[#0D9488] mb-2">7 Days</div>
                <div className="text-gray-900 font-bold text-xl mb-2">Average Delivery</div>
                <p className="text-gray-500 text-sm">Our streamlined process ensures you're live and selling in just one week.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-5 md:px-10 py-16 md:py-24">
          <div className="max-w-[1000px] mx-auto text-center mb-16">
            <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight mb-4">
              Team Behind Wonders
            </h2>
            <p className="text-gray-500">The talented individuals making digital growth accessible.</p>
          </div>

          <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Ahmed Khan", role: "Co-Founder / CEO" },
              { name: "Zainab Malik", role: "Head of Design" },
              { name: "Bilal Sheikh", role: "CTO / Lead Dev" },
              { name: "Sana Ali", role: "Operations Lead" },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-4 transition-transform group-hover:-translate-y-1 duration-300 relative overflow-hidden">
                   {/* Team member photo placeholder */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                   </div>
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-[13px] text-gray-400 uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <div className="pb-16">
          <FAQAccordion />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 h-20 flex flex-col items-center justify-center">
        <p className="text-[13px] text-gray-400">© 2025 DevClyst · devclyst.com</p>
        <div className="flex gap-4 mt-2">
           <a href="/terms" className="text-[11px] text-gray-300 hover:text-gray-600">Terms</a>
           <a href="/privacy" className="text-[11px] text-gray-300 hover:text-gray-600">Privacy</a>
        </div>
      </footer>
    </>
  );
}
