import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText size={32} />
            <h1 className="text-3xl lg:text-4xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-center text-gray-300">
            Please read these terms carefully before using HealthConnect Kenya services
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using HealthConnect Kenya services, you accept and agree to be bound by these
                Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <p className="text-gray-700 mb-3">HealthConnect Kenya provides:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Online medical consultations via WhatsApp</li>
                <li>• Nutrition counseling and meal planning services</li>
                <li>• Mental health counseling and support</li>
                <li>• Wellness products through our online shop</li>
              </ul>
              <p className="text-gray-700 mt-4">
                All services are provided remotely through WhatsApp communication. We do not provide in-person
                consultations, emergency services, or hospital care.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility and Registration</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Age Requirement:</span> You must be 18 years or older to use our
                  services. Services for minors must be requested by a parent or legal guardian.
                </p>
                <p>
                  <span className="font-semibold">Accurate Information:</span> You agree to provide accurate, current,
                  and complete information during consultations. Providing false information may compromise the quality
                  of care and is grounds for service termination.
                </p>
                <p>
                  <span className="font-semibold">Account Security:</span> You are responsible for maintaining the
                  security of your WhatsApp account and any communications with our practitioners.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Payment Required:</span> Payment must be made before services are
                  rendered. All payments are processed through M-Pesa to Till Number 4342368.
                </p>
                <p>
                  <span className="font-semibold">Pricing:</span> Service prices are as listed on our Pricing page
                  and may be updated periodically. Current pricing applies to all new consultations.
                </p>
                <p>
                  <span className="font-semibold">No Refunds:</span> Due to the nature of healthcare consultations,
                  payments are non-refundable once services have been provided. However, we strive for your
                  satisfaction and will address any concerns.
                </p>
                <p>
                  <span className="font-semibold">Payment Confirmation:</span> You must send payment confirmation
                  to the appropriate practitioner on WhatsApp to initiate your consultation.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Practitioner-Patient Relationship</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Using our services establishes a limited practitioner-patient relationship for the specific
                  consultation or service provided. This relationship is subject to the following:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• The relationship is limited to the scope of online consultation</li>
                  <li>• Practitioners operate within their professional scope of practice</li>
                  <li>• Practitioners may refer you for in-person care when necessary</li>
                  <li>• The relationship continues only as long as you actively use our services</li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultation Limitations</h2>
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-4">
                <p className="text-yellow-800 font-semibold mb-2">
                  Online consultations have inherent limitations compared to in-person care.
                </p>
                <p className="text-yellow-700">
                  By using our services, you acknowledge these limitations and agree to seek in-person care when
                  recommended by our practitioners.
                </p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• No physical examination is performed</li>
                <li>• Diagnostic testing cannot be conducted remotely</li>
                <li>• Some conditions require in-person evaluation</li>
                <li>• Emergency conditions cannot be treated online</li>
              </ul>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-3">As a user of HealthConnect Kenya services, you agree to:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide accurate and complete health information</li>
                <li>• Follow treatment plans and recommendations as prescribed</li>
                <li>• Inform practitioners of all medications and supplements you are taking</li>
                <li>• Seek emergency care when appropriate instead of using online consultation</li>
                <li>• Maintain confidentiality of your own health information</li>
                <li>• Use services only for legitimate healthcare purposes</li>
                <li>• Treat practitioners with respect and professionalism</li>
              </ul>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Wellness Products</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Product Information:</span> Product descriptions are provided for
                  informational purposes. We strive for accuracy but do not guarantee that descriptions are error-free.
                </p>
                <p>
                  <span className="font-semibold">No Medical Claims:</span> Products are not intended to diagnose,
                  treat, cure, or prevent any disease unless specifically stated and approved by relevant authorities.
                </p>
                <p>
                  <span className="font-semibold">Returns and Exchanges:</span> Due to the nature of wellness products,
                  returns are accepted only for unopened, unused products within a reasonable timeframe. Contact Faith
                  on WhatsApp for return inquiries.
                </p>
                <p>
                  <span className="font-semibold">Product Availability:</span> Product availability is subject to change.
                  We reserve the right to limit quantities or discontinue products.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700">
                All content on HealthConnect Kenya, including text, graphics, logos, and software, is the property
                of HealthConnect Kenya or its content suppliers and is protected by copyright and intellectual
                property laws. You may not reproduce, distribute, or create derivative works without express
                written permission.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  To the fullest extent permitted by law, HealthConnect Kenya and its practitioners shall not be
                  liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Your use or inability to use our services</li>
                  <li>• Any errors or omissions in content or services</li>
                  <li>• Any unauthorized access to your personal information</li>
                  <li>• Any interruption or cessation of services</li>
                  <li>• Any bugs, viruses, or other harmful components</li>
                </ul>
                <p className="mt-4">
                  Our total liability to you for any claims arising from the use of our services shall not exceed
                  the amount you paid for the specific service in question.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Conduct</h2>
              <p className="text-gray-700 mb-3">
                Our practitioners adhere to professional standards of conduct and ethics. However, you acknowledge that:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Medical practice involves inherent uncertainty and risk</li>
                <li>• Practitioners exercise their best professional judgment</li>
                <li>• Not all conditions can be diagnosed or treated successfully</li>
                <li>• Individual results may vary</li>
              </ul>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination of Services</h2>
              <p className="text-gray-700 mb-3">
                We reserve the right to refuse service or terminate access to any user for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Violation of these Terms and Conditions</li>
                <li>• Providing false or misleading information</li>
                <li>• Abusive or inappropriate behavior toward practitioners</li>
                <li>• Misuse of services</li>
                <li>• Non-payment of fees</li>
              </ul>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms and Conditions are governed by the laws of the Republic of Kenya. Any disputes arising
                from these terms or use of our services shall be subject to the exclusive jurisdiction of Kenyan
                courts.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms and Conditions at any time. Updated terms will be posted
                on our website with the revision date. Your continued use of services after changes constitutes
                acceptance of the modified terms.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining
                provisions shall continue in full force and effect.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms and Conditions, please contact us through our Contact page or reach
                out to our practitioners directly on WhatsApp.
              </p>
            </div>

            <div className="border-t pt-8 bg-gray-50 -mx-8 -mb-8 px-8 py-6 rounded-b-xl">
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">Last Updated:</span> December 2024
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">Effective Date:</span> December 2024
              </p>
              <p className="text-sm text-gray-700 font-semibold">
                By using HealthConnect Kenya services, you acknowledge that you have read, understood, and agree
                to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
