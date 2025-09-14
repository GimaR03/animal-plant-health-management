import React from "react";
import PlantPathologistNavBar from "../PlantPathologistPart/PlantPathologistNavBar";
import PlantPathologistTopNavBar from "../PlantPathologistPart/PlantPathologistTopNavBar";

const PlantPathologistLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <PlantPathologistNavBar />
      <div className="flex-1 ml-64">
        <PlantPathologistTopNavBar />
        <main className="p-6 mt-16">{children}</main>
      </div>
    </div>
  );
};

export default PlantPathologistLayout;
