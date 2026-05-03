"use client";

import { useState } from "react";
import TopBar from "@/components/funnel/TopBar";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please WhatsApp us directly.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <TopBar />
      <main className="bg-white min-h-screen pt-[120px] md:pt-[160px]">
        {/* Hero Section */}
        <section className="px-5 md:px-10 mb-16">
          <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="text-[40px] md:text-[64px] font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-[18px] md:text-[22px] text-gray-500 max-w-[600px] mx-auto">
              Have a question or ready to start? Reach out to our team below.
            </p>
          </div>
        </section>

        {/* Contact Split Section */}
        <section className="px-5 md:px-10 pb-24">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              
              {/* Left Side: Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-[24px] font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F0FDFA] flex items-center justify-center text-[#0D9488] shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div>
                        <div className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold">Email</div>
                        <a href="mailto:hello@devclyst.com" className="text-[17px] text-gray-900 font-medium hover:text-[#0D9488] transition-colors">hello@devclyst.com</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F0FDFA] flex items-center justify-center text-[#0D9488] shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                      </div>
                      <div>
                        <div className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold">WhatsApp</div>
                        <a href="https://wa.me/923704640009" className="text-[17px] text-gray-900 font-medium hover:text-[#0D9488] transition-colors">+92 370 4640009</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F0FDFA] flex items-center justify-center text-[#0D9488] shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                      <div>
                        <div className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold">Location</div>
                        <div className="text-[17px] text-gray-900 font-medium">Lahore, Pakistan</div>
                        <div className="text-[14px] text-gray-500 mt-1">Available for worldwide remote collaboration</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-[#0D9488] text-white">
                  <h3 className="text-xl font-bold mb-3">Fast Response Guarantee</h3>
                  <p className="text-white/80 text-[15px] leading-relaxed">
                    We typically respond to all WhatsApp enquiries within 15 minutes during business hours (9 AM - 9 PM PKT).
                  </p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-[#F9FAFB] p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm min-h-[500px] flex flex-col justify-center">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#F0FDFA] text-[#0D9488] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-[24px] font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 mb-8">We've received your enquiry and sent a confirmation to your email.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[#0D9488] font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                        {error}
                      </div>
                    )}
                    <div>
                      <label className="block text-[14px] font-semibold text-gray-900 mb-2">Name</label>
                      <input type="text" name="name" required className="w-full h-[52px] bg-white border border-gray-200 rounded-xl px-4 focus:outline-none focus:border-[#0D9488] transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-gray-900 mb-2">Email</label>
                      <input type="email" name="email" required className="w-full h-[52px] bg-white border border-gray-200 rounded-xl px-4 focus:outline-none focus:border-[#0D9488] transition-colors" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-gray-900 mb-2">Subject</label>
                      <select name="subject" required className="w-full h-[52px] bg-white border border-gray-200 rounded-xl px-4 focus:outline-none focus:border-[#0D9488] transition-colors cursor-pointer">
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Project Consultation">Project Consultation</option>
                        <option value="Support Request">Support Request</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-gray-900 mb-2">Message</label>
                      <textarea name="message" required className="w-full h-[150px] bg-white border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-[#0D9488] transition-colors resize-none" placeholder="How can we help?"></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-[54px] bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl text-[16px] font-bold transition-all transform hover:-translate-y-[0.5px] shadow-lg shadow-teal-900/10 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 h-20 flex items-center justify-center">
        <p className="text-[13px] text-gray-400">© 2025 DevClyst · devclyst.com</p>
      </footer>
    </>
  );
}
