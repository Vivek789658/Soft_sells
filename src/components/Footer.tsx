import React from 'react';
import { motion } from 'framer-motion';
import { MonitorCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <MonitorCheck className="h-8 w-8 text-primary-500 mr-2" />
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-6">
              The smarter way to sell your unused software licenses and maximize your ROI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-primary-500 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-primary-500 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary-500 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact Us</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">License Agreement</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-400">info@softsell.com</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-400">
                  123 Tech Street, San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;