import { MessageCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { products, categories } from '../data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const openWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hello Faith, I'd like to order ${productName} from HealthConnect Kenya Shop.`);
    window.open(`https://wa.me/25476928470?text=${message}`, '_blank');
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.categoryId === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center">Wellness Shop</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto text-center">
            Doctor-recommended products for your health and wellness
          </p>
          <div className="mt-8 bg-green-700 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertCircle className="flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold mb-2">Shop Manager: Faith Mukai Masila</h3>
                <p className="text-green-100 text-sm">
                  All orders are processed by Faith. She will issue receipts, manage stock, and coordinate delivery or pickup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {selectedCategory !== 'all' && (
            <div className="bg-white rounded-xl p-6 mb-8 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h3>
              <p className="text-gray-600">
                {categories.find(c => c.id === selectedCategory)?.description}
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>

                  {product.medicalDisclaimer && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                      <p className="text-xs text-yellow-800 flex items-start">
                        <AlertCircle className="flex-shrink-0 mr-1 mt-0.5" size={14} />
                        <span>{product.medicalDisclaimer}</span>
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        Ksh {product.price.toLocaleString()}
                      </div>
                    </div>
                    <button
                      onClick={() => openWhatsApp(product.name)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    >
                      <MessageCircle size={18} />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Order</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Product</h3>
              <p className="text-gray-600 text-sm">
                Browse and select the wellness product you need
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Faith</h3>
              <p className="text-gray-600 text-sm">
                Click "Order" to message Faith on WhatsApp
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay & Receive</h3>
              <p className="text-gray-600 text-sm">
                Pay via M-Pesa and arrange delivery or pickup
              </p>
            </div>
          </div>

          <div className="mt-12 bg-green-50 rounded-xl p-6 border-2 border-green-200">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Payment Information</h3>
            <p className="text-gray-700 mb-4">
              Make payment to M-Pesa Till Number: <span className="font-bold text-green-600 text-xl">4342368</span>
            </p>
            <p className="text-sm text-gray-600">
              After payment, send confirmation to Faith on WhatsApp along with your delivery address.
              She will issue a receipt and coordinate your order fulfillment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-blue-100 mb-6">
            Not sure which product is right for you? Consult with our practitioners first.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
