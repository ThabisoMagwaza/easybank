import BlogFeatures from '@/components/BlogFeatures';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <BlogFeatures />
        <Footer />
      </main>
    </>
  );
}
