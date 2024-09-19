"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/app/lib/fireBaseConfig';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            router.push({
                pathname: '/',
                query: { uid: JSON.parse(sessionStorage.getItem('uid')) }
            });
        }
    }, [router]);

    const handleEmailSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();

            sessionStorage.setItem('token', token);
            sessionStorage.setItem('uid', JSON.stringify(user.uid));
    
            router.push('/');
        } catch (error) {
            console.error('Error during email sign-in:', error);
            toast.error('Error during email sign-in.');
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const token = await user.getIdToken();

            sessionStorage.setItem('token', token);
            sessionStorage.setItem('uid', JSON.stringify(user.uid));

        

            router.push('/');

            setTokenRefresh(user);

        } catch (error) {
            console.error('Error during Google sign-in:', error);
            toast.error('Error during Google sign-in.');
        }
    };

    const setTokenRefresh = (user) => {

        setInterval(async () => {
            const token = await user.getIdToken(true);
            sessionStorage.setItem('token', token);
        }, 6 * 24 * 60 * 60 * 1000);
    };

    const handleResetPassword = () => {
        router.push('/Pages/reset');
    };

    const handleNavigateToSignUp = () => {
        router.push('/Pages/signup');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full border-2 p-11 rounded-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login to Your Account
                    </h2>
                </div>
                <form className="mt-8 space-y-6 " onSubmit={handleEmailSignIn}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#E47406] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between">
                    <button
                        onClick={handleResetPassword}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Forgot Password?
                    </button>
                    <button
                        onClick={handleNavigateToSignUp}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Sign Up
                    </button>
                </div>

                <div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
