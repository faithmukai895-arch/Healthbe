import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield size={32} />
            <h1 className="text-3xl lg:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-center text-blue-100">
            Your privacy and confidentiality are our top priorities
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                HealthConnect Kenya is committed to protecting your privacy and maintaining the confidentiality
                of your health information. This Privacy Policy explains how we collect, use, protect, and share
                your personal and health information.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name and contact information (phone number, WhatsApp account)</li>
                    <li>• Age and gender</li>
                    <li>• Payment information (M-Pesa transaction details)</li>
                    <li>• Communication records with our practitioners</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Medical history and current health concerns</li>
                    <li>• Symptoms and health conditions</li>
                    <li>• Medications and allergies</li>
                    <li>• Treatment plans and recommendations</li>
                    <li>• Consultation records and notes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">We use your information for the following purposes:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• To provide healthcare consultations and services</li>
                <li>• To diagnose, treat, and manage your health conditions</li>
                <li>• To process payments and maintain financial records</li>
                <li>• To communicate with you about your care and appointments</li>
                <li>• To fulfill orders from our wellness shop</li>
                <li>• To improve our services and patient experience</li>
                <li>• To comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-4">
                <p className="text-green-800 font-semibold mb-2">
                  We DO NOT sell, rent, or trade your personal health information to third parties.
                </p>
                <p className="text-green-700">
                  Your health information remains confidential and is only shared as described below.
                </p>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">With Your Healthcare Team:</span> Information is shared between
                  our practitioners as necessary to provide coordinated care.
                </p>
                <p>
                  <span className="font-semibold">Legal Requirements:</span> We may disclose information when required
                  by law, such as in response to court orders or legal processes.
                </p>
                <p>
                  <span className="font-semibold">Emergency Situations:</span> In medical emergencies, we may share
                  information with emergency responders or healthcare facilities.
                </p>
                <p>
                  <span className="font-semibold">With Your Consent:</span> We will share information with others only
                  with your explicit written consent.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal and health
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Security Measures Include:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Secure communication channels (WhatsApp end-to-end encryption)</li>
                  <li>• Restricted access to health information</li>
                  <li>• Confidentiality agreements with all practitioners and staff</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Secure storage of consultation records</li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp Communications</h2>
              <p className="text-gray-700 mb-3">
                Our consultations are conducted through WhatsApp, which provides end-to-end encryption for messages.
                However, you should be aware:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Messages are stored on your device and the practitioner's device</li>
                <li>• WhatsApp's terms of service and privacy policy also apply</li>
                <li>• You are responsible for securing your own device and WhatsApp account</li>
                <li>• We recommend using device passwords and keeping your WhatsApp up to date</li>
              </ul>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-3">You have the following rights regarding your information:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <span className="font-semibold">Access:</span> Request access to your health records</li>
                <li>• <span className="font-semibold">Correction:</span> Request corrections to inaccurate information</li>
                <li>• <span className="font-semibold">Deletion:</span> Request deletion of your information (subject to legal requirements)</li>
                <li>• <span className="font-semibold">Restriction:</span> Request restrictions on how we use your information</li>
                <li>• <span className="font-semibold">Portability:</span> Request transfer of your records to another provider</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us through the Contact page with your specific request.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700">
                We retain your health information for as long as necessary to provide services and comply with
                legal requirements. Medical records are typically retained for a minimum period as required by
                Kenyan healthcare regulations.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to children under 18 years of age. Consultations for minors must
                be initiated by a parent or legal guardian who consents to the collection and use of the child's
                health information.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                requirements. The updated policy will be posted on our website with the revision date. Continued
                use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or concerns about how your information is handled,
                please contact us through our Contact page or reach out to our practitioners directly on WhatsApp.
              </p>
            </div>

            <div className="border-t pt-8 bg-blue-50 -mx-8 -mb-8 px-8 py-6 rounded-b-xl">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Last Updated:</span> December 2024
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">Effective Date:</span> December 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
