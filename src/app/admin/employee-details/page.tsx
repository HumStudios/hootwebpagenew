import React, { Suspense } from "react";
import ViewEmployeeDetails from "./details-view";// Adjust the path to your actual component location

const EmployeeDetailsPage: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-background text-gray-800 flex flex-col items-center justify-center p-8 space-y-8">
            <Suspense fallback={<div>Loading...</div>}>
                <ViewEmployeeDetails />
            </Suspense>
        </div>
    );
};

export default EmployeeDetailsPage;
