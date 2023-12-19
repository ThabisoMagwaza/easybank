import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
