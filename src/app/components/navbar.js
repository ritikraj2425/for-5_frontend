'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/fireBaseConfig';
import { useRouter } from 'next/navigation';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isToggleProfile, setIsToggleProfile] = useState(false);
    const [userData,setUserData] = useState();

    const toggleProfile = () => {
        setIsToggleProfile(!isToggleProfile);
    }

    const router =useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            sessionStorage.removeItem('token');
            router.push('/Pages/Login');
            console.log("signout happening")
        } catch (error) {
            console.error('Error during sign-out:', error);
        }
    };


    useEffect( ()=>{
        const fetchUserData =async()=>{

            let uid = JSON.parse(sessionStorage.getItem("uid"));
            if(!uid){
                console.log("no uid found");
            }
    
            const response = await fetch(`http://localhost:5000/get/userDetails?uid=${uid}`);
            const data = await response.json();
            console.log(data);
            setUserData(data)
        }
        fetchUserData();

    },[])

    // console.log(userData,"akdfnadjnf")



    return (
        <nav className="bg-gradient-to-r from-[#1B1B1B] to-amber-600 p-4">
            <div className="container mx-auto flex justify-between items-center">

                <Link href="/" className="text-white font-bold text-xl">
                    Logo
                </Link>


                <div className="flex items-center space-x-6">

                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-white hover:text-gray-200">
                            Home
                        </Link>
                        <Link href="/Pages/homepage" className="text-white hover:text-gray-200">
                            Questions
                        </Link>
                        <Link href="/Pages/contestDetails" className="text-white hover:text-gray-200">
                            Contest
                        </Link>
                        <Link href="/Pages/discussion" className="text-white hover:text-gray-200">
                            Discussion
                        </Link>
                    </div>


                    <div className="hidden md:block">
                        <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden" >
                            <Image
                                onClick={toggleProfile}
                                src="/profileimage.png"
                                alt="User"
                                width={33}
                                height={33}
                            />
                        </div>
                    </div>
                    {isToggleProfile &&
                    <div className="absolute md:mt-80 mt-60 mr-5 left-auto md:right-4 right-0 bg-[#D9D9D9] rounded-md shadow-lg p-4 z-10 flex flex-col items-center">

                    <Image
                        src="/profileimage.png"
                        alt="User"
                        width={47}
                        height={47}
                    />
                

                    <h1 className='text-center mt-2 font-bold text-2xl'>username</h1>
                    <Link href='/Pages/profile'>
                    <button className="mt-2 bg-white text-blue-500 font-bold px-16 py-2 rounded">
                        View Profile
                    </button>
                    </Link>
                

                    <div className="flex justify-between w-full mt-4 px-2">
                        <h1 className="font-bold">Streak</h1>
                        <h1 className="font-bold">n days</h1>
                    </div>
                

                    <div className="flex justify-between w-full mt-2 px-2">
                        <h1 className="font-bold">Solved Today</h1>
                        <h1 className="font-bold">n</h1>
                    </div>
                

                    <button onClick={handleSignOut} className="mt-4 bg-white text-red-500 px-20 font-bold py-2 rounded">
                        Signout
                    </button>
                </div>
                
                }


                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>






            {isOpen && (
                <div className="md:hidden">
                    <Link href="/" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Home
                    </Link>
                    <Link href="/Pages/contestDetails" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Questions
                    </Link>
                    <Link href="/Pages/contestDetails" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Contest
                    </Link>
                    <Link href="/Pages/discussion" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Discussion
                    </Link>
                    <div className="py-2 px-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                            <Image
                                src="/profileimage.png"
                                alt="User"
                                width={34}
                                height={34}
                                onClick={toggleProfile}
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>

    );
};

export default Navbar;