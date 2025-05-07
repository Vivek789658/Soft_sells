import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Clock, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Secure Transactions',
    description: 'Bank-level encryption and verification processes keep your data and transactions safe.',
    icon: Shield,
    color: 'text-primary-600',
  },
  {
    id: 2,
    title: 'Best Market Value',
    description: 'Our extensive network of buyers ensures you get the highest possible value for your licenses.',
    icon: TrendingUp,
    color: 'text-secondary-600',
  },
  {
    id: 3,
    title: 'Fast Process',
    description: 'From submission to payment, our streamlined process typically takes less than 3 business days.',
    icon: Clock,
    color: 'text-accent-600',
  },
  {
    id: 4,
    title: 'Expert Support',
    description: 'Our team of software licensing experts is available to help you through every step of the process.',
    icon: Users,
    color: 'text-primary-600',
  }
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="why-choose-us" className="section">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Why Choose SoftSell</h2>
          <p className="section-subtitle">
            We've helped thousands of businesses and individuals sell their unused licenses with confidence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <motion.div 
                key={feature.id} 
                className="flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-6`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="mt-16 p-8 bg-primary-50 dark:bg-gray-700 rounded-xl shadow-md border border-primary-100 dark:border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to sell your unused licenses?</h3>
              <p className="text-gray-600 dark:text-gray-300">Get started in minutes with our simple process.</p>
            </div>
            <a 
              href="#contact" 
              className="btn-primary whitespace-nowrap"
            >
              Get a Free Valuation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;