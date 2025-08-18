// // /app/(auth)/login/page.tsx
// 'use client';

// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-hot-toast';
// import Link from 'next/link';
// import { useAuthStore } from '@/store/authStore';
// import {API_URL } from "../../config"

// interface LoginFormInputs {
//   email: string;
//   password: string;
// }

// export default function LoginPage() {
//   const router = useRouter();
//   const fetchSession = useAuthStore((s) => s.fetchSession);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<LoginFormInputs>();

//   const onSubmit = async (data: LoginFormInputs) => {
//     try {
//       const res = await fetch(`${API_URL}/auth/signup`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         const result = await res.json();
//         toast.error(result.error || 'Login failed');
//         return;
//       }

//       await fetchSession(); // Hydrate Zustand with user and claims

//       const { farmId } = useAuthStore.getState().claims;
//       toast.success('Login successful!');
//       router.push(`/farm/${farmId || ''}`);
//     } catch (error: any) {
//       toast.error(error?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to Famtech
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Revolutionizing Agriculture with Smart Technology
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">Email address</label>
//               <input
//                 id="email"
//                 type="email"
//                 {...register('email', { required: 'Email is required' })}
//                 className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="Email address"
//               />
//               {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 {...register('password', { required: 'Password is required' })}
//                 className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="Password"
//               />
//               {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
//             >
//               {isSubmitting ? 'Signing in...' : 'Sign in'}
//             </button>
//           </div>

//           <div className="text-center">
//             <Link href="/register" className="text-primary-600 hover:text-primary-500">
//               Don&apos;t have an account? Sign up
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



import Login from "@/components/auth/LoginForm";

export default function Page() {
  return (
    <>
      <Login />
    </>
  );
}
