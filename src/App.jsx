import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Vision from './components/Vision/Vision';
import Masterplan from './components/Masterplan/Masterplan';
import Destinations from './components/Destinations/Destinations';
import Location from './components/Location/Location';
import Approach from './components/Approach/Approach';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Masterplan />
      <Destinations />
      <Location />
      <Approach />
      <Footer />
    </>
  );
}

export default App;
