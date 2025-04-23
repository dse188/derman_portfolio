import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Manually create the encoded form data
    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    formData.append('email', e.target.email.value);
    formData.append('message', e.target.message.value);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
      navigate("/success");
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaPaperPlane className="text-blue-400" />
            Send Me a Message
          </h2>
          
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field - keep hidden */}
            <div className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Hello Derman, I wanted to talk about..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            Direct Contact
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Email Me Directly</h3>
              <a 
                href="mailto:derman.cetinalp@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                <FaEnvelope /> derman.cetinalp@gmail.com
              </a>
              <p className="text-gray-400 mt-2 text-sm">
                Feel free to reach out directly via email for any inquiries or opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/derman-cetinalp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/dse188" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Availability</h3>
              <p className="text-gray-400">
                I'm currently open to new opportunities and collaborations. I typically respond within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;