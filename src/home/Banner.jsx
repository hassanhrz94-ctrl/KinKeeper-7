import React from 'react';

const Banner = () => {
    return (
        <div>
             <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Friends to keep close in your life
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-6 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Button */}
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md transition">
          + Add a Friend
        </button>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-800">10</h2>
            <p className="text-gray-500 text-sm">Total Friends</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-800">3</h2>
            <p className="text-gray-500 text-sm">On Track</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-800">6</h2>
            <p className="text-gray-500 text-sm">Need Attention</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-800">12</h2>
            <p className="text-gray-500 text-sm">Interactions This Month</p>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner;