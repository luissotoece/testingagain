// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// interface User {
//   id: number;
//   username: string;
//   first_name: string;
//   last_name: string;
//   email: string;
// }

// const UserListPage = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/accounts/users/")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">User List</h1>
//       <table className="min-w-full bg-white border border-gray-300 shadow-lg">
//         <thead>
//           <tr className="bg-gray-200 text-left">
//             <th className="py-2 px-4 border">Username</th>
//             <th className="py-2 px-4 border">First Name</th>
//             <th className="py-2 px-4 border">Last Name</th>
//             <th className="py-2 px-4 border">Email</th>
//             <th className="py-2 px-4 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className="hover:bg-gray-100">
//               <td className="py-2 px-4 border">{user.username}</td>
//               <td className="py-2 px-4 border">{user.first_name}</td>
//               <td className="py-2 px-4 border">{user.last_name}</td>
//               <td className="py-2 px-4 border">{user.email}</td>
//               <td className="py-2 px-4 border">
//                 <button
//                   className="bg-blue-500 text-white px-3 py-1 rounded"
//                   onClick={() => router.push(`/users/${user.id}`)}
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserListPage;


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

const UserListPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/accounts/users/")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="min-w-full bg-white border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4 border">Username</th>
            <th className="py-2 px-4 border">First Name</th>
            <th className="py-2 px-4 border">Last Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Role</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{user.username}</td>
              <td className="py-2 px-4 border">{user.first_name}</td>
              <td className="py-2 px-4 border">{user.last_name}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border">{user.role}</td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => router.push(`/users/${user.id}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListPage;