'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Login = () => {
    const router = useRouter();
    const [loginMethod, setLoginMethod] = useState('email');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignIN = async (e) => {
        e.preventDefault();

        const obj = loginMethod === 'username' ? { username, password } : { email, password };

        try {
            const response = await fetch('https://for5-backend-quiz.vercel.app/login', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data.message);

            if (!response.ok) {
                return toast.error(`Error: ${data.message || 'Login failed'}`);
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refresh_token);
            toast.success('Signin successful');
            router.push('/problems');
        } catch (err) {
            console.log(err);
            toast.error('An unexpected error occurred.');
        }
    };

    const handleNavigateToSignUp = () => {
        router.push('/signup');
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full max-w-md p-11 space-y-8 border-2 rounded-md">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Login to Your Account</h2>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className={`font-bold cursor-pointer ${loginMethod === 'email' ? 'text-indigo-600 hover:text-indigo-500' : 'text-gray-500'
                            }`}
                        onClick={() => setLoginMethod('email')}
                    >
                        Login with Email
                    </button>
                    <button
                        className={`font-bold cursor-pointer ${loginMethod === 'username' ? 'text-indigo-600 hover:text-indigo-500' : 'text-gray-500'
                            }`}
                        onClick={() => setLoginMethod('username')}
                    >
                        Login with Username
                    </button>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSignIN}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        {loginMethod === 'username' ? (
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        ) : (
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
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        )}

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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="relative flex justify-center w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#E47406] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 group"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">Forgot Password?</button>
                    <button onClick={handleNavigateToSignUp} className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;