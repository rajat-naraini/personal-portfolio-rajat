import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What type of projects do you work on?",
      answer: "I specialize in full-stack web applications using modern technologies like React, Angular, Node.js, and Spring Boot. I've worked on enterprise systems, data management tools, and various web applications across different domains."
    },
    {
      question: "What is your availability for new projects?",
      answer: "I'm currently available for full-time opportunities, contract work, and select freelance projects. My availability may change, so please reach out to discuss your specific timeline."
    },
    {
      question: "Do you work remotely?",
      answer: "Yes, I'm comfortable working remotely and have experience collaborating with distributed teams across different time zones. I'm also open to on-site opportunities in the Nashville area."
    },
    {
      question: "What is your development process like?",
      answer: "I follow an agile-inspired approach with regular communication and iterative development. I start with understanding requirements thoroughly, create a plan, develop with regular check-ins, and provide thorough testing and documentation."
    },
    {
      question: "Can you work with existing codebases?",
      answer: "Absolutely. I have extensive experience maintaining and extending existing applications. I'm skilled at understanding legacy code, implementing best practices, and making improvements while respecting the existing architecture."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        {faqItems.map((faq, index) => (
          <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-emerald-500/30 transition-colors">
            <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
            <p className="text-gray-400">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;