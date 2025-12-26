import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'd like to inquire about your services at HealthConnect Kenya.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 space-y-3">
          <button
            onClick={() => openWhatsApp('254790425578', 'Lewis')}
            className="flex items-center space-x-3 bg-white shadow-lg rounded-full px-4 py-3 hover:shadow-xl transition-all border-2 border-green-500 group"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              L
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-sm">Lewis Muli Keli</div>
              <div className="text-xs text-gray-600">Clinical Officer</div>
            </div>
            <MessageCircle className="text-green-600 group-hover:scale-110 transition-transform" size={20} />
          </button>

          <button
            onClick={() => openWhatsApp('25476928470', 'Faith')}
            className="flex items-center space-x-3 bg-white shadow-lg rounded-full px-4 py-3 hover:shadow-xl transition-all border-2 border-green-500 group"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              F
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-sm">Faith Mukai Masila</div>
              <div className="text-xs text-gray-600">Nutritionist & Counselor</div>
            </div>
            <MessageCircle className="text-green-600 group-hover:scale-110 transition-transform" size={20} />
          </button>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        {isExpanded ? (
          <span className="text-2xl">×</span>
        ) : (
          <MessageCircle size={28} />
        )}
      </button>
    </div>
  );
}
