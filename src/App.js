import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/ExperienceModal';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FloatingSocialSidebar from './components/FloatingSocialSideBar';
import FloatingHomeButton from './components/FloatingHomeButton';
import Loader from './components/Loader';
import TechStack from './components/TechStack';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <FloatingSocialSidebar />
      <FloatingHomeButton />
      <Navbar />
      <main style={{ paddingBottom: '60px' }} className="mobile-bottom-padding">
        <Hero />
        <About />
        <Experience />
        <Education />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
