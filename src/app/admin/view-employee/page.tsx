"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

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

const ViewEmployees: React.FC = () => {
    const router = useRouter();
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Ensure the component is only mounted on the client side
    }, []);

    useEffect(() => {
        if (isMounted) {
            const fetchEmployees = async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, "employee"));
                    const fetchedEmployees: Employee[] = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        fetchedEmployees.push({
                            id: doc.id,
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
                    });
                    setEmployees(fetchedEmployees);
                } catch (error) {
                    console.error("Error fetching employees data: ", error);
                    alert("Failed to fetch employee data");
                } finally {
                    setLoading(false);
                }
            };

            fetchEmployees();
        }
    }, [isMounted]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-8 space-y-8">
            <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">View Employees</h2>

                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div>
                ) : employees.length > 0 ? (
                    <div className="space-y-6">
                        {/* Display all employees */}
                        {employees.map((employee) => (
                            <div key={employee.id} className="border-b border-gray-300 pb-6">
                                <div className="flex justify-between items-center">
                                    {/* Image Preview */}


                                    {/* Employee Details */}
                                    <div className="flex-1">
                                        <p className="font-semibold text-lg text-gray-900">{employee.name}</p>
                                        <p className="text-sm text-gray-600">Email: {employee.email}</p>
                                        <p className="text-sm text-gray-600">Phone: {employee.phone}</p>
                                        <p className="text-sm text-gray-600">Department: {employee.department}</p>
                                        <p className="text-sm text-gray-600">Position: {employee.position}</p>
                                    </div>

                                    {/* View Button */}
                                    <div className="ml-4">
                                        <button
                                            onClick={() => router.push(`/admin/employee-details?id=${employee.id}`)}
                                            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600">No employees found</div>
                )}
            </div>
        </div>
    );
};

export default ViewEmployees;
