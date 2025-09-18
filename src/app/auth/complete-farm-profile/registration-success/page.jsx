// 'use client'

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { CheckCircle, Sparkles, Zap, Trophy, Gift, ArrowRight, Home, Mail, Calendar, MapPin } from 'lucide-react';

// export default function RegistrationSuccess() {
//   const router = useRouter();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     if (router.isReady) {
//       const { firstName, farmName, city, state, farmSize, farmSizeUnit, farmType } = router.query;
//       if (!firstName) {
//         // Redirect if missing data
//         router.replace('/');
//       } else {
//         setUserData({
//           firstName,
//           farmName,
//           city,
//           state,
//           farmSize,
//           farmSizeUnit,
//           farmType
//         });
//       }
//     }
//   }, [router.isReady, router.query]);

//   if (!userData) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-green-400 to-blue-500 flex items-center justify-center">
//         <div className="text-white text-center">
//           <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p>Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-green-400 to-blue-500 flex items-center justify-center p-4 relative overflow-hidden">

//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-300/20 rounded-full animate-ping"></div>
//         <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-blue-300/15 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-emerald-300/10 rounded-full animate-bounce"></div>
//       </div>

//       <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 max-w-4xl w-full">
//         {/* Success Header */}
//         <div className="text-center mb-8">
//           <div className="relative mb-6">
//             <div className="w-32 h-32 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
//               <CheckCircle className="w-16 h-16 text-white" />
//             </div>
//             <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>
//             <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
//               <Trophy className="w-5 h-5 text-white" />
//             </div>
//           </div>

//           <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-fade-in">
//             🎉 Congratulations!
//           </h1>
//           <p className="text-2xl text-gray-700 mb-2">
//             Welcome to <span className="font-bold text-emerald-600">FarmTech</span>, {userData.firstName}!
//           </p>
//           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//             Your farm account has been successfully created. You're now part of a community revolutionizing agriculture,
//             and you've been added to our newsletter for the latest updates!
//           </p>
//         </div>

//         {/* Farm Profile Info */}
//         <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 mb-8 border border-emerald-100">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
//             <Gift className="w-6 h-6 mr-2 text-emerald-600" />
//             Your Farm Profile
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Farm Name */}
//             <ProfileCard icon={<Home className="w-4 h-4 text-white" />} label="Farm Name" value={userData.farmName} bg="emerald-500" />
//             {/* Location */}
//             <ProfileCard icon={<MapPin className="w-4 h-4 text-white" />} label="Location" value={`${userData.city}, ${userData.state}`} bg="blue-500" />
//             {/* Size */}
//             <ProfileCard icon={<Calendar className="w-4 h-4 text-white" />} label="Farm Size" value={`${userData.farmSize} ${userData.farmSizeUnit}`} bg="purple-500" />
//             {/* Type */}
//             <ProfileCard icon={<Zap className="w-4 h-4 text-white" />} label="Farm Type" value={`${userData.farmType} farming`} bg="green-500" />
//             {/* Newsletter */}
//             <ProfileCard icon={<Mail className="w-4 h-4 text-white" />} label="Newsletter" value="✓ Subscribed" bg="yellow-500" />
//             {/* Status */}
//             <ProfileCard icon={<Trophy className="w-4 h-4 text-white" />} label="Status" value="✓ Active" bg="indigo-500" />
//           </div>
//         </div>

//         {/* Feature Highlights */}
//         <FeatureHighlights />

//         {/* Newsletter Confirmation */}
//         <NewsletterConfirmation />

//         {/* Action Buttons */}
//         <ActionButtons />

//         {/* Footer */}
//         <FooterNote />
//       </div>

//       {/* Global CSS Styles */}
//       <style jsx global>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Reusable UI components

// function ProfileCard({ icon, label, value, bg }) {
//   return (
//     <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm">
//       <div className="flex items-center mb-2">
//         <div className={`w-8 h-8 bg-${bg}-500 rounded-lg flex items-center justify-center mr-3`}>
//           {icon}
//         </div>
//         <span className="text-sm text-gray-500 font-medium">{label}</span>
//       </div>
//       <p className="font-semibold text-gray-800 pl-11">{value || 'Not specified'}</p>
//     </div>
//   );
// }

// function FeatureHighlights() {
//   const features = [
//     { icon: Zap, title: 'Smart Analytics', desc: 'Get AI-powered insights to optimize your farm operations and increase productivity.', status: 'Coming Soon', tagBg: 'blue-100', tagText: 'blue-800' },
//     { icon: Trophy, title: 'Expert Support', desc: 'Access 24/7 agricultural guidance from certified experts and agronomists.', status: 'Premium Feature', tagBg: 'emerald-100', tagText: 'emerald-800' },
//     { icon: Gift, title: 'Premium Tools', desc: 'Advanced farming features including weather forecasts and market analysis.', status: 'Launching Soon', tagBg: 'purple-100', tagText: 'purple-800' }
//   ];
//   return (
//     <div className="mb-8">
//       <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">What's Next?</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {features.map(({ icon: Icon, title, desc, status, tagBg, tagText }) => (
//           <div key={title} className={`bg-gradient-to-br from-${tagText}-50 to-${tagText}-50 p-6 rounded-2xl border border-${tagText}-100 hover:shadow-lg transition-shadow`}>
//             <div className={`w-16 h-16 bg-gradient-to-r from-${tagText}-500 to-${tagText}-600 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
//               <Icon className="w-8 h-8 text-white" />
//             </div>
//             <h4 className="font-semibold text-gray-800 mb-3 text-center">{title}</h4>
//             <p className="text-sm text-gray-600 text-center mb-4">{desc}</p>
//             <div className="text-center">
//               <span className={`inline-block bg-${tagBg} text-${tagText} text-xs font-semibold px-3 py-1 rounded-full`}>{status}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function NewsletterConfirmation() {
//   return (
//     <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 mb-8">
//       <div className="flex items-center justify-center mb-4">
//         <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4">
//           <Mail className="w-6 h-6 text-white" />
//         </div>
//         <div>
//           <h4 className="font-semibold text-gray-800">Newsletter Subscription</h4>
//           <p className="text-sm text-gray-600">You've been added to our mailing list!</p>
//         </div>
//       </div>
//       <p className="text-center text-gray-600 text-sm">
//         Check your email for a welcome message and stay tuned for updates about our full platform launch.
//       </p>
//     </div>
//   );
// }

// function ActionButtons() {
//   return (
//     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//       <Link href="/dashboard" className="w-full sm:w-auto">
//         <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
//           <Home className="w-5 h-5" />
//           <span>Go to Dashboard</span>
//           <ArrowRight className="w-5 h-5" />
//         </button>
//       </Link>
//       <Link href="/" className="w-full sm:w-auto">
//         <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-semibold">
//           Back to Home
//         </button>
//       </Link>
//     </div>
//   );
// }

// function FooterNote() {
//   return (
//     <div className="text-center mt-8 pt-6 border-t border-gray-200">
//       <p className="text-sm text-gray-500">
//         Need help getting started?
//         <Link href="/support" className="text-emerald-600 hover:text-emerald-700 font-medium ml-1">
//           Contact our support team
//         </Link>
//       </p>
//     </div>
//   );
// }

export default function RegistrationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 max-w-4xl w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-4">
          🎉 Congratulations!
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Your registration was successful. Welcome to FarmTech!
        </p>
        <p className="text-center text-gray-500">
          Please check your email for further instructions.
        </p>
        <button>
          <a href="/" className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200">
            Go to Home
          </a>
        </button>
      </div>
    </div>
  );
}