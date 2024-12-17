"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation' in Next.js 13+
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase/firebase';
import Image from 'next/image';

const AddEmployee = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
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
    const [employeeData, setEmployeeData] = useState({
        name: '',
        email: '',
        dob: '',
        bloodGroup: '',
        address: '',
        phone: '',
        department: '',
        position: '',
        reporter: '',
        image: null as File | null, // To hold the employee's image
    });

    const [loading, setLoading] = useState(false); // Track loading state

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setEmployeeData(prevState => ({
                ...prevState,
                image: file,
            }));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEmployeeData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate inputs before submitting
        if (!employeeData.name || !employeeData.email || !employeeData.phone) {
            alert('Please fill in all the required fields!');
            return;
        }
        const employeeCollection = collection(db, "employee");
        const snapshot = await getDocs(employeeCollection);
        const serialNumber = snapshot.size + 1; // Increment by 1 for the new entry

        // Set the document ID as name + dob + email
        const documentId = `Hum${employeeData.department}${employeeData.name}${employeeData.dob}${serialNumber}`;

        // Set loading state to true when submitting
        setLoading(true);

        try {
            // Add employee data to Firestore
            await setDoc(doc(db, "employee", documentId), {
                name: employeeData.name,
                email: employeeData.email,
                dob: employeeData.dob,
                bloodGroup: employeeData.bloodGroup,
                address: employeeData.address,
                phone: employeeData.phone,
                department: employeeData.department,
                position: employeeData.position,
                reporter: employeeData.reporter,
                image: "" // Handle image data
            });

            // Show success alert and redirect
            alert('Employee added successfully!');
            router.push('/admin/dashboard'); // Redirect to the dashboard or another page
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Failed to add employee. Please try again!');
        } finally {
            // Set loading state to false after submission is complete
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-8 space-y-8">
            {/* Add Employee Form */}
            <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Add New Employee</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Image Picker */}
                    <div className="flex justify-center items-center mb-6">
                        <label className="w-full text-center text-gray-500">
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <div className="cursor-pointer w-full p-4 border-2 border-gray-300 rounded-md hover:border-blue-500">
                                {employeeData.image ? (
                                    <Image
                                        src={URL.createObjectURL(employeeData.image)}
                                        alt="Employee"
                                        className="w-full h-48 object-cover rounded-md"
                                        height={1000}
                                        width={1000}
                                    />
                                ) : (
                                    <p>Click to Upload Image</p>
                                )}
                            </div>
                        </label>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={employeeData.name}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={employeeData.email}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={employeeData.dob}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
                            <input
                                type="text"
                                id="bloodGroup"
                                name="bloodGroup"
                                value={employeeData.bloodGroup}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={employeeData.address}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                                rows={4}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={employeeData.phone}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Department Dropdown */}
                        <div>
                            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                            <select
                                id="department"
                                name="department"
                                value={employeeData.department}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">Select Department</option>
                                <option value="Development">Development</option>
                                <option value="Digital">Digital</option>
                                <option value="Operations">Operations</option>

                                {/* Add more departments as needed */}
                            </select>
                        </div>

                        {/* Position Dropdown */}
                        <div>
                            <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                            <select
                                id="position"
                                name="position"
                                value={employeeData.position}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">Select Position</option>
                                <option value="Manager">Manager</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Analyst">Analyst</option>
                                <option value="CEO">CEO</option>
                                <option value="MD">MD</option>
                                {/* Add more positions as needed */}
                            </select>
                        </div>

                        {/* Reporter Dropdown */}
                        <div>
                            <label htmlFor="reporter" className="block text-sm font-medium text-gray-700">Reporter</label>
                            <select
                                id="reporter"
                                name="reporter"
                                value={employeeData.reporter}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">Select Reporter</option>
                                <option value="Manager">Manager</option>
                                <option value="CEO">CEO</option>
                                <option value="MD">MD</option>
                                {/* Add more reporters as needed */}
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-6 px-8 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
                            disabled={loading} // Disable the button while loading
                        >
                            {loading ? (
                                <span>Loading...</span> // Show loader text or an animation here
                            ) : (
                                'Add Employee'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;
