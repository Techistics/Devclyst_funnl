"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need any technical knowledge?",
    answer: "None at all. You tell us your business name, what you sell, and your phone number. We handle everything from there — domain, website, chatbot setup, and social pages."
  },
  {
    question: "Will the chatbot work on my existing WhatsApp number?",
    answer: "Yes, if your number is on WhatsApp Business. If it is not, we help you set that up as part of the service — no extra charge. The bot handles order enquiries, bookings, and common questions automatically, so you never miss a customer."
  },
  {
    question: "Is the domain really free in the Starter plan?",
    answer: "Yes. We register a .com or .pk domain for you, included in the price. After 1 year, domain renewal is around Rs. 3,000 — you handle that directly. No recurring fees from us."
  },
  {
    question: "What if I want changes after delivery?",
    answer: "Free revisions for 3 days after delivery on both plans. Complete plan clients also get 3 months of priority support for any fixes or updates after that."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[56px] md:py-[80px] px-5 md:px-10">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-[#F0FDFA] text-[#134E4A] border border-[#99F6E4] px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight">
            Questions We Get Every Day
          </h2>
        </div>

        <div className="space-y-0 border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
                >
                  <span className="text-[17px] font-medium text-gray-900 pr-8">{faq.question}</span>
                  <span className="text-[#0D9488] text-xl font-medium flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <p className="text-[15px] text-gray-500 leading-[1.7] pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
