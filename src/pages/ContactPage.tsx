import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactInfoSection from '../components/sections/ContactPage/ContactInfoSection';
import ContactFormSection from '../components/sections/ContactPage/ContactFormSection';
import FAQSection from '../components/sections/ContactPage/FAQSection';

const ContactPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <PageHeader 
          tagline="Get in Touch"
          title="Contact Me"
          description="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <ContactInfoSection />
          </div>
          
          {/* Contact Form */}
          <div>
            <ContactFormSection />
          </div>
        </div>
        
        {/* FAQ Section */}
        <FAQSection />
      </div>
    </section>
  );
};

export default ContactPage;