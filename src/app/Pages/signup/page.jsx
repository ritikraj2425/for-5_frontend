"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/app/lib/fireBaseConfig';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleGoogle = (e) => {
        e.preventDefault();
        console.log("Attempting Google sign-in...");
        signInWithPopup(auth, provider)
            .then((data) => {
                console.log("User signed in:", data.user.email);
                localStorage.setItem("email", data.user.email);
                toast.success("Sign-in successful! Redirecting...", {
                    position: "top-center",
                    autoClose: 1500,
                });
                router.push("/");
            })
            .catch((error) => {
                console.error("Error during sign-in:", error);
                toast.error("Error during Google sign-in: " + error.message, {
                    position: "top-center",
                    autoClose: 1500,
                });
            });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // localStorage.setItem('email', email);
            router.push('/Pages/Login');
        } catch (error) {
            console.error('Error during sign-up:', error);
            toast.error('Error during sign-up.');
        }
    };

    const handleSignIn = () => {
        router.push('/Pages/Login')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full p-11 rounded-md border-2 space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up for an Account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" >
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
                                autoComplete="new-password"
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
                        onClick={handleSignup}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#E47406] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between">
                    <button
                        onClick={handleSignIn}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Already have an account? Sign In
                    </button>
                </div>

                <div>
                    <button
                        onClick={handleGoogle}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
}