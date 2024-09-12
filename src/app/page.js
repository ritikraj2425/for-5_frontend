// src/app/page.jsx
"use client";
import { signOut } from 'firebase/auth';
import { auth } from './lib/fireBaseConfig';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('email');
            router.push('/Pages/Login'); // Redirect to login page after sign-out
        } catch (error) {
            console.error('Error during sign-out:', error);
        }
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}
