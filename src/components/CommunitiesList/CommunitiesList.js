import React from 'react';
import { communities } from './data';
import { Link } from 'react-router-dom';

const CommunitiesList = () => {

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Join Existing Communities</h3>
      <ul className="space-y-4">
        {communities.map((community, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <div>
              <h4 className="font-semibold">{community.name}</h4>
              <p className="text-sm text-gray-500">{community.members} members</p>
            </div>
            <Link to="/chat" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-800">Join</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunitiesList;
