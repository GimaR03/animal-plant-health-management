import React from "react";
import NavBar from "../NavBar/NavBar";
import H_TopNavbar from "../H_TopNavbar/H_TopNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 fixed h-full">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Navbar */}
        <div className="fixed top-0 left-64 right-0 z-10">
          <H_TopNavbar />
        </div>

        {/* Page Content */}
        <main className="p-6 mt-16">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
