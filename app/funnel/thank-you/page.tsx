import TopBar from "@/components/funnel/TopBar";

export default async function ThankYouPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams;
  const name = typeof searchParams.name === "string" ? searchParams.name : "There";

  const whatsappMessage = `Assalam o Alaikum, I just filled the form on your website. My name is ${name}.`;
  const whatsappUrl = `https://wa.me/923704640009?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <TopBar />
      <main className="bg-white min-h-[calc(100vh-120px)] flex flex-col items-center pt-[80px] px-5">
        <div className="max-w-[560px] w-full text-center">
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-6">
            You're Confirmed, {name}! ✓
          </h1>
          
          <p className="text-[16px] text-gray-500 leading-[1.7] mb-8">
            We've received your details. Expect a WhatsApp message from us within 2 hours. Save our number: <span className="font-semibold text-gray-900">+923704640009</span>
          </p>

          <a 
            href={whatsappUrl}
            className="block w-full h-[52px] bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-[10px] text-[16px] font-semibold tracking-wide transition-all flex items-center justify-center mb-10"
          >
            Message Us on WhatsApp →
          </a>

          <div className="bg-[#F9FAFB] rounded-xl p-6 text-left border border-gray-100">
            <h3 className="text-[16px] font-semibold text-gray-900 mb-4 text-center">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#E5E7EB] text-gray-600 flex items-center justify-center text-[12px] font-bold mr-3 mt-0.5">1</div>
                <p className="text-[15px] text-gray-600">We message you on WhatsApp within 2 hours</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#E5E7EB] text-gray-600 flex items-center justify-center text-[12px] font-bold mr-3 mt-0.5">2</div>
                <p className="text-[15px] text-gray-600">Quick 15-minute call to understand your business</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#E5E7EB] text-gray-600 flex items-center justify-center text-[12px] font-bold mr-3 mt-0.5">3</div>
                <p className="text-[15px] text-gray-600">We start building — you go live in 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 h-14 flex items-center justify-center">
        <p className="text-[13px] text-gray-400">© 2025 DevClyst · devclyst.com · WhatsApp: +923704640009</p>
      </footer>
    </>
  );
}
