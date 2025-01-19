"use client";
import React, { useState } from "react";
import './faq.css'
const FaqItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void
}> = ({ question, answer, isOpen, onClick }) => (
    <div className="faq-item border-b  border-gray py-6">
        <div
            className="faq-question cursor-pointer flex gap-10 justify-between items-center"
            onClick={onClick}
        >
            <h4 className=" font-semibold w-[80%]">{question}</h4>
            <span className="text-[25px] flex items-center justify-center rounded-full border-2 border-dark h-[30px] w-[30px]">{isOpen ? "-" : "+"}</span>
        </div>
        <div
            className={`faq-answer transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
        >
            <p className="mt-2 body-text">{answer}</p>
        </div>
    </div>
);

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = [
        {
            question: "What services do your luxury cabs offer?",
            answer:
                "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.",
        },
        {
            question: "How do I book a ride?",
            answer:
                "You can book a cab through our website, mobile application, or by calling our customer support line.",
        },
        {
            question: "What types of vehicles are available in your fleet?",
            answer:
                "Yes, all our drivers are professionally trained and undergo rigorous background checks to ensure passenger safety and comfort.",
        },
        {
            question: "How do I book a ride?",
            answer:
                "Yes, our services are available 24/7 to meet your transportation needs at any time of the day or night.",
        },
        {
            question: "What types of vehicles are available in your fleet?",
            answer:
                "We accept multiple payment options including credit/debit cards, online wallets, and cash payments.",
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    return (
        <div className="faq  px-4 py-14 md:py-28">
            <div className="max-w-[780px] mx-auto ">
                <h2 className="mb-10 text-center">Frequently Asked Questions  </h2>
                <div className="faq-list grid ">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Faq;
