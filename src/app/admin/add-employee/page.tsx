"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase/firebase';
import Image from 'next/image';
import { uploadImageToS3 } from '@/s3/s3';
import { companyPositions } from '@/data/strings';

const AddEmployee = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (!user) {
                    router.push('/admin');
                } else {
                    setLoading(false);
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
        emergencyContact: '',
        joiningDate: '',
        employmentType: '',
        image: null as File | null,
    });

    const [loading, setLoading] = useState(false);

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

        if (!employeeData.name || !employeeData.email || !employeeData.phone) {
            alert('Please fill in all the required fields!');
            return;
        }
        const employeeCollection = collection(db, "employee");
        const snapshot = await getDocs(employeeCollection);
        const serialNumber = snapshot.size + 1;

        const documentId = `Hum${employeeData.department}${employeeData.name.replace(/\s+/g, '')}${employeeData.dob}${serialNumber}`;

        setLoading(true);

        try {
            let imageUrl = '';
            if (employeeData.image) {
                imageUrl = await uploadImageToS3(employeeData.image);
            }
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
                emergencyContact: employeeData.emergencyContact,
                joiningDate: employeeData.joiningDate,
                employmentType: employeeData.employmentType,
                image: imageUrl,
            });

            alert('Employee added successfully!');
            router.push('/admin/dashboard');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Failed to add employee. Please try again!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-gray-900 flex flex-col items-center justify-start p-8 space-y-8 overflow-auto">
            <div className="w-full  bg-white p-8 rounded-lg shadow-xl border border-gray-300">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Add New Employee</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Image Picker */}
                    <div className="flex  justify-center items-center mb-6">
                        <label className=" text-center text-gray-600">
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <div className="cursor-pointer w-[20rem]  h-[20rem] p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500">
                                {employeeData.image ? (
                                    <Image
                                        src={URL.createObjectURL(employeeData.image)}
                                        alt="Employee"
                                        className="w-[18rem] h-[18rem] object-cover rounded-md"
                                        height={200}
                                        width={1000}
                                    />
                                ) : (
                                    <p>Click to Upload Image</p>
                                )}
                            </div>
                        </label>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={employeeData.name}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
                            <select
                                id="bloodGroup"
                                name="bloodGroup"
                                value={employeeData.bloodGroup}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={employeeData.address}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Emergency Contact */}
                        <div>
                            <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">Emergency Contact</label>
                            <input
                                type="text"
                                id="emergencyContact"
                                name="emergencyContact"
                                value={employeeData.emergencyContact}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Joining Date */}
                        <div>
                            <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-700">Joining Date</label>
                            <input
                                type="date"
                                id="joiningDate"
                                name="joiningDate"
                                value={employeeData.joiningDate}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Employment Type */}
                        <div>
                            <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
                            <select
                                id="employmentType"
                                name="employmentType"
                                value={employeeData.employmentType}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Employment Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Contract">Intern</option>
                            </select>
                        </div>

                        {/* Department Dropdown */}
                        <div>
                            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                            <select
                                id="department"
                                name="department"
                                value={employeeData.department}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Department</option>
                                <option value="Development">Development</option>
                                <option value="Digital">Digital</option>
                                <option value="Operations">Operations</option>
                                <option value="Studios">Studios</option>
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
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Position</option>
                                {companyPositions.map((role, index) => (
                                    <option key={index} value={role}>
                                        {role}
                                    </option>
                                ))}
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
                                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Reporter</option>
                                {companyPositions.map((role, index) => (
                                    <option key={index} value={role}>
                                        {role}
                                    </option>
                                ))}

                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-6 px-80 py-3 text-white bg-black rounded-md hover:bg-textbronze focus:ring-2  hover:scale-125 transition-all"
                            disabled={loading}
                        >
                            {loading ? (
                                <span>Loading...</span>
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
