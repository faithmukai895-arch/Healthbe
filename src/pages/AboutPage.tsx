import { MessageCircle, Award, Heart, Target, Users } from 'lucide-react';

export default function AboutPage() {
  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'd like to learn more about HealthConnect Kenya services.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About HealthConnect Kenya</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner for confidential, affordable online healthcare
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, confidential, and affordable healthcare services to all Kenyans
                through innovative online consultations and quality wellness products. We believe everyone
                deserves professional healthcare without barriers of cost, distance, or stigma.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become Kenya's leading online healthcare platform, making quality medical consultations
                and wellness support available to every Kenyan through their mobile phone. We envision a
                future where healthcare is just a WhatsApp message away.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Award className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Confidentiality</h3>
                <p className="text-gray-600 text-sm">
                  Your privacy is our top priority. All consultations and health information remain strictly confidential.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Professionalism</h3>
                <p className="text-gray-600 text-sm">
                  Licensed practitioners providing evidence-based care with the highest ethical standards.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Affordability</h3>
                <p className="text-gray-600 text-sm">
                  Quality healthcare shouldn't break the bank. We offer transparent, affordable pricing for all services.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600 text-sm">
                  Healthcare on your terms, when you need it, delivered through platforms you already use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Users className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
            <p className="text-gray-600">
              Licensed healthcare professionals dedicated to your wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">L</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Lewis Muli Keli</h3>
                    <p className="text-blue-700 font-semibold">Clinical Officer</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Specializations:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Dermatology - Acne, skin infections, fungal conditions, eczema</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Reproductive Health - Sexual health, STIs, family planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>General Medical Consultations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-600 rounded-xl p-4 text-white">
                  <p className="text-sm mb-3">
                    Lewis brings years of clinical experience providing compassionate, evidence-based care.
                    He specializes in dermatological conditions and reproductive health, offering confidential
                    support in sensitive areas.
                  </p>
                  <button
                    onClick={() => openWhatsApp('254790425578', 'Lewis')}
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Consult Lewis on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">F</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Faith Mukai Masila</h3>
                    <p className="text-green-700 font-semibold">Nutritionist & Mental Health Counselor</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Specializations:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Nutrition - All ages, maternal, elderly, chronic diseases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Mental Health - Stress, anxiety, depression, relationships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Wellness Shop Management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-600 rounded-xl p-4 text-white">
                  <p className="text-sm mb-3">
                    Faith is a certified nutritionist and mental health counselor passionate about holistic wellness.
                    She provides personalized nutrition plans and compassionate mental health support. Faith also
                    manages the HealthConnect Kenya wellness shop.
                  </p>
                  <button
                    onClick={() => openWhatsApp('25476928470', 'Faith')}
                    className="w-full bg-white text-green-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Consult Faith on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
          <div className="bg-blue-700 rounded-xl p-8 text-left">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-300 font-bold mr-3">✓</span>
                <span>Licensed, qualified healthcare professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 font-bold mr-3">✓</span>
                <span>Complete confidentiality in all consultations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 font-bold mr-3">✓</span>
                <span>Evidence-based medical advice and treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 font-bold mr-3">✓</span>
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 font-bold mr-3">✓</span>
                <span>Quality wellness products recommended by healthcare professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 font-bold mr-3">✓</span>
                <span>Ongoing support and follow-up care</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
