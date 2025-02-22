"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What is BLOCKAI?",
    a: "BLOCKAI is a decentralized platform that connects AI developers, miners, validators, and users to share, access, and monetize AI models. It uses blockchain technology and the native $SOA token to facilitate secure, transparent, and efficient interactions within the ecosystem.",
  },
  // ... (rest of the FAQs)
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none" onClick={() => toggleFaq(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{faq.q}</h3>
                  <ChevronDown
                    className={`transform transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

