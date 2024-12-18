"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

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
        setIsMounted(true);
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
        <div className="h-screen bg-background text-gray-800 flex flex-col items-center justify-center ">
            <div className="w-full   p-8 rounded-lg shadow-lg h-full flex flex-col">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">View Employees</h2>

                {loading ? (
                    <div className="flex items-center justify-center flex-grow">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div>
                ) : employees.length > 0 ? (
                    <div className="flex-grow overflow-y-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {employees.map((employee) => (
                                <div
                                    key={employee.id}
                                    className="bg-f0f0f2 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="relative flex justify-center mb-6">
                                        {employee.image ? (
                                            <img
                                                src={employee.image}
                                                alt="Employee"
                                                className="w-28 h-28 object-cover rounded-full border-4 border-slate-900 shadow-md"
                                            />
                                        ) : (
                                            <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 shadow-md">
                                                <span>No Image</span>
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 right-8 bg-slate-900 text-white text-xs px-2 py-1 rounded-md shadow-md">
                                            {employee.position}
                                        </div>
                                    </div>

                                    <div className="text-center space-y-2">
                                        <p className="text-xl font-bold text-slate-900">{employee.name}</p>
                                        <p className="text-sm text-gray-600">
                                            Phone: <span className="text-gray-800">{employee.phone}</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Department: <span className="text-gray-800">{employee.department}</span>
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            onClick={() => router.push(`/admin/employee-details?id=${employee.id}`)}
                                            className="w-full px-5 py-2 text-white bg-slate-900 hover:bg-AE8F65 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex-grow flex items-center justify-center text-gray-600">
                        No employees found
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewEmployees;
