"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Import from 'next/navigation' in Next.js 13+
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import AdminLoader from '../components/loader';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false); // Track mounting state
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true); // Ensure the component is only mounted on the client side
    }, []);

    useEffect(() => {
        if (isMounted) {
            // Check if the user is authenticated
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (!user) {
                    router.push('/admin');  // Redirect to login page if not logged in
                } else {
                    setLoading(false);  // User is logged in, show dashboard
                }
            });

            return unsubscribe;
        }
    }, [isMounted, router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);  // Sign out user from Firebase
            router.push('/admin');  // Redirect to login page after logout
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const handleAddEmployee = () => {
        try {
            router.push('/admin/add-employee')
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const handleViewEmployee = () => {
        try {
            router.push('/admin/view-employee')
        } catch (error) {

        }
    };

    if (loading) {
        return (
            <AdminLoader />
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center  p-8 space-y-8">
            {/* Top Bar with Dashboard and Logout */}
            <div className="w-full bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="px-6 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
                >
                    Logout
                </button>
            </div>

            {/* Main Content Area */}
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6 h-full items-center justify-center pt-80">
                {/* Add Employee Card */}
                <div
                    onClick={handleAddEmployee}
                    className="flex items-center justify-center p-12 bg-green-500 text-white rounded-lg shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    <span className="text-2xl font-medium">Add Employee</span>
                </div>

                {/* View Employee Card */}
                <div
                    onClick={handleViewEmployee}
                    className="flex items-center justify-center p-12 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <span className="text-2xl font-medium">View Employee</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
