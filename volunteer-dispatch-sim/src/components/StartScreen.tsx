import React from "react";

interface StartScreenProps {
    onStart: () => void; // function to start the game
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-[#1c1e23] text-gray-300 px-10 py-12 sm:px-10 sm:py-7 rounded-2xl shadow-xl w-11/12 max-w-lg text-center">

                <h1 className="text-3xl font-bold text-white mb-8">
                    Volunteer Dispatch Simulator
                </h1>

                <p className="text-lg leading-relaxed mb-8">
                    Welcome! Your goal is to respond to opportunities in different
                    countries before time runs out. Countries will turn red when
                    there’s a new opportunity. Click them to take action and earn points.
                </p>

                <p className="text-lg leading-relaxed mb-10">
                    Help volunteers achieve the United Nations' Sustainable Development Goals
                    11 (Sustainable Cities and Communities) and 16 (Peace, Justice,
                    and Strong Institutions) and make an impact!
                </p>

                <button
                    onClick={onStart}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-lg shadow-lg transition"
                >
                    Start Game
                </button>

            </div>
        </div>
    );
};

export default StartScreen;