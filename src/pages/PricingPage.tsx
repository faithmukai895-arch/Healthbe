import { Check, MessageCircle, CreditCard } from 'lucide-react';

export default function PricingPage() {
  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'd like to book a consultation with HealthConnect Kenya.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Transparent, Affordable Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            No hidden fees. Pay only for what you need.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment via M-Pesa</h2>
                <p className="text-gray-700 mb-3">
                  All payments are made through M-Pesa for your convenience and security.
                </p>
                <div className="bg-white rounded-lg p-4 inline-block">
                  <div className="text-sm text-gray-600">M-Pesa Till Number</div>
                  <div className="text-3xl font-bold text-green-600">4342368</div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  After payment, send confirmation to the practitioner's WhatsApp to begin consultation
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Clinical Services - Lewis Muli Keli
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">General Consultation</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900">Ksh 399</div>
                    <div className="text-gray-600">per consultation</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">General medical advice</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Health guidance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Basic prescriptions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">WhatsApp consultation</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => openWhatsApp('254790425578', 'Lewis')}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-500">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Dermatology</h3>
                  <div className="text-sm text-blue-100">Most Popular</div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900">Ksh 499</div>
                    <div className="text-gray-600">per consultation</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Acne treatment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Skin infections</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Fungal conditions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Eczema management</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => openWhatsApp('254790425578', 'Lewis')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-green-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Reproductive Health</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900">Ksh 499</div>
                    <div className="text-gray-600">per consultation</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Sexual health</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">STI screening</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Family planning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">100% confidential</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => openWhatsApp('254790425578', 'Lewis')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nutrition & Mental Health - Faith Mukai Masila
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-orange-500">
                <div className="bg-orange-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Nutrition Consultation</h3>
                  <div className="text-sm text-orange-100">Includes Meal Plans</div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900">Ksh 699</div>
                    <div className="text-gray-600">per consultation</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Personalized meal plans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">All ages & conditions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Chronic disease support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Weight management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Follow-up support</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => openWhatsApp('25476928470', 'Faith')}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-purple-500">
                <div className="bg-purple-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Mental Health Counseling</h3>
                  <div className="text-sm text-purple-100">Professional Support</div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900">Ksh 699</div>
                    <div className="text-gray-600">per session</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Stress & anxiety support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Relationship counseling</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Depression support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Confidential sessions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Emotional wellness</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => openWhatsApp('25476928470', 'Faith')}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow md:col-span-2">
                <div className="bg-gray-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Nutrition Follow-up</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">Ksh 299</div>
                      <div className="text-gray-600 mb-4">per follow-up session</div>
                      <p className="text-gray-700">
                        Track progress, adjust meal plans, and get continued support after initial consultation
                      </p>
                    </div>
                    <button
                      onClick={() => openWhatsApp('25476928470', 'Faith')}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">How to Pay</h2>
          <div className="bg-blue-700 rounded-xl p-8 text-left">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                <div>
                  <div className="font-bold mb-1">Go to M-Pesa on your phone</div>
                  <div className="text-blue-100">Select Lipa na M-Pesa, then Buy Goods and Services</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                <div>
                  <div className="font-bold mb-1">Enter Till Number: 4342368</div>
                  <div className="text-blue-100">Enter the consultation amount</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                <div>
                  <div className="font-bold mb-1">Complete payment with your M-Pesa PIN</div>
                  <div className="text-blue-100">You will receive a confirmation SMS</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                <div>
                  <div className="font-bold mb-1">Send confirmation to practitioner on WhatsApp</div>
                  <div className="text-blue-100">Include your name and service requested</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
