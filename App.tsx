import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobDetails from './components/JobDetails';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-gray-200">
      <Header />
      <main>
        <Hero />
        <JobDetails />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;