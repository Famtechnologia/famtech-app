'use client';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Mail, User } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      alert('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api-famtech-backend-app.onrender.com/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim()
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.message || 'Failed to join waitlist');
      }
    } catch (error) {
      console.error('Error joining waitlist:', error);
     
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto">
        {/* Success animation container */}
        <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 shadow-2xl text-center">
          {/* Success icon with animation */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto relative z-10 animate-bounce" />
          </div>
          
          {/* Success message */}
          <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
            🎉 Welcome Aboard!
          </h3>
          
          <p className="text-gray-700 mb-2 text-lg">
            Thanks, <span className="font-semibold text-green-600">{name}</span>!
          </p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            You&39;ve successfully joined our waitlist. We&39;ll notify you at{' '}
            <span className="font-medium text-green-600">{email}</span> when we launch.
          </p>
          
          {/* Dashboard button */}
          <button 
            onClick={() => {
              // User will change this route
              window.location.href = 'https://famtechnologia.com';
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            Visit our website
            <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* Decorative elements */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-2 h-2 bg-green-500/60 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-500/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-green-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input */}
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-green-500/20 rounded-2xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
            required
          />
        </div>

        {/* Email input */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-green-500/20 rounded-2xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading || !email || !name}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Joining...
            </>
          ) : (
            <>
              Join Waitlist
              
            </>
          )}
        </button>
      </form>

     
    </div>
  );
};

export default WaitlistForm;