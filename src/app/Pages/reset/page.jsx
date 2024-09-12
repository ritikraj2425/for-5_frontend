"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth,provider } from '@/app/lib/fireBaseConfig';

export default function Reset() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            router.push('/Pages/Login'); // Redirect to login after sending reset email
        } catch (error) {
            console.error('Error during password reset:', error);
        }
    };

    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleResetPassword}>
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
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}
