import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // In a real application, this would send the data to a server
    console.log('Form data:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get a Free Valuation</h2>
          <p className="section-subtitle">
            Fill out the form below and our team will provide a no-obligation valuation for your software licenses.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We've received your information and will contact you shortly with a valuation of your software licenses.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800`}
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800`}
                      placeholder="john@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800"
                      placeholder="Company Name"
                      {...register('company')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      License Type *
                    </label>
                    <select
                      id="licenseType"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800`}
                      {...register('licenseType', { required: 'License type is required' })}
                    >
                      <option value="">Select License Type</option>
                      <option value="Business">Business Software</option>
                      <option value="Creative">Creative Suite</option>
                      <option value="Development">Development Tools</option>
                      <option value="Productivity">Productivity Suite</option>
                      <option value="Enterprise">Enterprise Solutions</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.licenseType && (
                      <p className="mt-1 text-sm text-red-500">{errors.licenseType.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800`}
                    placeholder="Tell us about your licenses (type, quantity, purchase date, etc.)"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Submit Request <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;