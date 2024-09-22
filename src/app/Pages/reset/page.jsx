"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Reset() {
    

    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleResetPassword}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"

                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}
