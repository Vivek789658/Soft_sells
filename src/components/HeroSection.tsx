import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/5 z-0" 
        aria-hidden="true"
      />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="flex-1 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Unused Software<br />
              Into <span className="text-primary-600">Real Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              SoftSell helps businesses and individuals sell their unused software licenses quickly, securely, and at the best possible price.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="btn-primary px-8 py-4 text-lg w-full sm:w-auto"
              >
                Sell My Licenses
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#how-it-works" 
                className="btn-secondary w-full sm:w-auto text-lg"
              >
                Learn How It Works
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur-md opacity-75"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Software dashboard with analytics" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;