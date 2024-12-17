"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useSearchParams } from "next/navigation";

// Define the Employee type
type Employee = {
    id: string;
    name: string;
    email: string;
    phone: string;
    department: string;
    address: string;
    position: string;
    reporter: string;
    blood: string;
    image: string;
};

const ViewEmployeeDetails: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Ensure the component is only mounted on the client side
    }, []);

    useEffect(() => {
        if (isMounted) {
            const employeeId = searchParams.get("id");

            if (!employeeId) {
                router.push("/admin"); // Redirect if no ID is provided
                return;
            }

            const fetchEmployeeData = async () => {
                try {
                    const docRef = doc(db, "employee", employeeId); // Fetching employee by ID
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setEmployee({
                            id: docSnap.id,
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            department: data.department,
                            position: data.position,
                            reporter: data.reporter,
                            address: data.address,
                            blood: data.bloodGroup,
                            image: data.image,
                        });
                    } else {
                        alert("Employee not found");
                        router.push("/admin"); // Redirect to dashboard if employee doesn't exist
                    }
                } catch (error) {
                    console.error("Error fetching employee data: ", error);
                    alert("Failed to fetch employee data");
                } finally {
                    setLoading(false);
                }
            };

            fetchEmployeeData();
        }
    }, [isMounted, router, searchParams]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-8 space-y-8">
            <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Employee Details</h2>

                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div>
                ) : employee ? (
                    <div className="space-y-6">
                        {/* Image Preview */}
                        <div className="flex justify-center items-center mb-6">
                            <div className="w-full p-4 border-2 border-gray-300 rounded-md">
                                {employee.image ? (
                                    <img
                                        src={employee.image}
                                        alt="Employee"
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                        </div>

                        {/* Employee Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={employee.name}
                                    readOnly
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value={employee.email}
                                    readOnly
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    value={employee.phone}
                                    readOnly
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Department</label>
                                <input
                                    type="text"
                                    value={employee.department}
                                    readOnly
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Position</label>
                                <input
                                    type="text"
                                    value={employee.position}
                                    readOnly
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Reporter</label>
                                <input
                                    type="text"
                                    value={employee.reporter}
                                    readOnly
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <textarea
                                    value={employee.address}
                                    readOnly
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                                    rows={4}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Blood Group</label>
                                <input
                                    type="text"
                                    value={employee.blood}
                                    readOnly
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>
                        </div>

                        {/* Back Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => router.push("/admin")}
                                className="px-8 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
                            >
                                Back to Employees List
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-600">Employee not found</div>
                )}
            </div>
        </div>
    );
};

export default ViewEmployeeDetails;
