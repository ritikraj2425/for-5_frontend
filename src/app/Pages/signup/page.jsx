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
            localStorage.setItem('email', email);
            router.push('/');
        } catch (error) {
            console.error('Error during sign-up:', error);
            toast.error('Error during sign-up.');
        }
    };

    const handleSignIn = () => {
        router.push('/Pages/Login')
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
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
                <button type="submit">Sign Up</button><br></br>
                <button onClick={handleGoogle}>Sign up with Google</button><br></br>
                <button onClick={handleSignIn}>SignIn</button>
            </form>
        </div>
    );
}
