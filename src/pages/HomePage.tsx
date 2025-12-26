import { Shield, Clock, DollarSign, MessageCircle, Activity, Heart, Apple, User } from 'lucide-react';
import { PageName } from '../types';
import { products } from '../data/products';

interface HomePageProps {
  onNavigate: (page: PageName) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = products.filter(p => p.isFeatured);

  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'd like to book a consultation with HealthConnect Kenya.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Confidential, Affordable Online Healthcare
                <span className="text-blue-600"> for Kenya</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional medical consultations and wellness products delivered through WhatsApp.
                Licensed practitioners, complete privacy, and affordable care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Consult a Doctor
                </button>
                <button
                  onClick={() => onNavigate('shop')}
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Shop Wellness Products
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Confidential</div>
                    <div className="text-sm text-gray-600">100% Private</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="text-green-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Affordable</div>
                    <div className="text-sm text-gray-600">From Ksh 399</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-green-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Fast</div>
                    <div className="text-sm text-gray-600">Same Day</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare professional"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional healthcare consultations with licensed practitioners via WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Activity className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dermatology</h3>
              <p className="text-gray-600 mb-4">
                Acne, skin infections, fungal conditions, and eczema treatment
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reproductive Health</h3>
              <p className="text-gray-600 mb-4">
                Confidential sexual health, STIs, and family planning support
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Apple className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nutrition</h3>
              <p className="text-gray-600 mb-4">
                Personalized meal plans for all ages and health conditions
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-orange-600 font-semibold hover:text-orange-700"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mental Health</h3>
              <p className="text-gray-600 mb-4">
                Confidential counseling for stress, anxiety, and relationships
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-purple-600 font-semibold hover:text-purple-700"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get professional healthcare in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Service</h3>
              <p className="text-gray-600">
                Select the consultation or product you need from our services or shop
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pay via M-Pesa</h3>
              <p className="text-gray-600">
                Make payment to our M-Pesa Till Number: 4342368
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chat on WhatsApp</h3>
              <p className="text-gray-600">
                Send payment confirmation and start your consultation or place your order
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Complete Guide
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Wellness Products
            </h2>
            <p className="text-lg text-gray-600">
              Doctor-recommended products for your health and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      Ksh {product.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => openWhatsApp('25476928470', 'Faith')}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1"
                    >
                      <MessageCircle size={16} />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('shop')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our licensed healthcare professionals today for confidential, affordable care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsApp('254790425578', 'Lewis')}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={24} />
              <span>Chat with Lewis (Clinical Officer)</span>
            </button>
            <button
              onClick={() => openWhatsApp('25476928470', 'Faith')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={24} />
              <span>Chat with Faith (Nutritionist)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
