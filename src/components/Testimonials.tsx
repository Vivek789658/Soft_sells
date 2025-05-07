import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "SoftSell helped our company recover over $50,000 from unused enterprise licenses. The process was surprisingly smooth and their valuation exceeded our expectations.",
    author: "Sarah Johnson",
    position: "IT Director",
    company: "TechGrowth Inc.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    quote: "As a startup that over-purchased software licenses, SoftSell was a lifesaver for our budget. Quick valuation, fair prices, and payment within 48 hours.",
    author: "David Chen",
    position: "Operations Manager",
    company: "Velocity Ventures",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Testimonials = () => {
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
    <section id="testimonials" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what businesses have experienced with SoftSell.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-600"
              variants={itemVariants}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg mb-4">
            Join hundreds of satisfied customers who've unlocked the value of their unused software.
          </p>
          <a 
            href="#contact" 
            className="btn-secondary inline-block"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;