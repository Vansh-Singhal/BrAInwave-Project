import React, { useState } from 'react';

const CreateCommunity = () => {
  const [maxMembers, setMaxMembers] = useState(100);

  const handleRangeChange = (event) => {
    setMaxMembers(event.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Create New Community</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="communityName" className="block text-sm font-medium text-gray-700">Community Name</label>
          <input type="text" id="communityName" name="communityName" className="mt-1 px-2 outline-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" placeholder="Enter community name" />
        </div>
        <div>
          <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700">Maximum Members Allowed</label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              id="maxMembers"
              name="maxMembers"
              min="10"
              max="500"
              step="10"
              value={maxMembers}
              onChange={handleRangeChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-medium text-gray-700">{maxMembers}</span>
          </div>
        </div>
        <div className="flex items-center">
          <input id="allowAllUsers" name="allowAllUsers" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
          <label htmlFor="allowAllUsers" className="ml-2 block text-sm text-gray-900">Allow all users to join</label>
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-800">Create Community</button>
      </form>
    </div>
  );
};

export default CreateCommunity;
