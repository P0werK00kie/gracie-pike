import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MetaTags from '@/components/SEO/MetaTags';
import StructuredData from '@/components/SEO/StructuredData';
import Analytics from '@/components/SEO/Analytics';

const Index = () => {
  return (
    <>
      {/* SEO Components */}
      <MetaTags />
      <StructuredData />
      <Analytics />
      
      {/* Main Content */}
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;