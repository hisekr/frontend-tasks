import React from "react";
import Link from "next/link";

const routes = [
  { path: "/react/counter", label: "Counter" },
  { path: "/react/guess-number", label: "Guess the number" },
];

const Homepage = () => {
  return (
    <>
      <main className="flex flex-col items-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Mini Projects</h1>
        <div className="grid grid-cols-2 gap-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Homepage;
