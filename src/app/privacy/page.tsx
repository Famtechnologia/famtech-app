'use client';

import React from 'react';
import Navbar from '@/components/section/Navbar2';
import Footer from '@/components/section/Footer'

const PrivacyAndCookies: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-5xl xl:mx-auto mx-4 px-4 md:px-20 lg:mx-28 py-12 sm:py-8">
      
      <h1 className="md:text-3xl text-2xl font-bold mb-8 md:text-center text-left  mt-12 lg:mt-35">Famtech Privacy and Cookie Policy</h1>

      <section className="mb-12">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">1. Privacy Policy</h2>
        <p className="text-base leading-relaxed mb-4">At Famtech, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you interact with our Services.</p>

        <h3 className="text-lg font-semibold mb-2">1.1. Information We Collect</h3>
        <p className="text-base leading-relaxed mb-2">We may collect the following types of information:</p>
        <ul className="list-disc pl-5 text-base leading-relaxed mb-4 space-y-1">
          <li><strong>Personal Information:</strong> Full name, email address, phone number, residential or farm location, farm details, and other identifiers;</li>
          <li><strong>Technical Information:</strong> IP address, device type, browser type, pages visited, session duration, and referral links;</li>
          <li><strong>Transactional Information:</strong> Records of services used, payment history, subscription status, and customer service interactions;</li>
          <li><strong>Voluntary Submissions:</strong> Survey responses, feedback, or any content you submit via forms.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">1.2. How We Use Your Information</h3>
        <p className="text-base leading-relaxed mb-2">Your information may be used to:</p>
        <ul className="list-disc pl-5 text-base leading-relaxed mb-4 space-y-1">
          <li>Provide and maintain our Services;</li>
          <li>Create and manage user accounts;</li>
          <li>Analyze usage patterns and improve performance;</li>
          <li>Send updates, newsletters, alerts, and promotions;</li>
          <li>Enforce our terms, detect and prevent fraud;</li>
          <li>Respond to user inquiries and provide customer support;</li>
          <li>Comply with applicable laws and regulations.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">1.3. Legal Basis for Processing (If Applicable)</h3>
        <p className="text-base leading-relaxed mb-2">Where applicable, we rely on one or more of the following legal bases for processing your data:</p>
        <ul className="list-disc pl-5 text-base leading-relaxed mb-4 space-y-1">
          <li>Your consent;</li>
          <li>The necessity of processing for the performance of a contract;</li>
          <li>Compliance with a legal obligation;</li>
          <li>Our legitimate interests in operating and improving our Services.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">1.4. Sharing and Disclosure of Data</h3>
        <p className="text-base leading-relaxed mb-2">We do not sell, rent, or trade your personal information. However, we may share data:</p>
        <ul className="list-disc pl-5 text-base leading-relaxed mb-4 space-y-1">
          <li>With trusted service providers who perform services on our behalf;</li>
          <li>In response to legal requests, court orders, or regulatory obligations;</li>
          <li>In connection with a business transaction, such as a merger or acquisition;</li>
          <li>With your explicit consent.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">1.5. Data Security</h3>
        <p className="text-base leading-relaxed mb-4">We adopt physical, technical, and administrative measures to protect your data against unauthorized access, disclosure, alteration, or destruction. However, we cannot guarantee absolute security.</p>

        <h3 className="text-lg font-semibold mb-2">1.6. Your Rights and Choices</h3>
        <p className="text-base leading-relaxed mb-2">Depending on your jurisdiction, you may have rights to:</p>
        <ul className="list-disc pl-5 text-base leading-relaxed mb-4 space-y-1">
          <li>Request access to or a copy of your personal data;</li>
          <li>Request correction or deletion of your data;</li>
          <li>Object to or restrict certain types of processing;</li>
          <li>Withdraw previously given consent.</li>
        </ul>
        <p className="text-base leading-relaxed mb-4">To exercise these rights, please contact us at <strong>info@famtechnologia.com</strong>.</p>

        <h3 className="text-lg font-semibold mb-2">1.7. Data Retention</h3>
        <p className="text-base leading-relaxed mb-4">We retain your data only as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

        <h3 className="text-lg font-semibold mb-2">1.8. Children’s Privacy</h3>
        <p className="text-base leading-relaxed mb-4">Famtech is not directed at children under the age of 13. We do not knowingly collect or process personal data from anyone under 13 years of age.</p>
      </section>

      <hr className="my-12 border-t border-gray-200" />

        <section className="mb-12">
        <h2 className="text-xl md:text-3xl font-semibold mb-4">2. Disclaimer</h2>
        <p className="text-base leading-relaxed mb-4">The content provided on the Famtech platform is for general informational purposes only. While we make every effort to ensure the accuracy and reliability of the information presented, we do not guarantee its completeness or applicability to your specific situation.</p>
        <p className="text-base leading-relaxed mb-4">Nothing on this platform constitutes professional advice — including but not limited to agricultural, financial, legal, or technical advice — and should not be relied upon as such. You should always consult a qualified professional for advice tailored to your circumstances.</p>
        <p className="text-base leading-relaxed mb-4">Famtech shall not be liable for any loss or damage arising from the use or reliance on the information available through our Services.</p>
      </section>
      <hr className="my-12 border-t border-gray-200" />

      <section className="mb-12">
        <h2 className="text-xl md:text-3xl font-semibold mb-4">3. Cookie Policy</h2>
        <p className="text-base leading-relaxed mb-4">Famtech uses cookies and similar technologies to enhance your Browse experience and deliver personalized services.</p>

        <h3 className="text-lg font-semibold mb-2">3.1. What Are Cookies?</h3>
        <p className="text-base leading-relaxed mb-4">Cookies are small text files placed on your device when you visit our website. They help us recognize your device, remember your preferences, and analyze website performance.</p>

        <h3 className="text-lg font-semibold mb-2">3.2. Types of Cookies We Use</h3>
        <ul className="list-disc pl-5 text-base leading-relaxed mb-4 space-y-1">
          <li><strong>Strictly Necessary Cookies:</strong> Required for basic site functionality;</li>
          <li><strong>Analytical/Performance Cookies:</strong> Help us understand user behavior and improve site performance;</li>
          <li><strong>Functionality Cookies:</strong> Store preferences like language and region;</li>
          <li><strong>Targeting/Advertising Cookies:</strong> Deliver relevant ads and content based on user interests.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">3.3. Managing Your Cookie Preferences</h3>
        <p className="text-base leading-relaxed mb-4">Most web browsers allow you to control cookie settings. You can accept or reject cookies, delete existing ones, or set preferences to be notified before a cookie is placed. Please note that disabling certain cookies may affect site functionality.</p>

        <h3 className="text-lg font-semibold mb-2">3.4. Third-Party Cookies</h3>
        <p className="text-base leading-relaxed mb-4">Some cookies may be placed by third-party services integrated into our platform, such as analytics or payment processors. These are governed by the privacy policies of those providers.</p>

        <p className="text-base leading-relaxed mt-8">If you have any questions or concerns regarding these policies, please contact us at:</p>
        <ul className="list-disc pl-5 text-base leading-relaxed space-y-1 mt-2">
          <li><strong>Email:</strong> <a href="mailto:info@famtechnologia.com" className="text-blue-600 hover:underline">info@famtechnologia.com</a></li>
          <li><strong>Phone:+2349127483717</strong></li>
          <li><strong>Address:16, Wisdom Estate, Akobo, Ibadan, Oyo State, Nigeria</strong></li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyAndCookies;