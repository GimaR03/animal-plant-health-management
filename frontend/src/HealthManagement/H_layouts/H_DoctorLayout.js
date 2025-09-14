import React from "react";
import { Outlet } from "react-router-dom";
import DoctorNavBar from "../DoctorPart/DoctorNavBar";
import DoctorTopNavBar from "../DoctorPart/DoctorTopNavBar";

const DoctorLayout = () => {
  return (
    <div className="flex min-h-screen">
      <DoctorNavBar />
      <div className="flex-1 ml-64">
        <DoctorTopNavBar />
        <main className="p-6 mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
