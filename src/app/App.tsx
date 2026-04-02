import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import ProcessSection from './components/ProcessSection';
import MarketSection from './components/MarketSection';
import CredibilitySection from './components/CredibilitySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ scrollBehavior: 'smooth' }}>
      <Navigation />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <ProcessSection />
      <MarketSection />
      <CredibilitySection />
      <CTASection />
      <Footer />
    </div>
  );
}
