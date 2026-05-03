"use client";

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#16A34A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

interface PackageCardsProps {
  onSelectPlan?: (plan: string) => void;
}

export default function PackageCards({ onSelectPlan }: PackageCardsProps) {
  const handleSelect = (plan: string) => {
    onSelectPlan?.(plan);
    document.getElementById('book-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="bg-[#F9FAFB] py-[56px] md:py-[80px] px-5 md:px-10">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#F0FDFA] text-[#134E4A] border border-[#99F6E4] px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight mb-3">
            Choose Your Package
          </h2>
          <p className="text-[18px] text-gray-500">
            Both include everything to get you online. One goes further.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Starter Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col pt-12 md:pt-[52px] shadow-sm">
            <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900">Starter</h3>
            <p className="text-[14px] text-gray-500 mt-1">Get online. Start getting found.</p>
            <div className="mt-4">
              <span className="text-[36px] font-extrabold text-gray-900">Rs. 14,999</span>
            </div>
            <p className="text-[13px] text-gray-400 mt-1">One-time payment</p>
            
            <div className="h-px bg-gray-200 my-5"></div>

            <ul className="space-y-3 flex-grow">
              {[
                { text: "Free domain ", check: true },
                { text: "1-page professional website", check: true },
                { text: "WhatsApp Business setup", check: true },
                { text: "Basic chatbot (limited messages/month)", check: true },
                { text: "Facebook Business Page setup", check: true },
                { text: "Instagram Business Page setup", check: true },
                { text: "Paid domain (not included)", check: false },
                { text: "Multi-page website", check: false },
                { text: "Google Business Profile", check: false },
                { text: "Priority support", check: false },
                { text: "3 months free support", check: false },
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  {feature.check ? <CheckIcon /> : <CrossIcon />}
                  <span className={`ml-3 text-[15px] ${feature.check ? 'text-gray-600' : 'text-gray-400'}`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleSelect('starter')}
              className="mt-8 w-full h-[48px] bg-white border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#F0FDFA] rounded-[10px] text-[16px] font-semibold transition-colors"
            >
              Get Started →
            </button>
          </div>

          {/* Premium Card */}
          <div className="bg-[#F0FDFA] rounded-2xl border-2 border-[#0D9488] p-6 md:p-9 flex flex-col relative shadow-[0_20px_50px_-12px_rgba(13,148,136,0.25)] md:scale-[1.03] transition-transform hover:scale-[1.04] z-10">
            <div className="absolute top-0 left-0 right-0 flex justify-center -mt-[14px]">
              <span className="bg-[#0D9488] text-white text-[12px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-lg shadow-md ring-2 ring-[#F0FDFA]">
                ⭐ Most Popular & Best Value
              </span>
            </div>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 mt-2">Complete</h3>
            <p className="text-[14px] text-gray-500 mt-1">More reach. More automation. More growth.</p>
            <div className="mt-4">
              <span className="text-[36px] font-extrabold text-gray-900">Rs. 19,999</span>
            </div>
            <p className="text-[13px] text-gray-400 mt-1">One-time payment</p>
            
            <div className="mt-4 bg-[#CCFBF1] rounded-lg p-3 border border-[#99F6E4]">
              <p className="text-[13px] text-[#134E4A] font-bold text-center">
                Includes 3 months free support — worth Rs. 9,000
              </p>
            </div>

            <div className="h-px bg-[#99F6E4] my-5"></div>

            <ul className="space-y-3 flex-grow">
              {[
                "Paid domain (.com) — yours to keep",
                "Multi-page website (Home, About, Services, Contact)",
                "WhatsApp Business setup",
                "Advanced chatbot (order booking + auto-replies and confirmation)",
                "Facebook Business Page setup",
                "Instagram Business Page setup",
                "Google Business Profile setup",
                "3 months free support (calls + fixes)",
                "Priority delivery (5 days, not 7)",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-[15px] text-gray-600 font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleSelect('complete')}
              className="mt-8 w-full h-[52px] bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-[10px] text-[16px] font-bold transition-all transform hover:-translate-y-[1px] shadow-lg shadow-teal-900/20"
            >
              Get Started →
            </button>
          </div>
        </div>

        <p className="text-center text-[14px] text-gray-400 mt-8">
          Both plans — no monthly fees. You pay once. It's yours.
        </p>
      </div>
    </section>
  );
}
