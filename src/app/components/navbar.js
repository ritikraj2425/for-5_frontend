'use client';
import React, { useEffect, useState, useRef, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { IoExitOutline } from "react-icons/io5";
import { ThemeContext } from '../context/usecontext';



const Navbar = () => {

    const { handleSignOutContext, signIn, handleSignInContext } = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);
    const [isToggleProfile, setIsToggleProfile] = useState(false);
    const [userData, setUserData] = useState();
    const [apiData, setApiData] = useState();
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            handleSignInContext();
        }
    }, [])
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const jwt = localStorage.getItem('jwtToken');
            const refresh = localStorage.getItem('refreshToken');
            fetch(`${backend_url}/user/details`, {
                method: 'GET',
                headers: {
                    'apikey': process.env.NEXT_PUBLIC_API_KEY,
                    'jwttoken': jwt,
                    'refreshtoken': refresh
                }
            })
                .then((response) => response.json())
                .then((data) => setApiData(data));
        }
    }, [signIn])

    const router = useRouter();
    const profileRef = useRef();

    const toggleProfile = () => {
        setIsToggleProfile(!isToggleProfile);
    }

    const handleSignOut = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('refreshToken');
        handleSignOutContext();
        router.push('/login');
        setIsToggleProfile(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsToggleProfile(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-[#FF8C00] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white font-bold text-xl">
                        <p className='text-2xl'>for5</p>
                </Link>

                <div className="flex items-center space-x-6">
                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-white hover:text-gray-200">Home</Link>
                        <Link href="/problems" className="text-white hover:text-gray-200">Problems</Link>
                        <Link href="/contestDetails" className="text-white hover:text-gray-200">Contest</Link>
                        <Link href="/discussion" className="text-white hover:text-gray-200">Discussion</Link>
                    </div>

                    {signIn ? (
                        <div className="hidden md:block">
                            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                                <Image
                                    onClick={toggleProfile}
                                    src="/profileimage.png"
                                    alt="User"
                                    width={33}
                                    height={33}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-hidden text-white cursor-pointer">
                            <Link href={'/login'}>SignIn</Link>
                        </div>
                    )}

                    {isToggleProfile && (
                        <div ref={profileRef} className="absolute md:mt-80 mt-60 mr-5 left-auto md:right-4 right-0 bg-[#D9D9D9] rounded-md shadow-lg p-4 z-50 flex flex-col items-center">
                            <Image src="/profileimage.png" alt="User" width={47} height={47} />
                            <h1 className='text-center mt-2 font-bold text-2xl'>{apiData ? apiData.username : <div>Loading...</div>}</h1>
                            <Link href='/profile'>
                                <button className="mt-2 bg-white text-blue-500 font-bold px-16 py-2 rounded">View Profile</button>
                            </Link>
                            <div className="flex justify-between w-full mt-4 px-2">
                                <h1 className="font-bold">Streak</h1>
                                <h1 className="font-bold">0 days</h1>
                            </div>
                            <div className="flex justify-between w-full mt-2 px-2">
                                <h1 className="font-bold">Solved Today</h1>
                                <h1 className="font-bold">0</h1>
                            </div>
                            <div>
                                <button className="mt-4 bg-white flex text-red-500 px-16 font-bold py-2 rounded" onClick={handleSignOut}>
                                    Signout <IoExitOutline className='mt-1 ml-2' />
                                </button>
                            </div>
                        </div>
                    )}

                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <Link href="/" className="block text-white py-2 px-4 hover:bg-blue-700">Home</Link>
                    <Link href="/problems" className="block text-white py-2 px-4 hover:bg-blue-700">Problems</Link>
                    <Link href="/contestDetails" className="block text-white py-2 px-4 hover:bg-blue-700">Contest</Link>
                    <Link href="/discussion" className="block text-white py-2 px-4 hover:bg-blue-700">Discussion</Link>
                    <div className="py-2 px-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                            <Image src="/profileimage.png" alt="User" width={34} height={34} onClick={toggleProfile} />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
