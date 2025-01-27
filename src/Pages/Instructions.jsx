import React from "react";
import "../index.css";
import logo1 from "../assets/Instructions/logo1.svg";
import logo2 from "../assets/Instructions/logo2.svg";
import logo3 from "../assets/Instructions/logo3.svg";
import { Card, Button } from "pixel-retroui";

const InstructionCard = ({ logo, title, description }) => {
  return (
    <Card
      bg="#EC841C"
      textColor="black"
      borderColor="#4A1237"
      shadowColor="#EC841C"
      className="relative instruction font-pixel flex flex-col items-center text-center p-4 rounded-md w-full sm:w-64 md:w-72 lg:w-80"
    >
      <img
        src={logo}
        alt={`${title} Logo`}
        className="instruction-logo mb-4 w-16 sm:w-20 md:w-24"
      />
      <h2 className="text-base sm:text-lg font-bold mb-2 text-[#FFEAD7]">
        {title}
      </h2>
      <p className="text-xs sm:text-sm font-thin text-[#FFD5AB]">
        {description}
      </p>
    </Card>
  );
};

const Instructions = () => {
  const instructionsData = [
    {
      logo: logo1,
      title: "INSTR #1",
      description:
        "Participants are allowed only one login session. Multiple logins are not permitted.",
    },
    {
      logo: logo2,
      title: "INSTR #2",
      description:
        "The contest will run from 6 PM to 7:30 PM, lasting 1.5 hours.",
    },
    {
      logo: logo3,
      title: "INSTR #3",
      description:
        "All questions are available in the Question Hub. Completion percentages are displayed.",
    },
  ];

  return (
    <div className="instructions-container font-pixel flex flex-col items-center justify-center text-[#FFF546] bg-instructions-bg bg-cover bg-center min-h-screen">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-8 pt-4 pb-5">
        <h1 className="text-xl font-bold text-[#FFF546] header-text drop-shadow-xl">
          CLASH
        </h1>
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
          <button className="text-xl text-[#FFF546] font-bold hover:underline header-text drop-shadow-xl">
            Leaderboard
          </button>
          <button className="text-xl text-[#FFF546] font-bold hover:underline header-text drop-shadow-xl">
            Result
          </button>
          <button className="text-xl text-[#FFF546] font-bold hover:underline header-text drop-shadow-xl">
            Logout
          </button>
        </nav>
      </header>

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 relative inline-block text-center header-text"
        style={{
          textShadow: "4px 4px 6px #4A1237", 
          WebkitTextStroke: "2px #4A1237",
        }}
      >
        <span className="text-[#FFF546] relative z-10">INSTRUCTIONS</span>
      </h1>

      {/* Instruction Cards */}
      <div className="instructions grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4 sm:px-8">
        {instructionsData.map((instruction, index) => (
          <InstructionCard
            key={index}
            logo={instruction.logo}
            title={instruction.title}
            description={instruction.description}
          />
        ))}
      </div>

      {/* Next Button */}
      <Button
        bg="#9E2E08"
        textColor="#FFF546"
        borderColor="#1E3445"
        shadowColor="#1E3445"
        className="next-button text-xl font-bold mt-8 px-6 py-2 md:px-10 md:py-3 bg-[#DE5027] rounded-md border-t-2 border-l-2 border-r-4 border-b-4 drop-shadow-xl"
      >
        NEXT
      </Button>
    </div>
  );
};

export default Instructions;
