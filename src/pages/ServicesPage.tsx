import { MessageCircle, Activity, Heart, Users, Apple, Brain, Baby, Salad } from 'lucide-react';

export default function ServicesPage() {
  const openWhatsApp = (phone: string, name: string, service: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'd like to inquire about ${service} at HealthConnect Kenya.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Professional Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Confidential healthcare consultations with licensed practitioners delivered through WhatsApp
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">L</span>
                </div>
                <div className="text-white">
                  <h2 className="text-3xl font-bold">Lewis Muli Keli</h2>
                  <p className="text-blue-100 text-lg">Clinical Officer</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <MessageCircle size={18} />
                    <span className="font-semibold">+254790425578</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-600 text-lg mb-8">
                Experienced clinical officer specializing in dermatology and reproductive health.
                Providing confidential, professional medical consultations.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Activity className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Dermatology Consultations</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Acne treatment and management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Skin infections and conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Fungal infection treatment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Eczema and psoriasis management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Skin care recommendations</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">Ksh 499</span>
                    <button
                      onClick={() => openWhatsApp('254790425578', 'Lewis', 'dermatology consultation')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Consult Lewis</span>
                    </button>
                  </div>
                </div>

                <div className="border-2 border-green-100 rounded-xl p-6 hover:border-green-300 transition-colors">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Heart className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Reproductive Health</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Sexual health consultations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>STI screening and treatment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Family planning guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Contraception advice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Confidential reproductive care</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">Ksh 499</span>
                    <button
                      onClick={() => openWhatsApp('254790425578', 'Lewis', 'reproductive health consultation')}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Consult Lewis</span>
                    </button>
                  </div>
                </div>

                <div className="border-2 border-gray-100 rounded-xl p-6 hover:border-gray-300 transition-colors md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Users className="text-gray-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">General Clinical Consultation</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    General medical advice, health concerns, and wellness guidance for various conditions
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-600">Ksh 399</span>
                    <button
                      onClick={() => openWhatsApp('254790425578', 'Lewis', 'general consultation')}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Consult Lewis</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-green-600">F</span>
                </div>
                <div className="text-white">
                  <h2 className="text-3xl font-bold">Faith Mukai Masila</h2>
                  <p className="text-green-100 text-lg">Nutritionist & Mental Health Counselor</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <MessageCircle size={18} />
                    <span className="font-semibold">+25476928470</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-600 text-lg mb-8">
                Certified nutritionist and mental health counselor dedicated to holistic wellness.
                Also manages the HealthConnect Kenya wellness shop.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Apple className="mr-3 text-orange-600" size={28} />
                  Nutrition Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Baby className="text-orange-600" size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Babies & Children Nutrition</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Specialized nutrition plans for infants, toddlers, and growing children
                    </p>
                  </div>

                  <div className="border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Heart className="text-orange-600" size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Maternal Nutrition</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Nutrition support for pregnant and breastfeeding mothers
                    </p>
                  </div>

                  <div className="border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Users className="text-orange-600" size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Elderly Nutrition</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Tailored nutrition plans for seniors and aging gracefully
                    </p>
                  </div>

                  <div className="border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Salad className="text-orange-600" size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Chronic Disease Management</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Nutrition for diabetes, hypertension, and weight management
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-orange-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Nutrition Consultation</h4>
                      <p className="text-gray-600">Personalized meal plans and ongoing nutrition support</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600 mb-2">Ksh 699</div>
                      <button
                        onClick={() => openWhatsApp('25476928470', 'Faith', 'nutrition consultation')}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                      >
                        <MessageCircle size={20} />
                        <span>Consult Faith</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Brain className="mr-3 text-purple-600" size={28} />
                  Mental Health Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-300 transition-colors">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Stress & Anxiety Support</h4>
                    <p className="text-gray-600">
                      Professional counseling for managing stress and anxiety
                    </p>
                  </div>

                  <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-300 transition-colors">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Relationship Counseling</h4>
                    <p className="text-gray-600">
                      Support for personal and relationship challenges
                    </p>
                  </div>

                  <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-300 transition-colors">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Depression Support</h4>
                    <p className="text-gray-600">
                      Confidential counseling for depression and mood disorders
                    </p>
                  </div>

                  <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-300 transition-colors">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Lifestyle & Emotional Wellness</h4>
                    <p className="text-gray-600">
                      Holistic support for emotional wellbeing
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-purple-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Mental Health Counseling Session</h4>
                      <p className="text-gray-600">Confidential one-on-one counseling sessions</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600 mb-2">Ksh 699</div>
                      <button
                        onClick={() => openWhatsApp('25476928470', 'Faith', 'mental health counseling')}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                      >
                        <MessageCircle size={20} />
                        <span>Consult Faith</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">All Consultations are Confidential</h2>
          <p className="text-xl text-blue-100 mb-8">
            Your privacy is our priority. All consultations are conducted with complete confidentiality and professional ethics.
          </p>
          <div className="bg-blue-700 rounded-xl p-6 text-left">
            <h3 className="font-bold text-lg mb-3">What to Expect:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Professional assessment and personalized advice</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Clear treatment or nutrition plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Follow-up support and guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Product recommendations when appropriate</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
