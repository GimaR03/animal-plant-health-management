import React from "react";

function HealthAnimal() {
  const animals = ["Cow", "Hen", "Pig", "Goat", "Buffalo"];

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Animals
      </h1>
      <p className="mb-4 text-green-700 text-lg">
        Here doctor can check and manage animal health records.
      </p>

      <div className="flex flex-wrap gap-4">
        {animals.map((animal) => (
          <button
            key={animal}
            className="bg-green-600 hover:bg-green-500 text-green-100 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200"
          >
            {animal}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HealthAnimal;