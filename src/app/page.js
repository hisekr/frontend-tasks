import React from "react";
import Link from "next/link";

const routes = [
  { path: "/react/counter", label: "Counter" },
  { path: "/react/guess-number", label: "Guess the number" },
  { path: "/react/infinite-scroll", label: "Infinte Scroll" },
];

const Homepage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 relative gap-4">
      <div className="absolute top-4 left-4 text-gray-700">
        <span className="italic font-cursive text-lg">Created by </span>
        <span className="font-semibold">Abhishek Roshan</span>
      </div>
      <h1 className="text-2xl font-bold mb-4 pt-40">Mini Projects</h1>
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
  );
};

export default Homepage;
