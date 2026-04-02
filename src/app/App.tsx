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
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[72rem] h-[34rem] opacity-70 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at center, rgba(234,88,12,0.1), rgba(234,88,12,0.04) 34%, rgba(12,12,14,0) 72%)',
          }}
        />
        <div
          className="absolute top-[28rem] -left-32 w-[28rem] h-[28rem] opacity-45 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at center, rgba(234,88,12,0.08), rgba(12,12,14,0) 70%)',
          }}
        />
        <div
          className="absolute top-[62rem] right-[-8rem] w-[34rem] h-[34rem] opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at center, rgba(234,88,12,0.07), rgba(12,12,14,0) 72%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(12,12,14,0) 18%, rgba(234,88,12,0.018) 48%, rgba(12,12,14,0) 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
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
    </div>
  );
}
