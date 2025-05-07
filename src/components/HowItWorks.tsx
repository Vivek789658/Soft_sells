import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileSearch, DollarSign } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Upload Your Licenses',
    description: 'Provide details about your software licenses through our simple form or bulk upload for multiple licenses.',
    icon: Upload,
    color: 'bg-primary-100 text-primary-600',
  },
  {
    id: 2,
    title: 'Get Expert Valuation',
    description: 'Our team provides a fair market valuation based on current demand, remaining subscription time, and license type.',
    icon: FileSearch,
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    id: 3,
    title: 'Get Paid Quickly',
    description: 'Accept our offer and receive payment through your preferred method within 1-3 business days.',
    icon: DollarSign,
    color: 'bg-accent-100 text-accent-600',
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="how-it-works" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={step.id}
                className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg border border-gray-100 dark:border-gray-600"
                variants={itemVariants}
              >
                <span 
                  className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-6 mx-auto`}
                >
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="btn-primary inline-block"
          >
            Start Selling Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;