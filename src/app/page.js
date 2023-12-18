import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <Hero />
      </main>
    </>
  );
}
