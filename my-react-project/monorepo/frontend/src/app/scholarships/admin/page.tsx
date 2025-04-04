// "use client";
// import { useState, useEffect } from "react";

// export default function AdminScholarships() {
//   const [scholarships, setScholarships] = useState<{ id: number; name: string; amount: number }[]>([]);
//   const [token, setToken] = useState(""); // Admin token

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/scholarships/")
//       .then((res) => res.json())
//       .then((data) => setScholarships(data))
//       .catch((error) => console.error("Error fetching scholarships:", error));
//   }, []);

//   const handleDelete = async (id: number) => { // Explicitly set type to number
//     if (!token) {
//       alert("You must be logged in as an admin.");
//       return;
//     }

//     const response = await fetch(`http://127.0.0.1:8000/api/scholarships/${id}/`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (response.ok) {
//       setScholarships(scholarships.filter((s) => s.id !== id));
//     } else {
//       alert("Failed to delete. Ensure you are an admin.");
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Panel - Manage Scholarships</h1>
      
//       <input
//         type="text"
//         placeholder="Admin Token"
//         value={token}
//         onChange={(e) => setToken(e.target.value)}
//       />

//       <ul>
//         {scholarships.map((s) => (
//           <li key={s.id}>
//             {s.name} - ${s.amount}
//             <button onClick={() => handleDelete(s.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define an interface for a Scholarship
interface Scholarship {
  id: number;
  name: string;
  amount: number;
  // Add other fields if needed (e.g., description, deadline, etc.)
}

export default function AdminScholarships() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [token, setToken] = useState(""); // Admin token input
  const router = useRouter();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/scholarships/")
      .then((res) => res.json())
      .then((data: Scholarship[]) => setScholarships(data))
      .catch((error) => console.error("Error fetching scholarships:", error));
  }, []);

  const handleDelete = async (id: number) => {
    if (!token) {
      alert("You must be logged in as an admin.");
      return;
    }
    const response = await fetch(`http://127.0.0.1:8000/api/scholarships/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      setScholarships(scholarships.filter((s) => s.id !== id));
    } else {
      alert("Failed to delete. Ensure you are an admin.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - Manage Scholarships</h1>
      <input
        type="text"
        placeholder="Admin Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <ul>
        {scholarships.map((s) => (
          <li key={s.id} className="flex justify-between items-center py-2 border-b">
            <span>
              {s.name} - ${s.amount}
            </span>
            <button
              onClick={() => handleDelete(s.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => router.push("/scholarships/create")}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Create New Scholarship
      </button>
    </div>
  );
}