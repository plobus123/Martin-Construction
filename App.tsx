import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Credentials from './components/Credentials';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Credentials />
        <Benefits />
        <SocialProof />
        <Offer />
        <Guarantee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;