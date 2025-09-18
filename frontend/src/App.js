import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Context Providers
import { LanguageProvider } from './Components/HealthManagement/H_contexts/H_LanguageContext';
import { ThemeProvider } from './Components/HealthManagement/H_contexts/H_ThemeContext';

// Layouts
import AdminLayout from './Components/HealthManagement/H_layouts/H_AdminLayout';
import DoctorLayout from './Components/HealthManagement/H_layouts/H_DoctorLayout';
import PlantPathologistLayout from './Components/HealthManagement/H_layouts/H_PlantPathologistLayout';

// ---------------- ADMIN COMPONENTS ----------------
import AddminPart from './Components/HealthManagement/AdminPart/HealthAddminPart';
import DoctorDetails from './Components/HealthManagement/AdminPart/DoctorDetails/DoctorDetails';
import SpecialistDetails from './Components/HealthManagement/AdminPart/H_SpecialistDetails/H_SpecialistDetails';
import MedicineCompany from './Components/HealthManagement/AdminPart/H_MedicineCompany/H_MedicineCompany';
import MediStore from './Components/HealthManagement/AdminPart/H_MediStore/H_MediStore';
import TreatmentsDetails from './Components/HealthManagement/AdminPart/TreatmentsDetails/TreatmentsDetails';
import TreatmentsPayments from './Components/HealthManagement/AdminPart/TreatmentsPayments/TreatmentsPayments';
import AdminProfile from './Components/HealthManagement/AdminPart/AdminProfile/AdminProfile';
import H_PlantPathologist from './Components/HealthManagement/AdminPart/H_PlantPathologist/H_PlantPathologist';

// ---------------- DOCTOR COMPONENTS ----------------
import DoctorDashboard from './Components/HealthManagement/DoctorPart/DoctorDashBoard';
import HealthAnimal from './Components/HealthManagement/DoctorPart/HealthAnimal';
import DoctorTreatment from './Components/HealthManagement/DoctorPart/DoctorTreatment';
import DoctorAdditional from './Components/HealthManagement/DoctorPart/DoctorAdditional';

// ---------------- PLANT PATHOLOGIST COMPONENTS ----------------
import PlantPathologistDashboard from './Components/HealthManagement/PlantPathologistPart/PlantPathologistHome';
import FertiliserStock from './Components/HealthManagement/PlantPathologistPart/H_FertiliserStock';
import FertiliserDetails from './Components/HealthManagement/PlantPathologistPart/H_FertiliserDetails';
import H_FertiliserAdd from './Components/HealthManagement/PlantPathologistPart/H_FertiliserAdd';
import PlantPathologistAdditional from './Components/HealthManagement/PlantPathologistPart/PathologisticAdditional';
import PlantPathologistProfile from './Components/HealthManagement/PlantPathologistPart/PathologisticProfile';
import PlantPathologistHome from "./Components/HealthManagement/PlantPathologistPart/PlantPathologistHome";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            {/* ---------------- DOCTOR ROUTES ---------------- */}
            <Route
              path="/doctor/*"
              element={
                <DoctorLayout>
                  <Routes>
                    <Route path="home" element={<DoctorDashboard />} />
                    <Route path="animals" element={<HealthAnimal />} />
                    <Route path="medicine-stock" element={<MediStore />} />
                    <Route path="pharmacy" element={<MedicineCompany />} />
                    <Route path="vet-specialist" element={<SpecialistDetails />} />
                    <Route path="treatment-details" element={<DoctorTreatment />} />
                    <Route path="help" element={<DoctorAdditional />} />
                    <Route path="*" element={<Navigate to="home" replace />} />
                  </Routes>
                </DoctorLayout>
              }
            />

            {/* ---------------- PLANT PATHOLOGIST ROUTES ---------------- */}
           // Plant Pathologist routes
<Route
  path="/plant-pathologist/*"
  element={
    <PlantPathologistLayout>
      <Routes>
        <Route path="home" element={<PlantPathologistHome />} />
        <Route path="fertiliser-stock" element={<FertiliserStock />} />
        <Route path="fertiliser-details" element={<FertiliserDetails />} />
        <Route path="add-fertiliser" element={<H_FertiliserAdd />} />
        <Route path="help" element={<PlantPathologistAdditional />} />
        <Route path="profile" element={<PlantPathologistProfile />} />
        <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
    </PlantPathologistLayout>
  }

            />

            {/* ---------------- ADMIN ROUTES ---------------- */}
            <Route
              path="/*"
              element={
                <AdminLayout>
                  <Routes>
                    <Route path="aaa" element={<AddminPart />} />
                    <Route path="doctor-details" element={<DoctorDetails />} />
                    <Route path="specialist-details" element={<SpecialistDetails />} />
                    <Route path="medicine-company" element={<MedicineCompany />} />
                    <Route path="medistore" element={<MediStore />} />
                    <Route path="treatments-details" element={<TreatmentsDetails />} />
                    <Route path="treatments-payments" element={<TreatmentsPayments />} />
                    <Route path="profile" element={<AdminProfile />} />
                    <Route path="plant-pathologist-admin" element={<H_PlantPathologist />} />
                    <Route path="*" element={<Navigate to="aaa" replace />} />
                  </Routes>
                </AdminLayout>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
