'use client'
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isToggleProfile, setIsToggleProfile] = useState(false);
    const [userData, setUserData] = useState();
    const [token, setToken] = useState(null); // Move token to state

    useEffect(() => {
        // Access localStorage after component mounts (client-side only)
        const storedToken = localStorage.getItem('jwtToken');
        setToken(storedToken);
    }, []);

    const toggleProfile = () => {
        setIsToggleProfile(!isToggleProfile);
    }

    const handleSignOut = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('refreshToken');
        }
        router.push('/login');
        setIsToggleProfile(false);
    };

    const router = useRouter();
    const profileRef = useRef();

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
        <nav className="bg-orange-500 p-4">
            <div className="container mx-auto flex justify-between items-center">

                <Link href="/" className="text-white font-bold text-xl">
                    Logo
                </Link>

                <div className="flex items-center space-x-6">
                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-white hover:text-gray-200">
                            Home
                        </Link>
                        <Link href="/problems" className="text-white hover:text-gray-200">
                            Problems
                        </Link>
                        <Link href="/contestDetails" className="text-white hover:text-gray-200">
                            Contest
                        </Link>
                        <Link href="/discussion" className="text-white hover:text-gray-200">
                            Discussion
                        </Link>
                    </div>

                    {token ? (
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
                            <Link href={'/login'}>
                                SignIn
                            </Link>
                        </div>
                    )}
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <Link href="/" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Home
                    </Link>
                    <Link href="/problems" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Problems
                    </Link>
                    <Link href="/contestDetails" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Contest
                    </Link>
                    <Link href="/discussion" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Discussion
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
