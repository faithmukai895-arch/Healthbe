import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle size={32} />
            <h1 className="text-3xl lg:text-4xl font-bold">Medical Disclaimer</h1>
          </div>
          <p className="text-center text-red-100">
            Important legal and medical information about HealthConnect Kenya services
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Medical Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information provided through HealthConnect Kenya is for educational and informational purposes only.
                It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Always seek the advice of your physician or other qualified health provider with any questions you may
                have regarding a medical condition. Never disregard professional medical advice or delay in seeking it
                because of something you have read on this platform.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Not for Emergencies</h2>
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                <p className="text-red-800 font-semibold mb-3">
                  HealthConnect Kenya is NOT an emergency service and should NOT be used for medical emergencies.
                </p>
                <p className="text-red-700 mb-3">
                  If you think you have a medical emergency, call 999 or go to the nearest emergency room immediately.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-semibold mb-2">Examples of medical emergencies include:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Chest pain or pressure</li>
                    <li>• Difficulty breathing or shortness of breath</li>
                    <li>• Severe bleeding that won't stop</li>
                    <li>• Loss of consciousness or fainting</li>
                    <li>• Severe allergic reactions</li>
                    <li>• Sudden severe headache or vision changes</li>
                    <li>• Signs of stroke or heart attack</li>
                    <li>• Severe injuries or trauma</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Consultation Limitations</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Physical Examination:</span> Online consultations do not include
                  physical examinations. Some conditions require in-person evaluation, laboratory tests, or imaging
                  studies for proper diagnosis and treatment.
                </p>
                <p>
                  <span className="font-semibold">Diagnostic Limitations:</span> The accuracy of online consultations
                  depends on the information you provide. Our practitioners cannot perform diagnostic tests remotely.
                </p>
                <p>
                  <span className="font-semibold">Referrals:</span> If your condition requires in-person care, advanced
                  diagnostics, or specialist evaluation, our practitioners will recommend appropriate referrals.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Disclaimers</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Supplements and Products:</span> Dietary supplements, wellness
                  products, and other items sold through HealthConnect Kenya are not intended to diagnose, treat,
                  cure, or prevent any disease.
                </p>
                <p>
                  <span className="font-semibold">Not FDA Approved:</span> Products may not be evaluated by regulatory
                  authorities. Always consult with a healthcare professional before starting any new supplement regimen.
                </p>
                <p>
                  <span className="font-semibold">Allergies and Interactions:</span> Check product ingredients carefully
                  for potential allergens. Inform your healthcare provider about all supplements and medications you are
                  taking to avoid potential interactions.
                </p>
                <p>
                  <span className="font-semibold">Individual Results:</span> Results from products may vary. Individual
                  experiences with products may differ based on various factors including health status, lifestyle, and
                  proper usage.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Practitioner-Patient Relationship</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Using HealthConnect Kenya services establishes a limited practitioner-patient relationship for the
                specific consultation or service provided. This relationship is limited to the scope of the online
                consultation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our practitioners are licensed healthcare professionals operating within their scope of practice.
                However, online consultations have inherent limitations compared to in-person care.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information, medical knowledge evolves rapidly.
                The information provided should not be considered comprehensive or definitive.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for providing accurate and complete information about your medical history,
                symptoms, and current medications. Inaccurate or incomplete information may affect the quality of
                care provided.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantee of Results</h2>
              <p className="text-gray-700 leading-relaxed">
                HealthConnect Kenya makes no guarantees regarding the outcomes of consultations or treatments.
                Individual results may vary based on numerous factors including adherence to treatment plans,
                overall health status, and individual circumstances.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links and Resources</h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform may contain links to external websites or resources. HealthConnect Kenya is not
                responsible for the content, accuracy, or practices of third-party websites. We do not endorse
                or assume responsibility for any third-party information, products, or services.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent and Acknowledgment</h2>
              <p className="text-gray-700 leading-relaxed">
                By using HealthConnect Kenya services, you acknowledge that you have read, understood, and agree
                to this medical disclaimer. You understand the limitations of online consultations and agree to
                seek appropriate in-person care when necessary.
              </p>
            </div>

            <div className="border-t pt-8 bg-blue-50 -mx-8 -mb-8 px-8 py-6 rounded-b-xl">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Last Updated:</span> December 2024
              </p>
              <p className="text-sm text-gray-600 mt-2">
                If you have questions about this disclaimer, please contact us through our Contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
