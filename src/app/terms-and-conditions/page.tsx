import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="container section">
      <h1 className="text-3xl font-medium mb-6 text-blue-900">
        Terms and Conditions
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Introduction
        </h2>
        <p>
          Welcome to Actoviz, a software rental platform. These Terms and Conditions 
          govern your use of our software rental services and platform. By accessing 
          or using our services, you agree to be bound by these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Software Rental Services
        </h2>
        <p>
          Actoviz provides software rental services on a subscription basis. Our 
          services include access to Learning Management Systems and International 
          Calling Dialers for business communication and training needs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Subscription Terms
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Subscriptions are billed on a monthly or annual basis</li>
          <li>You may cancel your subscription at any time</li>
          <li>No refunds are provided for partial billing periods</li>
          <li>Subscription fees are non-negotiable and subject to change with notice</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintain the security of your account credentials</li>
          <li>Use the software in compliance with applicable laws</li>
          <li>Not attempt to reverse engineer or copy our software</li>
          <li>Report any security vulnerabilities to our team</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Data and Privacy
        </h2>
        <p>
          We are committed to protecting your data. Our data handling practices 
          are outlined in our Privacy Policy. By using our services, you consent 
          to our data collection and processing practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Service Availability
        </h2>
        <p>
          We strive to maintain 99.9% uptime for our services. However, we do not 
          guarantee uninterrupted access and may perform maintenance during off-peak hours.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Limitation of Liability
        </h2>
        <p>
          Actoviz shall not be liable for any indirect, incidental, or consequential 
          damages arising from the use of our services. Our total liability is limited 
          to the amount paid for the service in the month preceding the claim.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Termination
        </h2>
        <p>
          Either party may terminate this agreement with written notice. Upon 
          termination, your access to the software will cease, and you must 
          cease all use of our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Governing Law
        </h2>
        <p>
          These terms are governed by the laws of the State of Delaware, United States. Any disputes 
          will be resolved through binding arbitration in accordance with our 
          dispute resolution procedures.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Contact Us</h2>
        <p>
          For questions about these Terms and Conditions, please contact us at&nbsp;
          <Link href="/contact-us" className="text-blue-500">
            legal@actoviz.com
          </Link>
          . Our main office is located at 651 North Broad Street, Suite 201, Middletown, Delaware 19709, United States.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
