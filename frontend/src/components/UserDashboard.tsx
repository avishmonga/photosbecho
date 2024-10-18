// src/components/UserDashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const photographers = [
    { name: 'John Doe', id: 1 },
    { name: 'Jane Smith', id: 2 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Photographers</h2>
      <ul className="space-y-4">
        {photographers.map((photographer) => (
          <li key={photographer.id}>
            <Link
              to={`/photographer/${photographer.name}/events`}
              className="text-blue-500"
            >
              {photographer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
