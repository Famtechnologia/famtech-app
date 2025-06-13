// 'use client'
// import React, { useId, useState } from 'react'
// import OnboardLayout from '@/components/auth/layout/onboardLayout'
// import logo from '../../../../../public/images/home/logo.png'
// import Image from 'next/image'
// import {useRouter} from 'next/navigation'

// const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY || '' // This should be injected securely

// const Page = () => {
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.id]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccessMsg('');
//     setLoading(true);

//     try {
//       const res = await fetch('/api/admin/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-admin-token': ADMIN_SECRET
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || 'Registration failed');
//       } else {
//         const role = data.role || 'superadmin'
//         const userId = data.uid
//         setSuccessMsg('Registration successful!');
//         setFormData({ name: '', email: '', password: '' });
//         router.push(`/admin/${userId}`)
//         console.log(userId)
//       }
//     } catch (err) {
//       setError('Network or unexpected error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <OnboardLayout title="Registration">
//       <div className="flex justify-center lg:justify-end absolute items-center inset-0 transform lg:-translate-x-1/8 w-full">
//         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//           <Image
//             src={logo}
//             alt="Onboarding Logo"
//             width={150}
//             height={150}
//             className="mx-auto flex justify-center py-3"
//           />
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 className="border border-gray-300 rounded-md p-2 w-full"
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 className="border border-gray-300 rounded-md p-2 w-full"
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-2"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 className="border border-gray-300 rounded-md p-2 w-full"
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {error && <p className="text-red-600 mb-4">{error}</p>}
//             {successMsg && <p className="text-green-600 mb-4">{successMsg}</p>}

//             <button
//               className="w-full bg-[#16A34A] text-white p-2 rounded-md"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </OnboardLayout>
//   )
// }

// export default Page
