"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserRoleRequest {
  id: number;
  username: string;
  email: string;
  role: string;
  requested_role: string;
}

export default function RoleRequestsPage() {
  const [requests, setRequests] = useState<UserRoleRequest[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/role-requests/`)
      .then(response => setRequests(response.data))
      .catch(error => console.error("Error fetching role requests", error));
  }, []);

  const updateRole = (userId: number, newRole: string, approved: boolean) => {
    axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/role-update/${userId}/`, {
      role: newRole,
      role_approved: approved,
      requested_role: ""  // Clear requested_role after update
    })
    .then(response => {
      setRequests(prev => prev.filter(user => user.id !== userId));
    })
    .catch(error => console.error("Error updating role", error));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Role Requests</h1>
      {requests.length === 0 ? (
        <p>No pending role requests.</p>
      ) : (
        <ul>
          {requests.map(user => (
            <li key={user.id} className="border p-4 mb-2">
              <p>
                <strong>{user.username}</strong> (Current Role: {user.role}) requested <em>{user.requested_role}</em>
              </p>
              <div className="mt-2 space-x-2">
                <button 
                  onClick={() => updateRole(user.id, user.requested_role, true)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Approve
                </button>
                <button 
                  onClick={() => updateRole(user.id, user.role, false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Decline
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}