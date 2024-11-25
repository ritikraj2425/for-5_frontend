"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


export default function Signup() {

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [username, setUserName] = useState('');
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL


    const handleSignUP = async (e) => {
        e.preventDefault();
        if(password!=rePassword){
            toast.error('Password does not match');
            throw new Error('password not match')
        }
        try{
            const response = await fetch(`${backend_url}/signup`, {
                method: 'POST',
                body: JSON.stringify({
                    name,username,email,password
                }),
                headers: {
                    'content-type': 'application/json',
                    'apikey': process.env.NEXT_PUBLIC_API_KEY,
                }
            })
            const data = await response.json()
            if(!response.ok){
                console.log(data)
                return toast.error('Error',data.message)
            }

            localStorage.setItem('jwtToken', data.jwtToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            toast.success('signup successfull');
            router.push('/problems')

        }catch(err){
            toast.error(err);
        }

 }
 const handleSignIN =()=>{
    router.push('/login')
 }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
            <div className="max-w-md w-full p-8 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-orange-500 border-opacity-30 space-y-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                        Create Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">Join our community today</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignUP}>
                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="relative">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                                placeholder="Username"
                            />
                        </div>
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                                placeholder="Password"
                            />
                        </div>
                        <div className="relative">
                            <input
                                id="repassword"
                                name="repassword"
                                type="password"
                                onChange={(e) => setRePassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 transform hover:scale-105"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-center text-sm">
                    <button
                        onClick={handleSignIN}
                        className="font-medium text-orange-500 hover:text-orange-400 transition duration-300"
                    >
                        Already have an account? Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}