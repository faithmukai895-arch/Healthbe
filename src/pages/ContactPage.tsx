import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'd like to get in touch regarding HealthConnect Kenya services.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help. Reach out to our practitioners directly on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">L</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Lewis Muli Keli</h2>
                  <p className="text-blue-100">Clinical Officer</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Services:</h3>
                  <ul className="space-y-1 text-sm text-blue-100">
                    <li>• Dermatology Consultations</li>
                    <li>• Reproductive Health</li>
                    <li>• General Clinical Care</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="flex-shrink-0" size={20} />
                  <div>
                    <div className="text-sm text-blue-100">WhatsApp</div>
                    <div className="font-bold text-lg">+254790425578</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openWhatsApp('254790425578', 'Lewis')}
                className="w-full bg-white text-blue-600 hover:bg-gray-100 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={24} />
                <span>Chat with Lewis on WhatsApp</span>
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-green-600">F</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Faith Mukai Masila</h2>
                  <p className="text-green-100">Nutritionist & Counselor</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-green-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Services:</h3>
                  <ul className="space-y-1 text-sm text-green-100">
                    <li>• Nutrition Consultations</li>
                    <li>• Mental Health Counseling</li>
                    <li>• Wellness Shop Management</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="flex-shrink-0" size={20} />
                  <div>
                    <div className="text-sm text-green-100">WhatsApp</div>
                    <div className="font-bold text-lg">+25476928470</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openWhatsApp('25476928470', 'Faith')}
                className="w-full bg-white text-green-600 hover:bg-gray-100 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={24} />
                <span>Chat with Faith on WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                Nairobi, Kenya
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Online consultations available nationwide
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 8 AM - 8 PM</p>
                <p>Saturday: 9 AM - 6 PM</p>
                <p>Sunday: 10 AM - 4 PM</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-orange-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                info@healthconnectkenya.com
              </p>
              <p className="text-sm text-gray-500 mt-2">
                For general inquiries
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">!</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Response Time</h3>
                <p className="text-gray-700 mb-4">
                  Our practitioners typically respond within a few hours during business hours. For urgent
                  matters, please contact the appropriate practitioner directly on WhatsApp.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Please Note:</span> Response times may vary
                    depending on consultation volume. We appreciate your patience and will get back to you as
                    soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Emergency Notice</h2>
            <p className="text-red-100 mb-4">
              HealthConnect Kenya provides online consultations for non-emergency health concerns only.
            </p>
            <div className="bg-red-800 rounded-lg p-6">
              <p className="font-bold mb-3">If you are experiencing a medical emergency:</p>
              <ul className="space-y-2 text-left text-red-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Call 999 immediately or your local emergency number</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Visit the nearest hospital emergency room</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Do NOT wait for an online consultation</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-red-200 mt-4">
              Examples of emergencies: Severe chest pain, difficulty breathing, severe bleeding, loss of
              consciousness, severe allergic reactions, or any life-threatening condition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">How do I book a consultation?</h3>
              <p className="text-gray-600">
                Simply click the WhatsApp button for your preferred practitioner, make payment via M-Pesa
                to Till Number 4342368, and send confirmation on WhatsApp.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">How long does a consultation take?</h3>
              <p className="text-gray-600">
                Consultations are conducted via WhatsApp chat and typically last 20-30 minutes, depending
                on the complexity of your concern.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Are my consultations confidential?</h3>
              <p className="text-gray-600">
                Yes, absolutely. All consultations are completely confidential and protected under
                healthcare privacy standards.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Can I get a prescription?</h3>
              <p className="text-gray-600">
                Yes, our clinical officer can provide appropriate prescriptions and treatment plans based
                on your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
