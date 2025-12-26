import { useState, useEffect } from 'react';
import { PageName } from './types';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButtons from './components/WhatsAppButtons';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ShopPage from './pages/ShopPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  const handleNavigate = (page: PageName) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let title = 'HealthConnect Kenya - Online Clinic & Wellness Store';

    switch (currentPage) {
      case 'home':
        title = 'HealthConnect Kenya - Online Clinic & Wellness Store';
        break;
      case 'services':
        title = 'Our Services - HealthConnect Kenya';
        break;
      case 'pricing':
        title = 'Pricing - HealthConnect Kenya';
        break;
      case 'shop':
        title = 'Wellness Shop - HealthConnect Kenya';
        break;
      case 'how-it-works':
        title = 'How It Works - HealthConnect Kenya';
        break;
      case 'about':
        title = 'About Us - HealthConnect Kenya';
        break;
      case 'contact':
        title = 'Contact Us - HealthConnect Kenya';
        break;
      case 'disclaimer':
        title = 'Medical Disclaimer - HealthConnect Kenya';
        break;
      case 'privacy':
        title = 'Privacy Policy - HealthConnect Kenya';
        break;
      case 'terms':
        title = 'Terms & Conditions - HealthConnect Kenya';
        break;
    }

    document.title = title;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'shop':
        return <ShopPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButtons />
    </div>
  );
}

export default App;
