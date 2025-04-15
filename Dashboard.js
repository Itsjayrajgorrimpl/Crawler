import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to Crawler AI</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Trending Topics</h2>
        <ul className="bg-gray-800 p-4 rounded">
          <li>#AIin2025</li>
          <li>#ViralTrends</li>
          <li>#MusicReels</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Post Generator</h2>
        <textarea
          placeholder="Enter a topic or idea..."
          className="w-full p-2 bg-gray-700 rounded mb-2"
          rows="4"
        />
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Generate Post
        </button>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <div className="bg-gray-800 p-4 rounded">
          <p>This is a generated post caption preview.</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
