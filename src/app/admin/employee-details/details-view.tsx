"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

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
    dob: string;
    emergencyContact: string;
    joiningDate: string;
    employmentType: string;
};

const ViewEmployeeDetails: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const employeeId = searchParams.get("id");
        if (!employeeId) {
            router.push("/admin");
            return;
        }

        const fetchEmployeeData = async () => {
            try {
                const docRef = doc(db, "employee", employeeId);
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
                        dob: data.dob,
                        emergencyContact: data.emergencyContact,
                        joiningDate: data.joiningDate,
                        employmentType: data.employmentType,
                    });
                } else {
                    router.push("/admin");
                }
            } catch (error) {
                console.error("Error fetching employee data: ", error);
                alert("Failed to fetch employee data");
            } finally {
                setLoading(false);
            }
        };

        fetchEmployeeData();
    }, [router, searchParams]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Employee ID copied to clipboard!");
        }).catch((error) => {
            console.error("Failed to copy ID: ", error);
            alert("Failed to copy ID. Please try again.");
        });
    };

    return (
        <div className="min-h-screen w-full bg-f0f0f2 text-gray-800 flex flex-col items-center py-8 px-4">
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-slate-900 mb-4">Employee Details</h1>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-slate-900"></div>
                    </div>
                ) : employee ? (
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/3 h-48 flex justify-center">
                            {employee.image ? (
                                <Image
                                    src={employee.image}
                                    alt="Employee"
                                    className="rounded-md shadow-lg"
                                    width={200}
                                    height={200}
                                />
                            ) : (
                                <div className="w-48 h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                                    No Image
                                </div>
                            )}
                        </div>

                        {/* Details Section */}
                        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Copy Employee ID Section */}
                            <div className="col-span-1 sm:col-span-2 flex items-center gap-2">
                                <div>
                                    <div className="flex flex-row gap-5">
                                        <p className="text-gray-600 text-sm ">Employee ID</p>
                                        <button
                                            onClick={() => copyToClipboard(employee.id)}
                                            className=" bg-gray-400 text-white text-sm rounded-md hover:bg-blue-700 transition"
                                        >
                                            Copy
                                        </button>
                                    </div>

                                    <p className="text-slate-900 font-semibold">{employee.id}</p>

                                </div>

                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Name</p>
                                <p className="text-slate-900 font-semibold">{employee.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Email</p>
                                <p className="text-slate-900 font-semibold">{employee.email}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Phone</p>
                                <p className="text-slate-900 font-semibold">{employee.phone}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Department</p>
                                <p className="text-slate-900 font-semibold">{employee.department}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Position</p>
                                <p className="text-slate-900 font-semibold">{employee.position}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Reporter</p>
                                <p className="text-slate-900 font-semibold">{employee.reporter}</p>
                            </div>
                            <div className="col-span-1 sm:col-span-2">
                                <p className="text-gray-600 text-sm">Address</p>
                                <p className="text-slate-900 font-semibold">{employee.address}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Blood Group</p>
                                <p className="text-slate-900 font-semibold">{employee.blood}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Date of Birth</p>
                                <p className="text-slate-900 font-semibold">{employee.dob}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Emergency Contact</p>
                                <p className="text-slate-900 font-semibold">{employee.emergencyContact}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Joining Date</p>
                                <p className="text-slate-900 font-semibold">{employee.joiningDate}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Employment Type</p>
                                <p className="text-slate-900 font-semibold">{employee.employmentType}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-600">Employee not found</div>
                )}

                {/* Back Button */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => router.push("/admin/view-employee")}
                        className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-AE8F65 transform transition-transform hover:scale-105"
                    >
                        Back to Employee List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewEmployeeDetails;
