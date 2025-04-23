import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center max-w-md bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
        <p className="text-lg mb-6">
          Thank you for your message. I'll get back to you as soon as possible.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;