"use client";
import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-11-30T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsLive(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLive) {
    return (
      <div className="text-center">
        {/* Main live message */}
        <div className="bg-gradient-to-r from-green-500/10 via-green-400/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-green-500/30 shadow-2xl mb-8">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-16 h-16 text-green-600 animate-bounce" />
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-green-600 mb-4">
            🎉 We&#39;re Live!
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            FamTech is now live! Join thousands of farmers already transforming their operations.
          </p>
          
          <button 
            onClick={() => {
              // User will change this route
              window.location.href = 'https://app.famtech.llc'; 
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <Rocket className="w-6 h-6" />
            Launch Dashboard
          </button>
        </div>

      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap gap-4 sm:gap-8 justify-center items-center">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="text-center"
        >
          <div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-green-500/20 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-3xl sm:text-5xl font-bold text-green-600 mb-2 font-mono tabular-nums">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider font-medium">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;