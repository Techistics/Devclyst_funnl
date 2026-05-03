export default function MarqueeTicker() {
  const items = [
    "WhatsApp Chatbot",
    "Professional Website",
    "Facebook Page",
    "Instagram Business",
    "7-Day Delivery",
    "Free Domain",
    "Order Tracking Bot",
    "Booking Automation",
  ];

  return (
    <div className="w-full bg-[#F3F4F6] h-12 overflow-hidden flex items-center group relative border-y border-transparent">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* We render two identical blocks. The animation moves the container by -50%, perfectly matching one block's width. */}
        {[...Array(2)].map((_, blockIdx) => (
          <div key={blockIdx} className="flex shrink-0">
            {/* Repeat the items a few times inside the block so it's wide enough for large screens */}
            {[...Array(3)].map((_, i) => (
              <span key={i} className="flex items-center">
                {items.map((item, j) => (
                  <span key={j} className="flex items-center text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                    <span className="mx-4">{item}</span>
                    <span className="text-[#0D9488] font-bold">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
