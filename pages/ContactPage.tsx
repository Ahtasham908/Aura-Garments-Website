
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-stone-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, an order, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 border border-stone-200">
            <h2 className="text-2xl font-semibold text-stone-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">Full Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-stone-300 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-400" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-stone-300 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-400" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-stone-300 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-400"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-stone-800 text-white py-3 px-6 font-semibold hover:bg-stone-900 transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-10">
            <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Contact Information</h3>
                <div className="space-y-3 text-stone-600">
                    <p><strong>Email:</strong> support@auragarments.com</p>
                    <p><strong>Phone:</strong> +1 (234) 567-890</p>
                    <p><strong>Address:</strong> 123 Elegance Ave, Fashion City, 10101</p>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 bg-stone-200 border border-stone-300">
                    {/* Placeholder for a map embed */}
                    <img src="https://picsum.photos/seed/map/800/450" alt="Map to our location" className="w-full h-full object-cover"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
