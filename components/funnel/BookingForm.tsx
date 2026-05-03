"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface BookingFormProps {
  defaultPlan?: string | null;
}

export default function BookingForm({ defaultPlan }: BookingFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>("not_sure");

  // Synchronize internal state with prop if it changes
  useEffect(() => {
    if (defaultPlan) {
      setSelectedPlan(defaultPlan);
    }
  }, [defaultPlan]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      whatsapp: formData.get("whatsapp"),
      city: formData.get("city"),
      business_type: formData.get("business_type"),
      has_website: formData.get("has_website"),
      plan_interest: formData.get("plan_interest"),
      timeline: formData.get("timeline"),
    };

    try {
      const res = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.success) {
        router.push(`/funnel/thank-you?name=${encodeURIComponent(json.name)}`);
      } else {
        setError("Something went wrong. WhatsApp us directly: +923704640009");
      }
    } catch (err) {
      setError("Something went wrong. WhatsApp us directly: +923704640009");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-[600px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight mb-3">
          Book Your Free Consultation
        </h2>
        <p className="text-[16px] text-gray-500">
          15-minute WhatsApp call. No payment now. No commitment.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-[16px] p-6 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-[14px] font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Ahmed Khan"
              required
              className="w-full h-[52px] border border-gray-200 rounded-[10px] px-4 text-[15px] text-gray-900 focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-colors" 
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-[14px] font-medium text-gray-700 mb-2">WhatsApp Number</label>
            <input 
              type="tel" 
              id="whatsapp" 
              name="whatsapp" 
              placeholder="+923704640009"
              required
              className="w-full h-[52px] border border-gray-200 rounded-[10px] px-4 text-[15px] text-gray-900 focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-colors" 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[14px] font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="you@example.com"
              required
              className="w-full h-[52px] border border-gray-200 rounded-[10px] px-4 text-[15px] text-gray-900 focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-colors" 
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-[14px] font-medium text-gray-700 mb-2">Your City</label>
            <select 
              id="city" 
              name="city" 
              required
              className="w-full h-[52px] border border-gray-200 rounded-[10px] px-4 text-[15px] text-gray-900 focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] bg-white transition-colors cursor-pointer"
            >
              <option value="">Select city</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-gray-700 mb-3">Type of Business</label>
            <div className="flex flex-wrap gap-3">
              {['Salon / Parlour', 'Restaurant / Cafe', 'Clinic / Medical', 'Shop / Retail', 'Other'].map(type => (
                <label key={type} className="cursor-pointer">
                  <input type="radio" name="business_type" value={type.toLowerCase().replace(/ \/ /g, '_').replace(/ /g, '_')} required className="peer sr-only" />
                  <span className="inline-block px-4 py-2 text-[14px] border border-gray-200 rounded-full text-gray-500 peer-checked:bg-[#0D9488] peer-checked:text-white peer-checked:border-[#0D9488] transition-colors">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-gray-700 mb-3">Do you currently have a website?</label>
            <div className="flex flex-col gap-3">
              {['No, I have nothing', 'I have social pages only', 'Yes, I have a website'].map(status => (
                <label key={status} className="cursor-pointer">
                  <input type="radio" name="has_website" value={status.includes('No') ? 'none' : status.includes('social') ? 'social_only' : 'yes'} required className="peer sr-only" />
                  <span className="block px-4 py-3 text-[14px] border border-gray-200 rounded-[10px] text-gray-500 peer-checked:bg-[#0D9488] peer-checked:text-white peer-checked:border-[#0D9488] transition-colors">
                    {status}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-gray-700 mb-3">Which package interests you?</label>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Starter — Rs. 14,999', value: 'starter' },
                { label: 'Complete — Rs. 19,999', value: 'complete' },
                { label: 'Not sure yet', value: 'not_sure' }
              ].map(plan => (
                <label key={plan.value} className="cursor-pointer">
                  <input 
                    type="radio" 
                    name="plan_interest" 
                    value={plan.value} 
                    required 
                    className="peer sr-only" 
                    checked={selectedPlan === plan.value}
                    onChange={() => setSelectedPlan(plan.value)}
                  />
                  <span className="block px-4 py-3 text-[14px] border border-gray-200 rounded-[10px] text-gray-500 peer-checked:bg-[#0D9488] peer-checked:text-white peer-checked:border-[#0D9488] transition-colors">
                    {plan.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-gray-700 mb-3">How soon do you want to start?</label>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'This week', value: 'this_week' },
                { label: 'This month', value: 'this_month' },
                { label: 'Just exploring', value: 'exploring' }
              ].map(timeline => (
                <label key={timeline.value} className="cursor-pointer">
                  <input type="radio" name="timeline" value={timeline.value} required className="peer sr-only" />
                  <span className="inline-block px-4 py-2 text-[14px] border border-gray-200 rounded-full text-gray-500 peer-checked:bg-[#0D9488] peer-checked:text-white peer-checked:border-[#0D9488] transition-colors">
                    {timeline.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-[54px] bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-[10px] text-[16px] font-semibold tracking-wide transition-all transform hover:-translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? "Submitting..." : "Book My Free Consultation →"}
            </button>
            <p className="text-[13px] text-gray-400 mt-4 text-center">
              🔒 No spam. We only contact you on WhatsApp.
            </p>
          </div>
        </form>
      </div>

      <div className="mt-6 text-center">
        <a 
          href="https://wa.me/923704640009?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20know%20about%20your%20online%20presence%20packages"
          className="text-[14px] text-[#0D9488] hover:underline cursor-pointer"
        >
          Prefer to message directly? WhatsApp us now →
        </a>
      </div>
    </div>
  );
}
