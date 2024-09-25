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


    const handleSignUP = async (e) => {
        e.preventDefault();
        if(password!=rePassword){
            toast.error('Password does not match');
            throw new Error('password not match')
        }
        try{
            const response = await fetch('https://for5-backend-quiz.vercel.app/signup', {
                method: 'POST',
                body: JSON.stringify({
                    name,username,email,password
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            const data = await response.json()
            if(!response.ok){
                return toast.error('Error',data)
            }

            localStorage.setItem('token',data.token);
            localStorage.setItem('refreshToken',data.refresh_token);
            toast.success('signup successfull');
            router.push('/problems')

        }catch(err){
            console.log(err);
        }

 }
 const handleSignIN =()=>{
    router.push('/login')
 }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full p-11 rounded-md border-2 space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up for an Account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignUP}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={(e)=>setName(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"

                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                onChange={(e)=>setUserName(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="username"

                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"

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
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"

                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                RePassword
                            </label>
                            <input
                                id="repassword"
                                name="repassword"
                                type="password"
                                onChange={(e)=>setRePassword(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="RePassword"

                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#E47406] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between">
                    <button
                        onClick={handleSignIN}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Already have an account? Sign In
                    </button>
                </div>

                {/* <div>
                    <button
                        onClick={handleGoogle}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Sign up with Google
                    </button>
                </div> */}
            </div>
        </div>
    );
}