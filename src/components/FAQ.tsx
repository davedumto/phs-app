"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our services.",
  items = [
    {
      question: "How long does an interior design project typically take?",
      answer:
        "Project timelines vary depending on scope and complexity. A single room redesign typically takes 4-6 weeks, while full home projects can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you work with specific budgets?",
      answer:
        "Yes, we work with various budgets and can tailor our services to meet your financial requirements. We offer flexible packages and transparent pricing to ensure you get the best value for your investment.",
    },
    {
      question: "Can you work with existing furniture and decor?",
      answer:
        "Absolutely! We love incorporating existing pieces into new designs. We'll assess your current furniture and decor to create a cohesive design that works with what you already have while adding new elements as needed.",
    },
    {
      question: "What services are included in your interior design packages?",
      answer:
        "Our packages include initial consultation, space planning, color schemes, furniture selection, lighting design, and project management. We also offer additional services like 3D renderings and shopping assistance.",
    },
    {
      question: "Do you provide virtual consultations?",
      answer:
        "Yes, we offer virtual consultations for clients who prefer remote meetings or are located outside our immediate service area. We use video conferencing tools to provide the same quality service remotely.",
    },
  ],
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            {title.includes("Frequently Asked") ? (
              <>
                Frequently Asked <span className="text-teal">Questions</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon
                    size={20}
                    className="text-teal transition-colors duration-200"
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      height: { duration: 0.4, ease: "easeInOut" },
                      opacity: { duration: 0.3, delay: 0.1 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
