import React from "react";

const CommunityInfo = () => {
  return (
    <div className="mt-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Community Information</h2>
      <p className="mb-2"><strong>Description:</strong> A group for math enthusiasts to discuss various topics, share resources, and help each other with problem-solving.</p>
      <p className="mb-2"><strong>Rules:</strong></p>
      <ul className="list-disc pl-5 mb-4">
        <li>Be respectful to all members</li>
        <li>Stay on topic (math-related discussions only)</li>
        <li>No spamming or self-promotion</li>
        <li>Use appropriate language</li>
      </ul>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Leave Community</button>
    </div>
  );
};

export default CommunityInfo;
