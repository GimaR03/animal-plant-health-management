import React from "react";
import { Link } from "react-router-dom";

function DoctorNavBar() {
  return (
    <div className="w-[220px] bg-green-900 text-white min-h-screen p-4 font-sans">
      <h2 className="mb-8 text-xl font-bold text-green-100">
        Doctor Panel
      </h2>
      <nav>
        <ul className="list-none p-0">
          <li className="mb-4">
            <Link to="/doctor/home" className="text-green-200 text-base font-medium hover:text-green-50 no-underline">Home</Link>
          </li>
          <li className="mb-4">
            <Link to="/doctor/animals" className="text-green-200 text-base font-medium hover:text-green-50 no-underline">Animals</Link>
          </li>
          <li className="mb-4">
            <Link to="/doctor/medicine-stock" className="text-green-200 text-base font-medium hover:text-green-50 no-underline">Medicine Stock</Link>
          </li>
          <li className="mb-4">
            <Link to="/doctor/pharmacy" className="text-green-200 text-base font-medium hover:text-green-50 no-underline">Pharmacy</Link>
          </li>
          <li className="mb-4">
            <Link to="/doctor/vet-specialist" className="text-green-200 text-base font-medium hover:text-green-50 no-underline">Vet Specialist</Link>
          </li>
          <li className="mb-4">
            <Link to="/doctor/treatment-details" className="text-green-200 text-base font-medium hover:text-green-50 no-underline">Treatment Details</Link>
          </li>
          <li className="mb-4">
            <Link to="/doctor/help" className="text-green-200 text-base font-medium hover:text-green-50 no-underline">Additional Help</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DoctorNavBar;