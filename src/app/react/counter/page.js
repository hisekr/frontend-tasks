'use client'
import React, { useRef, useState } from "react";
import Navbar from "@/components/Navbar";

const Page = () => {
  const [value, setValue] = useState(0);
  const step = useRef(1);

  const setStepValue = (val) => {
    step.current = val;
  };

  const increment = () => setValue((prev) => prev + step.current);
  const decrement = () => setValue((prev) => prev - step.current);
  const reset = () => setValue(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar name="Counter" codeLink="/react/counter" />
      <main className="flex flex-col items-center justify-center flex-grow gap-6 bg-gray-50 text-gray-900">
        <h2 className="text-4xl font-bold">{value}</h2>

        <section className="flex gap-4">
          <button
            onClick={decrement}
            aria-label="Decrement"
            className="px-4 py-2 text-xl font-bold bg-red-400 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            -
          </button>
          <button
            onClick={increment}
            aria-label="Increment"
            className="px-4 py-2 text-xl font-bold bg-green-400 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            +
          </button>
        </section>

        <section className="flex flex-col items-center gap-2">
          <label htmlFor="step" className="text-sm font-medium">
            Increment/Decrement by
          </label>
          <input
            type="number"
            id="step"
            defaultValue={step.current}
            onChange={(e) => setStepValue(e.target.valueAsNumber)}
            title="Step value"
            className="w-24 px-3 py-2 border rounded-lg shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </section>

        <section>
          <button
            onClick={reset}
            className="px-5 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition"
          >
            Reset
          </button>
        </section>
      </main>
    </div>
  );
};

export default Page;
