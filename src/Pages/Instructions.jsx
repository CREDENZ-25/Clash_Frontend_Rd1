import React from "react";
import "../index.css";
import logo1 from "../assets/Instructions/logo1.svg";
import logo2 from "../assets/Instructions/logo2.svg";
import logo3 from "../assets/Instructions/logo3.svg";

const InstructionCard = ({ logo, title, description }) => {
  return (
    <div className="relative instruction font-pixel flex flex-col items-center text-center bg-[#EC841C] p-4 rounded-lg w-64 h-86 border-4 border-[#4A1237]">
      <img
        src={logo}
        alt={`${title} Logo`}
        className="instruction-logo w-16 h-16 mb-4"
      />
      <h2 className="text-lg font-normal mb-2 text-[#FFEAD7]">{title}</h2>
      <p className="text-sm font-thin text-[#FFEAD7]">{description}</p>
    </div>
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
    <div className="instructions-container font-pixel flex flex-col items-center justify-center text-[#FFF546] bg-instructions-bg bg-cover bg-center h-screen">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-8 pt-0 pb-10">
        <h1 className="text-sm font-bold text-[#FFF546]">CLASH</h1>
        <nav className="flex space-x-6">
          <button className="text-[#FFF546] font-bold text-sm hover:underline">
            Leaderboard
          </button>
          <button className="text-[#FFF546] font-bold text-sm hover:underline">
            Result
          </button>
          <button className="text-[#FFF546] font-bold text-sm hover:underline">
            Logout
          </button>
        </nav>
      </header>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 relative inline-block">
        <span className="text-[#FFF546] relative z-10">INSTRUCTIONS</span>
        <span
          className="absolute top-0 left-0 w-full h-full text-[#4A1237] -z-10"
          style={{
            textShadow: `
              2px 2px 0 rgba(30, 52, 69, 1),
              -2px 2px 0 rgba(30, 52, 69, 1),
              2px -2px 0 rgba(30, 52, 69, 1),
              -2px -2px 0 rgba(30, 52, 69, 1),
              2px 0 0 rgba(30, 52, 69, 1),
              -2px 0 0 rgba(30, 52, 69, 1),
              0 2px 0 rgba(30, 52, 69, 1),
              0 -2px 0 rgba(30, 52, 69, 1)
            `,
          }}
        >
          INSTRUCTIONS
        </span>
      </h1>

      {/* Instruction Cards */}
      <div className="instructions grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-20 p-4">
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
      <button className="next-button mt-8 px-10 py-2 bg-[#DE5027] text-[#FFF546] rounded-lg font-bold border-[#1E3445] border-t-2 border-l-2 border-r-4 border-b-4">
        NEXT
      </button>
    </div>
  );
};

export default Instructions;
