import { Phone, Mail, MapPin } from 'lucide-react';
import { PageName } from '../types';

interface FooterProps {
  onNavigate: (page: PageName) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">HealthConnect Kenya</h3>
            <p className="text-sm mb-4">
              Confidential, affordable, and professional online healthcare for all Kenyans.
            </p>
            <div className="flex items-center space-x-2 text-sm mb-2">
              <MapPin size={16} />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mb-2">
              <Mail size={16} />
              <span>info@healthconnectkenya.com</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">
                  Shop
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Practitioners</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div className="font-medium text-white">Lewis Muli Keli</div>
                <div className="text-xs">Clinical Officer</div>
                <div className="flex items-center space-x-1 mt-1">
                  <Phone size={14} />
                  <span>+254790425578</span>
                </div>
              </li>
              <li className="mt-4">
                <div className="font-medium text-white">Faith Mukai Masila</div>
                <div className="text-xs">Nutritionist & Counselor</div>
                <div className="flex items-center space-x-1 mt-1">
                  <Phone size={14} />
                  <span>+25476928470</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal & Compliance</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('disclaimer')} className="hover:text-white transition-colors">
                  Medical Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-red-900/30 rounded-md border border-red-700">
              <p className="text-xs text-red-200 font-semibold">
                NOT FOR EMERGENCIES
              </p>
              <p className="text-xs text-red-300 mt-1">
                Call 999 or visit nearest hospital for emergencies
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} HealthConnect Kenya. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Licensed healthcare providers. All consultations are confidential.
          </p>
        </div>
      </div>
    </footer>
  );
}
