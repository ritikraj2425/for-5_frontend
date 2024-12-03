'use client';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {ThemeContext} from '../../context/usecontext';


const Login = () => {
    const {handleSignInContext} = useContext(ThemeContext);
    const router = useRouter();
    const [loginMethod, setLoginMethod] = useState('email');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading,setLoading] = useState(false);
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL
    const handleSignIN = async (e) => {

        e.preventDefault();
        setLoading(true)
        const obj = loginMethod === 'username' ? { username, password } : { email, password };
        try {
            const response = await fetch(`${backend_url}/login`, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': process.env.NEXT_PUBLIC_API_KEY
                }
            });
            const data = await response.json();
            if (!response.ok) {
                return toast.error(`Error: ${data.message || 'Login failed'}`);
            }
            localStorage.setItem('jwtToken', data.jwtToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            handleSignInContext();
            setLoading(false);
            toast.success('Signin successful');
            router.push('/problems');
        } catch (err) {

            toast.error('An unexpected error occurred.');
        }
    };
    const handleNavigateToSignUp = () => {
        router.push('/signup');
    };
    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8  bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-orange-500 border-opacity-30 space-y-8">
            <div>
                <h2 className="mt-6 text-3xl font-extrabold text-center text-orange-500">Login to Your Account</h2>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className={`font-bold cursor-pointer ${loginMethod === 'email' ? 'text-orange-500' : 'text-gray-400 hover:text-orange-400'}`}
                    onClick={() => setLoginMethod('email')}
                >
                    Login with Email
                </button>
                <button
                    className={`font-bold cursor-pointer ${loginMethod === 'username' ? 'text-orange-500' : 'text-gray-400 hover:text-orange-400'}`}
                    onClick={() => setLoginMethod('username')}
                >
                    Login with Username
                </button>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSignIN}>
                <div className="rounded-md shadow-sm -space-y-px">
                    {loginMethod === 'username' ? (
                        <div>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    )}
                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        {loading?"Loading...":"Sign In"}
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between">
                <button className="font-medium text-orange-500 hover:text-orange-400">Forgot Password?</button>
                <button onClick={handleNavigateToSignUp} className="font-medium text-orange-500 hover:text-orange-400">
                    Sign Up
                </button>
            </div>
        </div>
    </div>
    );
};

export default Login;