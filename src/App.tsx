import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      <Header darkMode={darkMode} />
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ChatWidget />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </motion.main>

      <Footer />
    </div>
  );
}

export default App;