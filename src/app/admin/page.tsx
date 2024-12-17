"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation' in Next.js 13+
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import Image from 'next/image';

const AdminPanel = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // Track mounting state

    // Move useRouter here directly
    const router = useRouter();


    useEffect(() => {
        setIsMounted(true); // Ensure this runs only after the component has mounted
    }, []);

    useEffect(() => {
        if (isMounted) {
            // Check for user authentication status
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                    router.push('admin/dashboard');  // Redirect to dashboard if logged in
                }
            });

            return unsubscribe;
        }
    }, [auth, router, isMounted]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Sign in with Firebase Authentication
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Logged in successfully');
            // Redirect to the dashboard after successful login
            router.push('admin/dashboard');
        } catch (error: any) {
            setError(error.message);  // Set error message
        } finally {
            setLoading(false);
        }
    };

    if (!isMounted) {
        return null;  // Ensure the component is not rendered until mounted on the client
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex justify-center mb-6">
                    <Image src="/logo.png" alt="Logo" height={100} width={100} />
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className={`w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${loading ? 'opacity-50' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminPanel;
