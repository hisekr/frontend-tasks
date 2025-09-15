"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function GuessNumber() {
  const [randomNumber, setRandomNumber] = useState();
  const [guessDisabled, setGuessDisabled] = useState(false);
  const [userGuess, setUserGuess] = useState(1);
  const [lowGuess, setLowGuess] = useState(false);
  const [highGuess, setHighGuess] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);

  useEffect(() => {
    setRandomNumber(Math.round(100 * Math.random()));
  }, []);

  const handleGuess = (e) => {
    e.preventDefault();

    if (userGuess < randomNumber) {
      setLowGuess(true);
      setHighGuess(false);
    } else if (userGuess > randomNumber) {
      setHighGuess(true);
      setLowGuess(false);
    } else {
      setCorrectGuess(true);
      setLowGuess(false);
      setHighGuess(false);
      setGuessDisabled(true);
    }
  };

  const handleRestart = () => {
    setRandomNumber(Math.round(100 * Math.random()));
    setCorrectGuess(false);
    setLowGuess(false);
    setHighGuess(false);
    setGuessDisabled(false);
    setUserGuess(1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar name="Guess the Number" codeLink="/react/guess-number" />
      <main className="flex flex-col items-center justify-center flex-grow gap-6 bg-gray-50 text-gray-900px-4">
        <form
          onSubmit={handleGuess}
          className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md"
        >
          <label htmlFor="input" className="text-lg font-medium">
            Guess a Number between 0 and 100
          </label>
          <input
            id="input"
            type="number"
            value={userGuess}
            min="0"
            max="100"
            placeholder="Guess-Number"
            onChange={(e) => setUserGuess(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-lg shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-4 w-full justify-center">
            <button
              type="reset"
              onClick={handleRestart}
              className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={guessDisabled}
              className={`flex-1 px-4 py-2 rounded-lg shadow text-white transition ${
                guessDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Check
            </button>
          </div>
        </form>

        <div className="text-center text-lg">
          {lowGuess && (
            <p className="text-red-500">
              Your guess is <b>Less</b> than the actual number
            </p>
          )}
          {highGuess && (
            <p className="text-red-500">
              Your guess is <b>Higher</b> than the actual number
            </p>
          )}
          {correctGuess && (
            <p className="text-green-500">
              Your guess is <b>Right!</b>
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
