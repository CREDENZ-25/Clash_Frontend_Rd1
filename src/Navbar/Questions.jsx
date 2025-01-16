'use client';

const Questions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-800 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">CLASH</h1>
          <nav className="flex gap-4">
            <button className="px-4 py-2 text-sm rounded-md bg-orange-500 hover:bg-orange-600 transition-colors">
              LEADERBOARD
            </button>
            <button className="px-4 py-2 text-sm rounded-md bg-orange-500 hover:bg-orange-600 transition-colors">
              RESULT
            </button>
            <button className="px-4 py-2 text-sm rounded-md bg-orange-500 hover:bg-orange-600 transition-colors">
              LOGIN
            </button>
          </nav>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Main content area */}
          <div className="col-span-2 bg-orange-300/20 rounded-lg border-2 border-orange-500 h-[300px]" />
          
          {/* Side panel */}
          <div className="bg-orange-300/20 rounded-lg border-2 border-orange-500 h-[300px]" />
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {['A', 'B', 'C', 'D'].map((option) => (
            <button
              key={option}
              className="bg-orange-300/20 rounded-lg border-2 border-orange-500 p-4 h-16 hover:bg-orange-500/20 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next button */}
        <div className="flex justify-end mt-6">
          <button className="px-8 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
