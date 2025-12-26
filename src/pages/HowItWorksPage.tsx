import { MessageCircle, CreditCard, CheckCircle, Clock, Shield } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">How HealthConnect Kenya Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get professional healthcare and wellness products in simple steps
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Getting Started is Easy
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose Your Service or Product</h3>
                <p className="text-gray-600 mb-4">
                  Browse our services page to select a consultation type, or visit our shop to choose wellness products.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Options:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Clinical consultations with Lewis (Dermatology, Reproductive Health, General)</li>
                    <li>• Nutrition & Mental Health consultations with Faith</li>
                    <li>• Wellness products from our online shop</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-6">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Make Payment via M-Pesa</h3>
                <p className="text-gray-600 mb-4">
                  All payments are processed through M-Pesa for your convenience and security.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Payment Steps:</h4>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">a.</span>
                      <span>Go to M-Pesa on your phone</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">b.</span>
                      <span>Select "Lipa na M-Pesa" → "Buy Goods and Services"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">c.</span>
                      <span>Enter Till Number: <span className="font-bold text-green-600">4342368</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">d.</span>
                      <span>Enter the amount for your chosen service or product</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">e.</span>
                      <span>Enter your M-Pesa PIN to complete payment</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-6">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Send Confirmation on WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Contact the appropriate practitioner on WhatsApp with your payment confirmation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Lewis Muli Keli</h4>
                    <p className="text-sm text-gray-600 mb-2">Clinical Officer</p>
                    <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                      <MessageCircle size={18} />
                      <span>+254790425578</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      For: Dermatology, Reproductive Health, General Consultations
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Faith Mukai Masila</h4>
                    <p className="text-sm text-gray-600 mb-2">Nutritionist & Counselor</p>
                    <div className="flex items-center space-x-2 text-green-600 font-semibold">
                      <MessageCircle size={18} />
                      <span>+25476928470</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      For: Nutrition, Mental Health, Shop Orders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-6">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Receive Your Service</h3>
                <p className="text-gray-600 mb-4">
                  Once your payment is confirmed, you'll receive your consultation or order details.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">For Consultations:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Chat directly with your practitioner</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Receive professional assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Get treatment or nutrition plans</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Access follow-up support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-2 border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">For Shop Orders:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Receive receipt from Faith</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Arrange delivery or pickup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Get product usage guidance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Access ongoing support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose HealthConnect Kenya?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Confidential</h3>
              <p className="text-gray-600">
                All consultations are private and secure. Your health information is never shared.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing starting from Ksh 399. No hidden fees or surprise charges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Get same-day consultations and quick responses from licensed practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-50 border-y-2 border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4 text-center">Important Notice</h2>
          <div className="bg-white rounded-xl p-6 border-2 border-red-300">
            <h3 className="font-bold text-gray-900 mb-3">This Service is NOT for Emergencies</h3>
            <p className="text-gray-700 mb-4">
              HealthConnect Kenya provides online consultations for non-emergency health concerns.
            </p>
            <div className="bg-red-100 rounded-lg p-4">
              <p className="text-red-800 font-semibold mb-2">In case of emergency:</p>
              <ul className="space-y-1 text-red-700 text-sm">
                <li>• Call 999 or your local emergency number</li>
                <li>• Visit the nearest hospital or emergency room</li>
                <li>• Do NOT rely on online consultation for life-threatening conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
