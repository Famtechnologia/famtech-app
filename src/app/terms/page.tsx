'use client';

import React from 'react';
import Navbar from '@/components/section/Navbar2';
import Footer from '@/components/section/Footer'
const TermsAndConditions: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Navbar/>
      <div className='max-w-5xl xl:mx-auto px-4 md:mx-20 lg:mx-28 mt-24  py-12 sm:py-8 mx-4'>
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left md:text-center lg:mt-28">Famtech Terms and Conditions</h1>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">1. Terms and Conditions</h2>
        <p className="text-base leading-relaxed mb-4">Welcome to Famtech ("we," "our," "us"). These Terms and Conditions ("Terms") govern your use of our website, platform, mobile applications, services, and all related content and features (collectively, the "Services"). By accessing or using any part of Famtech, you agree to be legally bound by these Terms. If you do not agree to any part of these Terms, you may not use our Services.</p>

        <h3 className="text-lg font-semibold mb-2">1.1. Eligibility</h3>
        <p className="text-base leading-relaxed mb-4">You must be at least 18 years old or the age of majority in your jurisdiction to use our Services. By using Famtech, you represent and warrant that you meet these requirements and that you have the legal capacity to enter into a binding contract.</p>

        <h3 className="text-lg font-semibold mb-2">1.2. User Account Responsibilities</h3>
        <p className="text-base leading-relaxed mb-2">To access certain features, you may need to register for an account. You agree to:</p>
        <ul className="list-disc pl-5 text-base leading-relaxed mb-4 space-y-1">
          <li>Provide accurate, current, and complete information during registration;</li>
          <li>Maintain the confidentiality of your account credentials;</li>
          <li>Accept full responsibility for all activities under your account;</li>
          <li>Notify us immediately of any unauthorized use or breach of security.</li>
        </ul>
        <p className="text-base leading-relaxed mb-4">We reserve the right to suspend or terminate your account if we suspect any fraudulent activity, violation of these Terms, or misuse of the platform. You are responsible for any damage or loss caused by unauthorized access resulting from your failure to safeguard your credentials.</p>

        <h3 className="text-lg font-semibold mb-2">1.3. Intellectual Property</h3>
        <p className="text-base leading-relaxed mb-4">All content and materials on Famtech, including but not limited to text, graphics, logos, software, videos, tutorials, documentation, and designs, are the intellectual property of Famtech or our licensors. You may not copy, reproduce, distribute, or use any content without our prior written consent. Any unauthorized use of our content may result in legal action.</p>

        <h3 className="text-lg font-semibold mb-2">1.4. Use of Services</h3>
        <p className="text-base leading-relaxed mb-2">You agree to use the Services only for lawful purposes and in a manner that does not:</p>
        <ul className="list-disc pl-5 text-base leading-relaxed mb-4 space-y-1">
          <li>Violate any applicable laws or regulations;</li>
          <li>Infringe on the rights of others;</li>
          <li>Harm the operation of the platform or interfere with others' use;</li>
          <li>Involve any form of unauthorized data scraping, mining, or extraction;</li>
          <li>Include any form of harassment, abuse, or misleading information.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">1.5. Third-Party Services and Links</h3>
        <p className="text-base leading-relaxed mb-4">Famtech may contain links to third-party websites or services for additional resources, tools, or informational purposes. These third-party services are not under our control and we are not responsible for their content, privacy policies, or business practices. Accessing third-party links is at your own risk.</p>

        <h3 className="text-lg font-semibold mb-2">1.6. Service Availability and Modifications</h3>
        <p className="text-base leading-relaxed mb-4">We strive to provide a seamless experience but cannot guarantee uninterrupted access to our Services. Famtech reserves the right to modify, suspend, or discontinue any aspect of the Services at any time without prior notice.</p>

        <h3 className="text-lg font-semibold mb-2">1.7. Limitation of Liability</h3>
        <p className="text-base leading-relaxed mb-4">Famtech shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of the Services. This includes but is not limited to loss of data, revenue, profits, or goodwill. Your sole and exclusive remedy for dissatisfaction with the Services is to stop using the platform.</p>

        <h3 className="text-lg font-semibold mb-2">1.8. Indenification</h3>
        <p className="text-base leading-relaxed mb-4">You agree to indemnify, defend, and hold harmless Famtech, its affiliates, directors, officers, employees, and agents from any claims, losses, damages, liabilities, including legal fees, arising out of your use or misuse of the Services, violation of these Terms, or infringement of any intellectual property or other rights.</p>

        <h3 className="text-lg font-semibold mb-2">1.9. Modifications to Terms</h3>
        <p className="text-base leading-relaxed mb-4">We reserve the right to revise these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the Services constitutes acceptance of the updated Terms.</p>

        <h3 className="text-lg font-semibold mb-2">1.10. Governing Law and Dispute Resolution</h3>
        <p className="text-base leading-relaxed mb-4">These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising under these Terms shall be resolved in the courts of competent jurisdiction within Nigeria.</p>
      </section>
      </div>

<Footer/>
      
    </div>
  );
};

export default TermsAndConditions;