"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth,provider } from '@/app/lib/fireBaseConfig';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            router.push('/'); // Redirect to home if already logged in
        }
    }, [router]);

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            localStorage.setItem('email', result.user.email);
            router.push('/'); // Redirect to home after Google sign-in
        } catch (error) {
            console.error('Error during Google sign-in:', error);
            toast.error('Error during Google sign-in.');
        }
    };

    const handleEmailSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('email', email);
            router.push('/'); // Redirect to home after email sign-in
        } catch (error) {
            console.error('Error during email sign-in:', error);
            toast.error('Error during email sign-in.');
        }
    };

    const handleResetPassword = () => {
        router.push('/Pages/reset');
    };

    const handleNavigateToSignUp = () => {
        router.push('/Pages/signup');
    };

    return (
        <div>
            <h1>Login to Your Account</h1>
            <form onSubmit={handleEmailSignIn}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <button onClick={handleResetPassword}>Forgot Password?</button>
            <button onClick={handleNavigateToSignUp}>Sign Up</button>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
}
