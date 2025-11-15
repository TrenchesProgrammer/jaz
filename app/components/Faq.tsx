"use client";
import { useState } from "react";
import { Bellefair } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

const faqData = [
  {
    question: "What types of events can be hosted at Jaz Events Centre?",
    answer:
      "Our facility is perfect for weddings, birthdays, corporate meetings, conferences, concerts, and social gatherings. If it’s worth celebrating, Jaz Events Centre is the place to do it.",
  },
  {
    question: "What about power supply?",
    answer:
      "We have a high-capacity diesel generator that ensures uninterrupted power supply throughout your event.",
  },
  {
    question: "Is the hall fully air-conditioned?",
    answer:
      "Yes, the entire hall is fully air-conditioned, providing a cool and cozy atmosphere for all guests.",
  },
  {
    question: "How secure is the venue?",
    answer:
      "Your safety is our top priority. We provide round-the-clock security personnel and surveillance to ensure a secure environment.",
  },
  {
    question: "Can I bring my own vendors or caterers?",
    answer:
      "Yes, you’re welcome to bring your preferred vendors. However, we also have a list of trusted, experienced vendors available for your convenience.",
  },
  {
    question: "How are bookings charged — per hour or per day?",
    answer:
      "Bookings are typically charged per day, depending on the event type, duration, and requirements. Contact us for a personalized quote.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2–4 weeks ahead to secure your preferred date, especially during weekends and festive seasons.",
  },
];
interface FaqProps {
  question: string;
  answer: string;
}
const FaqItem = ({ question, answer }:FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-medium">{question}</h4>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-2 text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = ({id}:{id:string}) => {
  return (
    <section id={id} className="padding-container mt-20 gap-10 flex flex-col md:flex-row">
      <div className="text-center md:text-left md:w-[40%] mb-10">
        <p className="text-[#e0e0e0]">HAVE A QUESTION?</p>
        <h3 className={`${bellefair.className} text-left text-4xl md:text-5xl`}>
          FREQUENTLY ASKED QUESTIONS
        </h3>
      </div>
      <div className="max-w-3xl w-full md:w-[60%] mx-auto">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
